import React, { useState } from 'react';
import './NewsLetter.css';

const NewsLetter = () => {
  // State to store the email input
  const [email, setEmail] = useState('');

  // Function to handle email input change
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submit action
    // Here you can add what to do with the email, e.g., sending it to a server
    console.log('Email Submitted:', email);
    alert(`Thank you for subscribing with ${email}!`); // Example action
  };

  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated</p>
        <form onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder='Your Email id' 
              value={email} 
              onChange={handleEmailChange} 
            />
            <button type="submit">Subscribe</button>
        </form>
    </div>
  );
};

export default NewsLetter;
