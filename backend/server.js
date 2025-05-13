const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 8000;

const registerUser = require('./routes/userRoute');
const authRoutes = require('./routes/authRoutes');

//app.use(cors());

app.use(cookieParser());

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
  }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("Connected to MongoDB successfully");
})
.catch((error) => {
    console.error("MongoDB connection error:", error.message);
});

app.use('/api/user', registerUser);
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
