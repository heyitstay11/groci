import { Router } from 'express';
import Order from '../models/order.js';
const router = Router();
import { requireAuth } from '../middlewares/jwt.js';


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

router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const order = await Order.findById(id);
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
        res.json({id: order._id});
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