import { combineReducers } from 'redux';
import booksReducer from './reducer_books';
import activeBook from './reducer_active_book';

const rootReducer = combineReducers({
  books: booksReducer,
  activeBook: activeBook
});

export default rootReducer;
