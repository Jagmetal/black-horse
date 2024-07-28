import React, { useState } from 'react';


const Services = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState(''); // Add state for status message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(''); // Clear previous status message

    try {
      const response = await fetch('http://localhost:5000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const result = await response.text();
      setStatusMessage('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatusMessage('Failed to send email.');
    }
  };

  return (
    <section className="services">
      <h2>Our Services</h2>
      <p>
        We specialize in long-haul freight, serving a wide range of transportation needs across various regions.
      </p>
      <h3>Contact Us</h3>
      <p>Email: blackhorselogisticsgroup@yahoo.com</p>
      <p>Phone: +61 449 983 002</p>
      {/*<form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            value={formData.message} 
            onChange={handleChange} 
            required 
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {statusMessage && <p>{statusMessage}</p>} {/* Display status message */}
    </section>
  );
};

export default Services;
