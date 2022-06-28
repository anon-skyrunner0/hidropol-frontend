import {
    GET_NUTRITION
} from "../actions/types";

const initialState = {
    data: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_NUTRITION:
            return {
                ...state,
                data: action.payload,
            };
        default:
            return state;
    }
}