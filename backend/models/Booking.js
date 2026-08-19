const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  whereTo: { type: String, required: true },
  guests: { type: Number, required: true },
  arrivals: { type: String, required: true },
  leaving: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Booking', bookingSchema);