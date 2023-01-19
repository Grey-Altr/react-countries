import React from 'react';

export default function countryCard({ name }) {
  return (
    <div className="countryCard">
      <h3 className="name">{name}</h3>
      {/* <img className="flag">{iso2}</img> */}
    </div>
  );
}
