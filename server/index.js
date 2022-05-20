import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import connectDB from './middlewares/connectDB.js';
import authRouter from './routes/auth.js';
const PORT = process.env.PORT || 3000;

const app = express();
connectDB();
app.use(express.json());
app.use(cors());



app.get('/', (req, res) => {
    res.send('Hello');
});
app.use('/auth', authRouter);

app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));