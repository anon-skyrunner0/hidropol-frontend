import axios from "axios";
import {
    GET_NUTRITION
} from "./types";

export const getNutrition = () => (dispatch) => {
    axios
        .get("https://testing-z.herokuapp.com/api/sensors/device/nutrition_sensor")
        .then((res) => {
            console.log("Success Nutrition :", res.data);
            dispatch({
                type: GET_NUTRITION,
                payload: res.data
            });
        })
        .catch((err) => console.log("Error Nutrition :", err));
}