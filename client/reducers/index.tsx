import { createStore, combineReducers } from 'redux';

import { jokeReducer } from './joke';

/**
 * combineReducers 辅助函数的作用
 * 把一个由多个不同 reducer 函数作为 value 的 object，合并成一个最终的 reducer 函数
 * 然后就可以对这个 reducer 调用 createStore
 */
const reducer = combineReducers({
  joke: jokeReducer,
})

/**
 * redux-thunk作用:
 *  https://juejin.im/post/5b035c0c51882565bd258f12
 */

 /**
  * redux插件: applyMiddleware()
  * https://cn.redux.js.org/docs/api/applyMiddleware.html
  */

export const store = createStore(reducer)
