import dotenv from 'dotenv';
import { connectDB } from './db.mjs';
import app from './app.mjs'; 

dotenv.config();

// Database Connection
connectDB();

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
