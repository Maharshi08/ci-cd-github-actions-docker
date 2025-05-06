import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>📞 Contact Us</h2>
      <p>Feel free to reach out for any questions, feedback, or collaboration!</p>

      <div className="contact-info">
        <p><strong>Email:</strong> support@myapp.com</p>
        <p><strong>Phone:</strong> +1 (234) 567-8901</p>
        <p><strong>Address:</strong> 123 Country Lane, Global City, Earth</p>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea rows="5" placeholder="Your Message" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
