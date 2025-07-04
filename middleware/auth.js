import jwt from 'jsonwebtoken';

export function verifyToken(req,res,next){
    const token=req.header('Authorization');
    console.log('token::',token)
    if(!token) return res.status(401).json({error:'Access Denied.'})
    try {
        const decoded=jwt.verify(token,process.env.SECRET);
        req.userId=decoded.userId;
        next();
    } catch (error) {
        return res.status(401).json({error:'Invalid token'})
    }
}