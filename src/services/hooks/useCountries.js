import { useState, useEffect } from 'react';
import { getCountries } from '../Countries.js';

export default function useCountries() {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await getCountries();
        setCountries(resp);
      } catch (error) {
        setError('You blew it!');
      }
    };
    fetchData();
  }, []);
  return { countries, error };
}
