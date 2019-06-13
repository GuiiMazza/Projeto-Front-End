import { combineReducers } from 'redux';
import news from './news';
import header from './header'

export default combineReducers({
  news,
  header,
})