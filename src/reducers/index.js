import { combineReducers } from "redux";
import { homeReducer } from "./home";
import { getOnePicReducer } from "./getOnePic";

const reducers = combineReducers({
  homeReducer,
  getOnePicReducer
});

export default reducers;
