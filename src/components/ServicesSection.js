import React from 'react';
import ServiceSec from '../styles/ServiceSec.css';
import { BsLungs } from "react-icons/bs";
import { TbDental } from "react-icons/tb";
import { PiBrainLight } from "react-icons/pi";
import { CiMemoPad } from "react-icons/ci";

const ServicesSection = () => {
  return (
    <div className="services-container"> {/* Wrap the section in a container */}
      <section className="services-section">
        <h2>Our Services</h2>
        <p>We provide the most full medical services, so every person could have the opportunity to receive qualitative medical help.</p>
        <div className="services">
          <ServiceCard title="Dental Care" icon={<TbDental />} />
          <ServiceCard title="Pulmonary" icon={<BsLungs />} />
          <ServiceCard title="Neurological" icon={<PiBrainLight />} />
          <ServiceCard title="Pediatrics" icon={<CiMemoPad />} />
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ title, icon }) => {
  return (
    <div className="service-card">
      <div className="service-icon">{icon}</div>
      <h3>{title}</h3>
      <div className="learn-more">LEARN MORE <span>&gt;</span></div>
    </div>
  );
};

export default ServicesSection;
