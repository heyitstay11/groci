import { Router } from 'express';
const router = Router();
import Product from '../models/product.js';
import User from '../models/user.js';
import { requireAuth } from '../middlewares/jwt.js';
import multer from 'multer';
import Datauri from 'datauri/parser.js';
import path from 'path';
import { config, uploader } from 'cloudinary';
import dotenv from 'dotenv';
dotenv.config();

// set cloudinary
const cloudinaryConfig = (req, res, next) => {
    config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
        secure: true,
    });
    next();
}

// set datauri
const dUri = new Datauri();
const datauri = file => {
    return dUri.format(path.extname(file.originalname).toString(), file.buffer);
}

// set multer
const storage = multer.memoryStorage();
const upload = multer({ storage }).single('img');

// prevent regex crash
const escapeRegex = (text) => {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
};


router.use(cloudinaryConfig);

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
router.post('/create', requireAuth, upload, async (req, res) => {
    const { id } = req.user;
    const { title, 
            desc, 
            sale, 
            price,
            quantity, 
            measurement_name : m_name, measurement_desc: m_desc } = req.body;
    let image = '';
    try {
        const user = await User.findById(id);
        if(!user.isAdmin){
            return res.status(401).json({ error: "You are not authorised for this action"});
        }

        let product = await Product.findOne({ title });
        if(product){
            return res.status(400).json({ error: "Product with this name already exists "})
        }

        if(req.file){
            const file = datauri(req.file).content;
            const cloudinaryRes = await uploader.upload(file);
            image = cloudinaryRes.secure_url;
        }else{
            image = req.body.img;
        }
        product = await Product.create({ title, desc, sale, price, img: image, quantity, measurement: { name: m_name, desc: m_desc }});
        res.json({ id: product._id});
    }catch (error) {
        res.status(500).json(error)
    }
});

// edit product
router.put('/:id', requireAuth, upload, async (req, res) => {
    const { id: userId } = req.user;
    const { id: productId } = req.params;
    const { title, 
            desc, 
            sale, 
            price, 
            quantity, 
            m_name,  m_desc } = req.body;
    let image = '';
    try {
        const user = await User.findById(userId);
        if(!user.isAdmin){
            return res.status(401).json({ error: "You are not authorised for this action"});
        }

        let product = await Product.findById(productId);
        if(!product){
            return res.status(400).json({ error: "No such product exists"})
        }

        if(req.file){
            const file = datauri(req.file).content;
            const cloudinaryRes = await uploader.upload(file);
            image = cloudinaryRes.secure_url;
        }else{
            image = req.body.img;
        }

        product = await Product.findByIdAndUpdate(productId, 
               { title, desc, sale, price, img: image, quantity, m_name,  m_desc }, { new: true });
            
        res.json({ id: product._id});
    } catch (error) {
        res.status(500).json(error);
    }
});

// delete product
router.delete('/:id', async (req, res) => {

});


export default router;