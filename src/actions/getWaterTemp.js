import axios from "axios";
import {
    GET_WATER_TEMP
} from "./types";

export const getWaterTemp = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors/device/water_temp_sensor")
        .then((res) => {
            console.log("Success Water Temp :", res.data);
            dispatch({
                type: GET_WATER_TEMP,
                payload: res.data
            });
        })
        .catch((err) => console.log("Error Water Temp :", err));
}