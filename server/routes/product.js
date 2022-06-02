import { Router } from 'express';
const router = Router();
import Product from '../models/product.js';
import { requireAuth } from '../middlewares/jwt.js';

// get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error });
    }
});

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
router.post('/create', requireAuth , async (req, res) => {
    try {
        const { title, desc, sale, price, img, quantity, measurement_name : m_name, measurement_desc: m_desc } = req.body;
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
router.put('/:id', async (req, res) => {

});

// delete product
router.delete('/:id', async (req, res) => {

});


export default router;