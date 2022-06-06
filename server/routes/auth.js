import { Router } from 'express';
import User from '../models/user.js';
import bcrypt from 'bcrypt';
const router = Router();
import { getJWTToken } from '../middlewares/jwt.js';

router.get('/', (req, res) => {
    res.send('Auth');
});

router.post('/register', async (req, res) => {
    const {username, email, password} = req.body;

    try {
        let user = await User.findOne({ email });
    
        if(user){
            return res.status(400).json({ msg: "User with this email already exists" });
        }
        
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log(hashedPassword);
        user = await User.create({username, email, password: hashedPassword});

        const jwtToken = getJWTToken({ id: user._id});

        return res.status(201).json({ token: jwtToken , id: user._id });
    } catch (error) {
        res.status(500).send(error);
    }
});


router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.login(email, password);
        const jwtToken = getJWTToken({ id: user._id});
        
        res.json({token: jwtToken, email: user.email, isAdmin: user.isAdmin });
    } catch (error) {
        if(error.message){
            error = error.message;
        }
        console.log({error});
        res.status(401).json({error});
    }
});


export default router;