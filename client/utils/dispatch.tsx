import React, { useState, useEffect } from 'react';
import { fetchJokeList } from '../services/joke';

import { Notify } from 'zent';

export const dispatch = (service: any) => {
  const [data, setData] = useState([]);
  const [loading, setIsLoading] = useState(false);
  console.log('service', service);
  useEffect(() => {
    const asyncFetch = async () => {
      setIsLoading(true);
      try {
        const result = await fetchJokeList();
        setData(result.data);
      } catch (err) {
        Notify.error(err);
      }
      setIsLoading(false);
    }
    asyncFetch();
  }, []);
  return { data, loading };
}