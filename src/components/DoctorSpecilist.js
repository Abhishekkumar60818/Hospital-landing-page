import React from 'react'
import DoctorSpe from '../styles/DoctorSpe.css'
const DoctorSpecilist = () => {
  return (
    <div className="container">
    <header className="header">
      <h1>We Have The Best Specialist</h1>
      <p>We have a wide experience in experience design and strategy, with locally-rooted knowledge.</p>
    </header>
    <div className="specialists">
      <div className="specialist">
        <div className="specialist-info">
          <h2>Dr. Awaatif Al</h2>
          <p>Dental Care</p>
        </div>
      </div>
      <div className="specialist">
        <div className="specialist-info">
          <h2>Dr. Filipa Gaspar</h2>
          <p>Cardiology</p>
        </div>
      </div>
      <div className="specialist">
        <div className="specialist-info">
          <h2>Dr. Sukhmeet Gorae</h2>
          <p>Neurological</p>
        </div>
      </div>
      <div className="specialist">
        <div className="specialist-info">
          <h2>Dr. Siri Jakobsson</h2>
          <p>Pediatrics</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default DoctorSpecilist
