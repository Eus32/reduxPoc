// Set up your root reducer here...
import { combineReducers } from 'redux';
import {booksReducer, bookReducer} from './bookReducers'
import {softwareReducer, softwaresReducer} from './softwareReducers'
import cart from './cartReducers';

export default combineReducers({
  books: booksReducer,
  book: bookReducer,
  softwares: softwaresReducer,
  software: softwareReducer,
  cart
});
