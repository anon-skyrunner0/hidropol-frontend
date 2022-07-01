import axios from 'axios';
import {
    GET_ALL_OUTER_TEMP
} from './types';

export const getAllOuterTemp = () => (dispatch) => {
    axios
        .get('https://testing-z.herokuapp.com/api/sensors')
        .then((res) => {
            //filter response data to device:outer_temp with data>0 and same created_at
            dispatch({
                type: GET_ALL_OUTER_TEMP,
                payload: res.data.filter(
                    (item) => item.device === "outer_temp_sensor" && item.data > 0
                )
            });
        }).catch((err) => console.log("Error Sensor :", err));
}