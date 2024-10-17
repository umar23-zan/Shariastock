const express = require('express');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const cors = require('cors');
const app = express();

// Connect Database
connectDB();

// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
