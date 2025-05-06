// src/pages/About.js
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-container">
      <section className="about-hero">
        <h1>About World Explorer</h1>
        <p>
          We provide real-time information about countries around the world, powered by a live API.
          Whether you're a traveler, student, or researcher — we're here to help you learn more
          about the world.
        </p>
      </section>

      <section className="about-cards">
        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/201/201623.png" alt="Mission" />
          <h3>Our Mission</h3>
          <p>To deliver reliable and updated data about every country, easily accessible to everyone.</p>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1029/1029183.png" alt="Tech" />
          <h3>Technology</h3>
          <p>Built with React and REST APIs, our platform ensures real-time data and responsiveness.</p>
        </div>

        <div className="card">
          <img src="https://cdn-icons-png.flaticon.com/512/1006/1006543.png" alt="Community" />
          <h3>Community</h3>
          <p>We're open-source and thrive through feedback, ideas, and support from our global users.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
