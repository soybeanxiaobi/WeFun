import React, { useState, useEffect } from 'react';
import { Card, Loading, Notify } from 'zent';

// import { dispatch } from '../../utils/dispatch';
import { fetchJokeList } from '../../services/joke';
import './index.scss';

interface IJokeList {
  id: number;
  title: string;
  content: string;
}

export const Joke = () => {
  const [jokeList, setJokeList] = useState([]);
  const [loading, setIsLoading] = useState(false);
  // const { data, loading } = dispatch((service: fetchJokeList));
  useEffect(() => {
    const asyncFetch = async () => {
      setIsLoading(true);
      try {
        const result = await fetchJokeList();
        setJokeList(result.data);
      } catch (err) {
        Notify.error(err);
      }
      setIsLoading(false);
    }
    asyncFetch();
  }, []);
  return (
    <div className="joke-wrapper">{
      loading ? <Loading show={true} /> : jokeList.map((item: IJokeList) => (
        <Card key={item.id} title={item.title || ''} className="card-style">
          <p>{item.content}</p>
        </Card>
      ))}
    </div>
  )
}