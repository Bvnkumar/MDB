import { combineReducers } from "redux";
const welcome = { count: 1 };
export const welcomeReducer = (state = welcome, action) => {
  return state;
};
export default combineReducers({ welcome: welcomeReducer });
