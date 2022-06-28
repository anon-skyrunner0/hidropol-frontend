import {
    GET_CONTROLLER
} from "../actions/types";

const initialState = {
    data: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CONTROLLER:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}