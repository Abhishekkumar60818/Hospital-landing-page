import React from 'react'
import ClinicInv from '../styles/ClinicInv.css'
const Clinic = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Clinic With Innovative</h1>
        <p>We provide the most full medical services, so every person could heave the oppurtunity to receive qualitative medical help.</p>
        <button className="learn-more">Learn More</button>
      </div>
      <div className="services">
        <div className="service">
          <img src="qualified-doctor.jpg" alt="Qualified Doctors" className="service-image"/>
          <h2>Qualified Doctors</h2>
        </div>
        <div className="service">
          <img src="emergency-care.png" alt="Emergency Care" className="service-image"/>
          <h2>Emergency Care</h2>
        </div>
        <div className="service">
          <img src="ambulance.png" alt="Ambulance" className="service-image"/>
          <h2>Emergency Care</h2>
        </div>
      </div>
    </div>
  )
}

export default Clinic
