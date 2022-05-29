import { Router } from 'express';
const router = Router();
import Cart from '../models/cart.js'
import { requireAuth } from '../middlewares/jwt.js';


router.use(requireAuth);

// get cart by user id
router.get('/', async (req, res) => {
    const { id } = req.user;
    try {
        const cart = await Cart.findOne({ customer: id });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// create cart
router.post('/create', async (req, res) => {
    const { id } = req.user;
    try {
       let cart = await Cart.findOne({ customer: id });

       if(cart){
           return res.status(400).json({ error: "A cart with this account already exists"});
       }

       cart = await Cart.create({ customer: id });

       res.json(cart);
    }catch (error) {  
        res.status(500).json({ error });
    }
});

// update cart
router.put('/', async (req, res) => {
    const { id } = req.user;
    const { products, total_price, quantity } = req.body;
    try {
        let cart = await Cart.findOne({ customer: id });

        if(!cart){
            return res.status(400).json({ error: "Cart does not exists"});
        }

        cart = await Cart.findByIdAndUpdate(cart._id, 
            { customer: id , products, total_price, total_quantity: quantity },
            { new: true });

        res.json(cart._id);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// delete cart
router.delete('/', async (req, res) => {
    const { id } = req.user;
    try {
        let cart = await Cart.findOne({ customer: id });
        
        if(!cart){
            return res.status(400).json({ error: "Cart does not exists"});
        }

        cart = await Cart.deleteOne(cart._id);
        res.json(cart);
    } catch (error) {
        res.status(500).json({ error });
    }
});


export default router;