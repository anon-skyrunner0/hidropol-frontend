import axios from "axios";
import {
    GET_ALL_WATER_TEMP
} from "./types";


export const getAllWaterTemp = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors")
        .then((res) => {
            //filter response data to device:water_temp with data>0 and same created_at
            dispatch({
                type: GET_ALL_WATER_TEMP,
                payload: res.data.filter(
                    (item) => item.device === "water_temp_sensor" && item.data > 0
                )
            });
        })
        .catch((err) => console.log("Error Sensor :", err));
}