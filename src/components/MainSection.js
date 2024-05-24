import React from 'react'
import Mainsec from '../styles/Mainsec.css'

const MainSection = () => {
  return(
    <main className="main-section">
      <div className="content1">
        <h2>Welcome to MediCare+ Clinic</h2>
        <h1>Best Specialists</h1>
        <p>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</p>
        <div className="buttons">
          <button className="appointment-button">Make an Appointment</button>
          <button className="departments-button">Departments</button>
        </div>
      </div>
      <div className="image-placeholder"></div>
    </main>
  );
}

export default MainSection
