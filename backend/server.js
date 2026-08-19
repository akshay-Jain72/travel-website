const express = require('express');
const cors = require('cors');
const User = require('./models/User');
const mongoose = require('mongoose');

// Models Import
const Contact = require('./models/Contact');
const Booking = require('./models/Booking');

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB Atlas Connection (Quotes aur /travelDB add kar diya hai)
const MONGO_URI = 'mongodb://jain47699_db_user:ONA6ewfNn2ycudOY@ac-62kd0nu-shard-00-00.d4uw49j.mongodb.net:27017,ac-62kd0nu-shard-00-01.d4uw49j.mongodb.net:27017,ac-62kd0nu-shard-00-02.d4uw49j.mongodb.net:27017/travelDB?ssl=true&replicaSet=atlas-aaqhza-shard-0&authSource=admin&appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas successfully!'))
  .catch((err) => console.error('MongoDB Atlas Connection Error:', err));

// --- API ROUTES ---

// Contact Route
app.post('/api/contact', async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ success: true, message: 'Message saved to Atlas!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save contact' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });

    if (!user) {
      user = new User({ email, password });
      await user.save();
      return res.status(201).json({ success: true, message: 'User registered and saved to Atlas!' });
    }

    if (user.password !== password) {
      return res.status(400).json({ success: false, message: 'Invalid password!' });
    }

    res.status(200).json({ success: true, message: 'Login successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
});
// Booking Route
app.post('/api/book', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(200).json({ success: true, message: 'Booking saved to Atlas!' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to save booking' });
  }
});

// Fetch Bookings Route
app.get('/api/book', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ success: false, message: 'Error fetching bookings' });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});