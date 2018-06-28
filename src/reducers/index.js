import { combineReducers } from "redux";
import BooksReducer from "./reducers_books";
import ActiveBookReducer from "./active_book";
import TestReducer from "./reducers_test";
// import TestReducer1 from "./reducers_test1";

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBookReducer,
  testReducer: TestReducer
  // testReducer1: TestReducer1
});

export default rootReducer;
