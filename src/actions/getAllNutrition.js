import axios from "axios";
import {
    GET_ALL_NUTRITION
} from "./types";

export const getAllNutrition = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors")
        .then((res) => {
            //filter response data to device:nutrition_sensor with data>0 and same created_at

            dispatch({
                type: GET_ALL_NUTRITION,
                payload: res.data.filter(
                    (item) => item.device === "nutrition_sensor" && item.data > 0
                )
            });
        })
        .catch((err) => console.log("Error Sensor :", err));
}