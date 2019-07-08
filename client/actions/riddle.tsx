import { store } from '../reducers';
import { getList } from '../services/riddle';

export const fetchRiddleList = (): void => {
  getList().then(res => {
    console.log('res', res);
    store.dispatch({ type: 'SET_RIDDLE_LIST', payload: { list: res.data } });
  })
};