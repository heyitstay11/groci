import { Router } from 'express';
const router = Router();
import Product from '../models/product.js';
import User from '../models/user.js';
import { requireAuth } from '../middlewares/jwt.js';
import multer from 'multer';

const storage = multer.memoryStorage();
const upload = multer({ storage }).single('img');

const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};

// get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// search product
router.get('/search/:title', async (req, res) => {
    const { title } = req.params;
    const regex = new RegExp(escapeRegex(title), 'gi');
    try {
        const products = await Product.find({title: regex}).limit(10);
        res.json(products);
    } catch (error) {
        res.status(500).json({ error });
    }
})

// get product by id
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const product = await Product.findById(id);
        res.json(product);
    } catch (error) {
        res.status(500).json({ error });
    }
});

// create product
router.post('/create', upload, async (req, res) => {
    console.log(req.body.title);
    return res.end();
    const { id } = req.user;
    const { title, 
            desc, 
            sale, 
            price, 
            img, 
            quantity, 
            measurement_name : m_name, measurement_desc: m_desc } = req.body;
    try {
        const user = await User.findById(id);
        if(!user.isAdmin){
            return res.status(401).json({ error: "You are not authorised for this action"});
        }
        let product = await Product.findOne({ title });
        
        if(product){
            return res.status(400).json({ error: "Product with this name already exists "})
        }

        product = await Product.create({ title, desc, sale, price, img, quantity, measurement: { name: m_name, desc: m_desc }});

        res.json({ id: product._id});
    }catch (error) { 
        res.status(500).json({ error })
    }
});

// edit product
router.put('/:id', requireAuth, async (req, res) => {
    const { id: userId } = req.user;
    const { id: productId } = req.params;
    const { title, 
            desc, 
            sale, 
            price, 
            img, 
            quantity, 
            m_name,  m_desc } = req.body;
    try {
        const user = await User.findById(userId);
        if(!user.isAdmin){
            return res.status(401).json({ error: "You are not authorised for this action"});
        }

        let product = await Product.findById(productId);

        if(!product){
            return res.status(400).json({ error: "No such product exists"})
        }

        product = await Product.findByIdAndUpdate(productId, { 
            title, 
            desc, 
            sale, 
            price, 
            img, 
            quantity, 
            m_name,  m_desc }, { new: true });
            
        res.json({ id: product._id});
    } catch (error) {
        res.status(500).json({ error })
    }
});

// delete product
router.delete('/:id', async (req, res) => {

});


export default router;