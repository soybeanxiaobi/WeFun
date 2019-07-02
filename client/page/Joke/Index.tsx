import React, { useState, useEffect } from 'react';
import { Card } from 'zent';
import ajax from 'axios';

export const Joke = (props: any) => {
  useEffect(() => {
    const fetchData = async () => {
      const result = await ajax(
        'http://127.0.0.1:3000/joke/list',
      );
      console.log('result', result);
    };
    fetchData();
  }, []);

  return (
    <div>Joke</div>
  )
}