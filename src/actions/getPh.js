import axios from "axios";
import {
    GET_PH
} from "./types";

export const getPH = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors/device/ph_sensor")
        .then((res) => {
            console.log("Success PH :", res.data);
            dispatch({
                type: GET_PH,
                payload: res.data
            });
        })
        .catch((err) => console.log("Error PH :", err));
}