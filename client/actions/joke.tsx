import { store } from '../reducers';
import { getList } from '../services/Joke';

export const fetchJokeList = (): void => {
  getList().then(res => {
    store.dispatch({ type: 'SET_JOKE_LIST', payload: { list: res.data } });
  })
};