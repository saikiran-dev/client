import { combineReducers } from "redux";

import { elementReducer } from "./elements/element.reducer.js";

export default combineReducers({
  elements: elementReducer,
});
