import { useState, useEffect } from 'react';
import { getCountries } from '../Countries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const resp = await getCountries();
      setCountries(resp);
    };
    fetchData();
  }, []);
  return countries;
}
