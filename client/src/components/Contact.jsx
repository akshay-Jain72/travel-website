import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      
      if (data.success) {
        alert('Message Sent Successfully!');
        setFormData({ name: '', email: '', number: '', subject: '', message: '' });
      } else {
        alert('Failed to send message.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Backend server non-responsive.');
    }
  };

  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        <span>c</span><span>o</span><span>n</span><span>t</span><span>a</span><span>c</span><span>t</span>
      </h1>

      <div className="row">
        <div className="image">
          <img src="/images/contact2.avif" alt="Contact Visual" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputBox">
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="name" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email" required />
          </div>

          <div className="inputBox">
            <input type="number" name="number" value={formData.number} onChange={handleChange} placeholder="number" required />
            <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="subject" required />
          </div>

          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="message" cols="30" rows="10" required></textarea>
          <input type="submit" className="btn" value="send message" />
        </form>
      </div>
    </section>
  );
};

export default Contact;