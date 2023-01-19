import React, { useState } from 'react';
import useCountries from '../../services/hooks/useCountries.js';
import CountryCard from '../CountryCard.js';
import './Main.css';

export default function Main() {
  const { countries, error } = useCountries();
  const [continent, setContinent] = useState('all');
  const continents = [...new Set(countries.map(({ continent }) => continent))];

  const filtered = countries.filter(
    (country) => country.continent === continent || continent === 'all'
  );

  return (
    <main className="container">
      <div className="header-filter">
        <h1>Flags of the World</h1>
        <select onChange={(e) => setContinent(e.target.value)}>
          <option value="all">all</option>
          {continents.map((continent) => (
            <option key={continent} value={continent}>
              {continent}
            </option>
          ))}
        </select>
        <p style={{ color: 'red' }}>{error}</p>
      </div>
      {filtered.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
