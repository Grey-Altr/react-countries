import React from 'react';

export default function countryCard({ name, iso2 }) {
  return (
    <div className="countryCard">
      <h3 className="name">{name}</h3>
      <img src={`https://flagcdn.com/84x63/${iso2.toLowerCase()}.png`} />
    </div>
  );
}
