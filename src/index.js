import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from "redux-promise";

import App from './components/app';
import reducers from './reducers';

// Load the Google Maps script only when a key is provided (see README).
if (process.env.GOOGLE_MAPS_API_KEY) {
  const mapsScript = document.createElement('script');
  mapsScript.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}`;
  document.head.appendChild(mapsScript);
}

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
