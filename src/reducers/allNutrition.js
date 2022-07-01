import {
    GET_ALL_NUTRITION
} from "../actions/types";

const initialState = {
    data: [],
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_ALL_NUTRITION:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}