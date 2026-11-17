# weatherApp

A small React and Redux app that shows a five day forecast for cities in Costa Rica. For each city you search it draws sparkline charts for temperature, pressure and humidity, plus a Google Map of the location. Weather data comes from the OpenWeatherMap forecast API.

Built on the ReduxSimpleStarter boilerplate (React 16, Redux, redux-promise, webpack 1, Babel 6).

## Requirements

- Node.js 20 (tested with 20.20) and npm 10
- An OpenWeatherMap API key (free tier works): https://openweathermap.org/api
- Optional: a Google Maps JavaScript API key, for the map column

## Configuration

API keys are read from environment variables when webpack builds the bundle. They are not stored in the repo.

| Variable | Required | Used for |
| --- | --- | --- |
| `OPENWEATHER_API_KEY` | Yes | Forecast data |
| `GOOGLE_MAPS_API_KEY` | No | Map of each city |

Without `OPENWEATHER_API_KEY` the app still loads, and a search shows the message "No OpenWeatherMap API key configured". Without `GOOGLE_MAPS_API_KEY` the map cell shows "Map unavailable" and the charts still render. If the API rejects a request (bad key, unknown city), the error message from the API is shown above the table.

## Install

```bash
npm install
```

## Run

```bash
OPENWEATHER_API_KEY=your_key GOOGLE_MAPS_API_KEY=your_maps_key npm start
```

Then open http://localhost:8080 and search for a city, for example "San Jose". Searches are limited to Costa Rica (the request adds `,CR` to the city name).

The keys are baked in when the dev server starts, so restart it after changing them.

## Build

```bash
OPENWEATHER_API_KEY=your_key npm run build
```

This writes `bundle.js` to the project root. Serve the folder with any static server, for example `npx serve .`, and open the printed URL.

## Test

```bash
npm test
```

Runs the Mocha test suite in `test/` against a jsdom DOM. No API key is needed.
