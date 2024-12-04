import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes.mjs';
import postRoutes from './routes/postRoutes.mjs';
import commentRoutes from './routes/commentRoutes.mjs';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);

// Database Connection
import { connectDB } from './db.mjs';
connectDB();

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
