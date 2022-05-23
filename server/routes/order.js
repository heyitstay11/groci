import { Router } from 'express';
import Order from '../models/order.js';
const router = Router();

// get all order by user id
router.get('/', async (req, res) => {
    res.send('Orders');
});

// create order
router.post('/create', async (req, res) => {
    const { id } = req.user;
    const {address, phone, total, payment_method } = req.body;
    try {
        const order = await Order.create({ customer: id, address, phone, total, payment_method });
        res.json(order._id);
    }catch (error) { 
        res.status(500).json({ error })
    }
});

// edit order
router.put('/:id', async (req, res) => {

});

// delete order
router.delete('/:id', async (req, res) => {
    const { id } = req.user;
    try {
        let order = await Order.findOne({ customer: id });
        
        if(!order){
            return res.status(400).json({ error: "Order does not exists"});
        }
        
        order = await Order.deleteOne(order._id);
        res.json(order);
    } catch (error) {
        res.status(500).json({ error });
    }
});


export default router;