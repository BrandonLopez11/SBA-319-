import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
// import userRoutes from './routes/userRoutes.mjs';
// import postRoutes from './routes/postRoutes.mjs';
// import commentRoutes from './routes/commentRoutes.mjs';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// // Routes
// app.use('/users', userRoutes);
// app.use('/posts', postRoutes);
// app.use('/comments', commentRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.error('Database connection error:', err));

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
