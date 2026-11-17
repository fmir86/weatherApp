import {FETCH_WEATHER} from "../actions/index"

// Holds the message of the last failed weather request, or null.
export default function(state=null, action){

    switch(action.type){
        case FETCH_WEATHER:
            if (!action.error) {
                return null;
            }
            const response = action.payload && action.payload.response;
            if (response && response.data && response.data.message) {
                return `Weather request failed: ${response.data.message}`;
            }
            return action.payload && action.payload.message
                ? action.payload.message
                : "Weather request failed.";
    }

    return state;
}
