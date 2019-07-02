import React, { useState, useEffect } from 'react';
import { Card } from 'zent';

import { fetchJokeList } from '../../services/Joke';
import './index.scss';

interface IJokeList {
  id: number;
  content: string;
}

export const Joke = () => {
  const [jokeList, setJokeList] = useState([]);
  useEffect(() => {
    const asyncFetch = async () => {
      await fetchJokeList().then(result => {
        setJokeList(result.data);
      });
    }
    asyncFetch();
  }, []);
  return (
    <div className="joke-wrapper">{jokeList.map((item: IJokeList) => (
      <Card key={item.id} className="card-style">
        <p>{item.content}</p>
      </Card>
    ))}</div>
  )
}