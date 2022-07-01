import axios from "axios";
import {
    GET_ALL_HEIGHT
} from "./types";

export const getAllHeight = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors")
        .then((res) => {
            //filter response data to device:height with data>0 and same created_at
            dispatch({
                type: GET_ALL_HEIGHT,
                payload: res.data.filter(
                    (item) => item.device === "water_height_sensor" && item.data > 0
                )
            });
        })
        .catch((err) => console.log("Error Sensor :", err));
}