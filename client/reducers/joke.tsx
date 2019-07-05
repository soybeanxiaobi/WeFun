import { IAction } from './types/index';

interface jokeState {
  list: Array<string>,
}
const initState = {
  list: []
} 
export const jokeReducer = (state: jokeState = initState, action: IAction) => {
  switch (action.type) {
    case 'SET_JOKE_LIST':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}