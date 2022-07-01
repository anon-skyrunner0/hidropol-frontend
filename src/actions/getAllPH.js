import axios from "axios";
import {
    GET_ALL_PH
} from "./types";

export const getAllPH = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors")
        .then((res) => {
            //filter response data to device:ph_sensor with data>0 and same created_at
            dispatch({
                type: GET_ALL_PH,
                payload: res.data.filter(
                    (item) => item.device === "ph_sensor" && item.data > 0
                )
            });
        })
        .catch((err) => console.log("Error Sensor :", err));
}