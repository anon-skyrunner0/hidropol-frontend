import axios from "axios";
import {
    GET_OUTER_TEMP
} from "./types";

export const getTemp = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors/device/outer_temp_sensor")
        .then((res) => {
            console.log("Success Temp :", res.data);
            dispatch({
                type: GET_OUTER_TEMP,
                payload: res.data
            });
        })
        .catch((err) => console.log("Error Temp :", err));
}