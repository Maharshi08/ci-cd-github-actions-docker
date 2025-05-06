import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './CountryDetail.css';

function CountryDetail() {
  const { code } = useParams();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${code}`)
      .then(res => res.json())
      .then(data => {
        setCountry(data[0]);
        setLoading(false);
      })
      .catch(err => {
        console.error("Failed to fetch country", err);
        setError("Could not fetch country details.");
        setLoading(false);
      });
  }, [code]);

  if (loading) return <p className="loading">Loading details...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!country) return <p>Country not found.</p>;

  return (
    <div className="country-detail">
      <h2>🌐 {country.name.common}</h2>
      <img src={country.flags.svg} alt={`${country.name.common} flag`} />
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
      <p><strong>Languages:</strong> {Object.values(country.languages || {}).join(', ')}</p>
      <p><strong>Currencies:</strong> {Object.values(country.currencies || {}).map(c => c.name).join(', ')}</p>
    </div>
  );
}

export default CountryDetail;
