import React from 'react';
import "./Services.css";

const Services = () => {
  const services = [
    { icon: 'fa-hotel', title: 'affordable hotels', desc: 'We provide budget-friendly and comfortable hotel options.' },
    { icon: 'fa-utensils', title: 'food and drinks', desc: 'Savor a variety of delicious meals and refreshing beverages.' },
    { icon: 'fa-bullhorn', title: 'safety guide', desc: 'Your safety is our priority. We offer detailed safety guidelines.' },
    { icon: 'fa-globe-asia', title: 'around the world', desc: 'Explore top destinations around the globe.' },
    { icon: 'fa-plane', title: 'fastest travel', desc: 'Save time and travel smart with our efficient booking.' },
    { icon: 'fa-hiking', title: 'adventures', desc: 'Get ready for thrilling adventures that make your travel unforgettable.' }
  ];

  return (
    <section className="services" id="services">
      <h1 className="heading">
        <span>s</span><span>e</span><span>r</span><span>v</span><span>i</span><span>c</span><span>e</span><span>s</span>
      </h1>

      <div className="box-container">
        {services.map((service, index) => (
          <div className="box" key={index}>
            <i className={`fas ${service.icon}`}></i>
            <h3>{service.title}</h3>
            <p>{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;