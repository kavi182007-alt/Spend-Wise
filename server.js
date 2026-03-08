const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db'); // importing the database config
const authRoutes = require('./routes/authRoutes');
const transactionRoutes = require('./routes/transactionRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

// Load environment variables
dotenv.config();

connectDB();

// Initialize Express app
const app = express();

// Middleware 
app.use(express.json()); // allowing the server to accept JSON data
app.use(cors());         // preventing Cross-Origin errors
app.use('/api/auth', authRoutes);
app.use('/api/transactions', transactionRoutes);
app.use(errorHandler);

// Basic server.js test route
app.get('/', (req, res) => {
    res.send("SpendWise API is running...");
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is tom-cruising on port ${PORT}`);
});