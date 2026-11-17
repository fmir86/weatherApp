import {FETCH_WEATHER} from "../actions/index"

export default function(state=[], action){

    switch(action.type){
        case FETCH_WEATHER:
            // Failed requests are handled by reducerError.
            if (action.error) {
                return state;
            }
            return state.concat([action.payload.data]);
    }

    return state;
}
