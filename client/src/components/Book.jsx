import React, { useState } from 'react';
import './Book.css';

const Book = () => {
  const [bookingData, setBookingData] = useState({
    whereTo: '',
    guests: '',
    arrivals: '',
    leaving: ''
  });

  const handleChange = (e) => {
    setBookingData({ ...bookingData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
const response = await fetch(`${backendUrl}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(bookingData)
      });
      const data = await response.json();

      if (data.success) {
        alert('Booking Request Sent Successfully!');
        setBookingData({ whereTo: '', guests: '', arrivals: '', leaving: '' });
      } else {
        alert('Failed to send booking request.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Backend server non-responsive.');
    }
  };

  return (
    <section className="book-section" id="book">
      <h1 className="heading">
        <span>b</span><span>o</span><span>o</span><span>k</span>
        <span className="space"></span>
        <span>n</span><span>o</span><span>w</span>
      </h1>

      <div className="book-flex-container">
        <div className="book-image-box">
          <img src="/images/book1.avif" alt="Book visual" />
        </div>

        <form className="book-form-box" onSubmit={handleSubmit}>
          <div className="inputBox">
            <h3>where to</h3>
            <input
              type="text"
              name="whereTo"
              value={bookingData.whereTo}
              onChange={handleChange}
              placeholder="place name"
              required
            />
          </div>

          <div className="inputBox">
            <h3>how many</h3>
            <input
              type="number"
              name="guests"
              value={bookingData.guests}
              onChange={handleChange}
              placeholder="number of guests"
              required
            />
          </div>

          <div className="inputBox">
            <h3>arrivals</h3>
            <input
              type="date"
              name="arrivals"
              value={bookingData.arrivals}
              onChange={handleChange}
              required
            />
          </div>

          <div className="inputBox">
            <h3>leaving</h3>
            <input
              type="date"
              name="leaving"
              value={bookingData.leaving}
              onChange={handleChange}
              required
            />
          </div>

          <input type="submit" className="btn" value="book now" />
        </form>
      </div>
    </section>
  );
};

export default Book;