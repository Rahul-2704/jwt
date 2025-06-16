import express from 'express';
import authRoutes from './routes/user.js'
import protectedRoute from './routes/protected.js';
import connectDB from './mongo.js';
import 'dotenv/config';

const app=express();
connectDB();
app.use(express.json());
app.use('/auth',authRoutes);
app.use('/protected',protectedRoute);


app.listen(3000,()=>console.log('Server listening on PORT 3000.'))