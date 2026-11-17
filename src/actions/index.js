import axios from "axios"

// Set OPENWEATHER_API_KEY in your environment before running the app (see README).
const API_KEY = process.env.OPENWEATHER_API_KEY;
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = "FETCH_WEATHER";


export function fetchWeather(city){

    if (!API_KEY) {
        return {
            type: FETCH_WEATHER,
            payload: Promise.reject(new Error("No OpenWeatherMap API key configured. Set OPENWEATHER_API_KEY and restart the dev server."))
        };
    }

    const url = `${ROOT_URL}&q=${encodeURIComponent(city)},CR`;
    const request = axios.get(url);

    return{
        type: FETCH_WEATHER,
        payload: request
    }

}
