import {
  combineReducers
} from "redux";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import phReducer from "./phReducer";
import nutriReducer from "./nutriReducer";
import watertempReducer from "./watertempReducer";
import heightReducer from "./heightReducer";
import tempReducer from "./tempReducer";
import controlReducer from "./controlReducer";

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  ph_sensor: phReducer,
  nutrition_sensor: nutriReducer,
  water_temp_sensor: watertempReducer,
  water_height_sensor: heightReducer,
  temp_sensor: tempReducer,
  control: controlReducer
});