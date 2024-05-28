import { combineReducers, createStore } from "redux";
import expense from "../modules/expense";

const rootReducer = combineReducers({
  expense,
});
const store = createStore(rootReducer);

export default store;
