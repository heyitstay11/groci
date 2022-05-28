import jwt from 'jsonwebtoken';

const getJWTToken = ( id ) => {
    const jwtToken =  jwt.sign(id, process.env.JWT_SECRET, {
        expiresIn: '15d'
    });
    return jwtToken;
}

const requireAuth = async (req, res, next) => {
    const token = req.headers["x-auth-token"];
    
    if(!token){
        return res.status(401).json({msg: "No Token Provided"});
    }

    try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decodedToken;
        next();
    } catch (error) {
        res.status(401).json({ msg: "Invalid Token" });
    }
}

export { getJWTToken, requireAuth };
