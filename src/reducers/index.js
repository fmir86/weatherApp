import { combineReducers } from 'redux';
import reducerWeather from "./reducerWeather";
import reducerError from "./reducerError";

const rootReducer = combineReducers({
  weather: reducerWeather,
  error: reducerError
});

export default rootReducer;
