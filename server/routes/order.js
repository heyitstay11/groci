import { Router } from 'express';
import Order from '../models/order.js';
import User from '../models/user.js';
import Product from '../models/product.js';
import { requireAuth } from '../middlewares/jwt.js';
const router = Router();


router.use(requireAuth)

// get all order by user id
router.get('/', async (req, res) => {
    const { id } = req.user;
    try {
        const orders = await Order.find({ customer: id }).sort({ "createdAt" : -1 });
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// get order by Id
router.get('/:id', async (req, res) => {
    const { id: userId } = req.user;
    try {
        const { id: orderId } = req.params;
        const order = await Order.findById(orderId);
        const user = await User.findById(userId);
        
        if(order.customer.toString() !== user._id.toString() && !user.isAdmin){
            return res.status(401).json({ error: "You are not authorised for this action"});
        }
        res.json(order);
    } catch (error) {
        res.status(500).json({ error })
    }
});

// create order
router.post('/create', async (req, res) => {
    const { id } = req.user;
    const { address, name, phone, total_price, payment_method, products} = req.body;
    try {
        const order = await Order.create({ customer: id, address, name, phone, total_price, payment_method, products });
        const updateProducts = order.products.map(async (item) => {
            const product = await Product.findById(item._id);
            product.quantity = product.quantity - item.count;
            return await product.save();
        });
        Promise.all([...updateProducts]);
        res.json({id: order._id});
    }catch (error) { 
        res.status(500).json({ error });
    }
});

// edit order
router.put('/:id', async (req, res) => {
    const { id: userId } = req.user;
    const { id: orderId } = req.params;
    const { status } = req.body;
    try {
        const user = await User.findById(userId);
        if(!user.isAdmin){
            return res.status(401).json({ error: "You are not authorised for this action"});
        }
        
        const order = await Order.findById(orderId);
        if(!order){
            return res.status(400).json({ error: "No such Order exists"})
        }
        order.status = status;
        await order.save();
        res.json({ id: order._id });
    } catch (error) {
        res.status(500).json({ error })
    }
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