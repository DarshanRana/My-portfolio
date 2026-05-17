import React, { useState } from 'react';
import { LuSend } from 'react-icons/lu';

const Contact = () => {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setTimeout(() => setStatus(''), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Get In Touch</h2>
      <div className="contact-container glass card">
        {status === 'sent' ? (
          <div className="success-message animate-fade-in">
            <h3>Message Sent Successfully! ✨</h3>
            <p>Thanks for reaching out. I'll get back to you as soon as possible.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required placeholder="Your Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" required placeholder="your.email@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" required placeholder="How can I help you?"></textarea>
            </div>
            <button type="submit" className="btn btn-primary submit-btn" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : (
                <>Send Message <LuSend /></>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
