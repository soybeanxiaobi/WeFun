import { IAction } from './types/index';

interface riddleState {
  list: Array<string>,
}
const initState = {
  list: []
} 
export const riddleReducer = (state: riddleState = initState, action: IAction) => {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case 'SET_RIDDLE_LIST':
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}