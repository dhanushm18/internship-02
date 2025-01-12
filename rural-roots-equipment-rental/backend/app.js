require('dotenv').config(); // Ensure this line is at the very top

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const equipmentRoutes = require('./routes/equipmentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
mongoose.connect('mongodb://localhost:27017/rural_roots', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api/equipment', equipmentRoutes);
app.use('/api/contact', require('./routes/contactRoutes'));

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});