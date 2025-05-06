import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to World Explorer 🌎</h1>
        <p>Discover countries, their details, and more in one place!</p>
        <div className="hero-buttons">
          <Link to="/countries" className="btn">Explore Countries</Link>
          <Link to="/about" className="btn secondary">Learn More</Link>
        </div>
      </section>

      <section className="features">
        <h2>🌟 Features</h2>
        <ul>
          <li>🔍 Search and filter countries by name and region</li>
          <li>📄 View detailed information on each country</li>
          <li>📱 Fully responsive and modern UI</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;
