import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './middlewares/connectDB.js';
import authRouter from './routes/auth.js';
import productRouter from './routes/product.js';
const PORT = process.env.PORT || 3000;

const app = express();
connectDB();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/auth', authRouter);
app.use('/product', productRouter);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));