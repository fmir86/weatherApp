import React, { Component } from 'react';

import SearchBar from "../containers/SearchBar";
import WeatherList from "../containers/WeatherList";
import ErrorMessage from "../containers/ErrorMessage";

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar/>
        <ErrorMessage/>
        <WeatherList/>
      </div>
    );
  }
}
