import React from 'react'
import Newsletters from '../styles/Newsletters.css'
const Newsletter = () => {
  return (
    <div>
      <div className="newsletter-container">
      <h2>Subscribe to Newsletter</h2>
      <p>We have a wide experience in experience design and strategy,</p>
      <form className="newsletter-form">
        <input
          type="email"
          placeholder="Enter your email address"
          required
        />
        <button type="submit">Send Now</button>
      </form>
    </div>
    </div>
  )
}

export default Newsletter
