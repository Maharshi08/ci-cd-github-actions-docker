import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './CountryList.css';

function CountryList() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('All');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => {
        const formatted = data.map(c => ({
          name: c.name.common,
          code: c.cca2 || c.cca3,
          flag: c.flags?.svg,
          region: c.region,
        }));
        setCountries(formatted);
        setFiltered(formatted);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch failed", err);
        setError("Failed to load countries.");
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const result = countries.filter(country => {
      const matchesSearch = country.name.toLowerCase().includes(search.toLowerCase());
      const matchesRegion = region === 'All' || country.region === region;
      return matchesSearch && matchesRegion;
    });
    setFiltered(result);
  }, [search, region, countries]);

  if (loading) return <p className="loading">Loading countries...</p>;
  if (error) return <p className="error">{error}</p>;

  const uniqueRegions = ['All', ...new Set(countries.map(c => c.region).filter(Boolean))];

  return (
    <div className="country-list">
      <h2>🌍 Country List</h2>

      <div className="filters">
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <select value={region} onChange={e => setRegion(e.target.value)}>
          {uniqueRegions.map(r => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className="card-grid">
        {filtered.map((country, index) => (
          <Link key={index} to={`/countries/${country.code}`} className="country-card">
            <img src={country.flag} alt={`${country.name} flag`} />
            <p>{country.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
