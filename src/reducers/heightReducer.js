import {
    GET_HEIGHT
} from "../actions/types";

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_HEIGHT:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}