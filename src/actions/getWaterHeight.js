import axios from "axios";
import {
    GET_HEIGHT
} from "./types";

export const getWaterHeight = () => async dispatch => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors/device/water_height_sensor")
        .then(res => {
            console.log("Success Height :", res.data);
            dispatch({
                type: GET_HEIGHT,
                payload: res.data
            });
        })
        .catch(err => console.log("Error Height :", err));
}