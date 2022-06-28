import axios from "axios";
import {
    GET_CONTROLLER,
} from "./types";

export const getController = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4")
        .then((res) => {
            console.log("Success Control :", res.data);
            dispatch({
                type: GET_CONTROLLER,
                payload: res.data
            });
        })
        .catch((err) => console.log("Error Controller :", err));
}