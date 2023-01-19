import React from 'react';
import useCountries from '../../services/hooks/useCountries.js';
import CountryCard from '../CountryCard.js';

export default function Main() {
  const countries = useCountries();

  return (
    <main>
      {countries.map((country) => (
        <CountryCard key={country.id} {...country} />
      ))}
    </main>
  );
}
