import { Router } from 'express';
import { requireAuth } from '../middlewares/jwt.js';
import Razorpay from 'razorpay';
import Order from '../models/order.js';
import crypto from 'crypto';
import dotenv from 'dotenv';
dotenv.config();

const router = Router();
router.use(requireAuth);

const razorpay = new Razorpay({
    key_id: process.env.RAZOR_KEY_ID,
    key_secret: process.env.RAZOR_KEY_SECRET,
});

router.post('/razorpay', async (req, res) => {
    const { id } = req.body;
    try {
        const order = await Order.findById(id);
        
        if(!order){
            return res.status(400).json({ err: 'No such order exists'});
        }

        const options = {
            amount: order.total_price * 100,
            currency: 'INR',
            receipt: id,
            payment_capture: 1,
        }

        const razorResponse = await razorpay.orders.create(options);
        res.json(razorResponse);
    } catch (error) {
        res.status(500).json({ error })
    }
});

router.post('/verify', async (req, res) => {
    const { razorpay_payment_id, razorpay_order_id, razorpay_signature, orderId } = req.body;
    const sign = razorpay_order_id + '|' + razorpay_payment_id;
    try {
        const expectedSign = crypto
                            .createHmac('sha256', process.env.RAZOR_KEY_SECRET)
                            .update(sign.toString())
                            .digest('hex');
        if(razorpay_signature === expectedSign){
            const order = await Order.findById(orderId);
            order.payment_method = 'card';
            await order.save();
            return res.json({ msg : "Payment Verified" });
        }
        return res.status(400).json({ err: 'Invalid Signature' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error })
    }
})

export default router;