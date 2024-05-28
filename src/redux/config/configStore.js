import { combineReducers, createStore } from "redux";
import expense from "../modules/expense";
import month from "../modules/month";

const rootReducer = combineReducers({
  expense,
  month,
});
const store = createStore(rootReducer);

export default store;
