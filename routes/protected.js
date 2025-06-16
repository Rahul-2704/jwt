import express from 'express';
import { verifyToken } from '../middleware/auth.js';
const router=express.Router();

router.get('/',verifyToken,(req,res)=>{
    return res.status(200).json({message:`Protected route accessed for user: ${req.userId}`})
})

export default router;
