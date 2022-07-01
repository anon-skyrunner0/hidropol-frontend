import React, { Component } from "react";
import logoPol from "../../Assets/images/logopol.png";
import logoHidro from "../../Assets/images/logo2.png";
import notifLogo from "../../Assets/images/notif.png";
import loginLogo from "../../Assets/images/login.png";
import ilusCewek from "../../Assets/images/ilus/cewek2.png";
import swal from "sweetalert";
import { getPH } from "../../actions/getPh";
import { getNutrition } from "../../actions/getNutrition";
import { getWaterTemp } from "../../actions/getWaterTemp";
import { getWaterHeight } from "../../actions/getWaterHeight";
import { getTemp } from "../../actions/getTemp";
import { useSelector, useDispatch } from "react-redux";

const Navbar = () => {
  //logout function
  const logout = () => {
    localStorage.clear();
    swal("Logout Success !", "", "success");
    window.location.reload();
  };

  const dispatch = useDispatch();
  const ph = useSelector((state) => state.ph_sensor.data);
  const nutrition = useSelector((state) => state.nutrition_sensor.data);
  const water_temp = useSelector((state) => state.water_temp_sensor.data);
  const water_height = useSelector((state) => state.water_height_sensor.data);
  const temp = useSelector((state) => state.temp_sensor.data);

  //default state
  const [phVal, setPhVal] = React.useState(10);
  const [nutritionVal, setNutritionVal] = React.useState(700);
  const [waterHeightVal, setWaterHeightVal] = React.useState(20);

  //set phVal from ph data
  React.useEffect(() => {
    Object.entries(ph).length > 0 && setPhVal(ph[0].data);
    Object.entries(nutrition).length > 0 && setNutritionVal(nutrition[0].data);
    Object.entries(water_height).length > 0 &&
      setWaterHeightVal(water_height[0].data);
  });

  console.log("ph gw", phVal);
  console.log("nutrition gw", nutritionVal);
  console.log("water height gw", waterHeightVal);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(getPH());
      dispatch(getNutrition());
      dispatch(getWaterTemp());
      dispatch(getWaterHeight());
      dispatch(getTemp());
    }, 1000);
  }, [getPH]);

  return (
    <div id="wrapper">
      <nav className="fixed-top navbar navbar-expand-lg navbar-light px-5 shadow">
        <div className="container-fluid">
          <div className="logo1">
            <a className="navbar-brand" href="#">
              <img
                src={logoPol}
                width="50"
                height="50"
                className="d-inline-block align-top"
                alt=""
              />
              <img
                src={logoHidro}
                width="50"
                height="50"
                className="d-inline-block align-top ml-3"
                alt=""
              />
            </a>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mx-auto" id="navbarNav">
            <ul className="navbar-nav mx-auto text-center">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/controlling">
                  Controlling
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/tips">
                  Tips
                </a>
              </li>
              {/* <li className="nav-item">
                <a className="nav-link" href="calender.html">
                  Calendar
                </a>
              </li> */}
            </ul>
            <a className="navbar-brand" style={{ marginLeft: "-2px" }} href="#">
              <div
                className="d-flex"
                style={{ justifyContent: "space-between" }}
              >
                <div
                  className="d-flex"
                  style={{ marginLeft: "-10px !important" }}
                >
                  <img
                    src={notifLogo}
                    className="d-inline-block align-top mr-2"
                    alt=""
                    width="38"
                    height="38"
                    data-toggle="modal"
                    data-target="#exampleModalLong"
                  />
                  {/* red dots */}
                  <div
                    className={
                      phVal < 6 ||
                      nutritionVal < 500 ||
                      waterHeightVal < 20 ||
                      phVal > 7 ||
                      nutritionVal > 700
                        ? ""
                        : "d-none"
                    }
                    style={{
                      backgroundColor: "red",
                      width: "20px",
                      height: "20px",
                      border: "2px solid white",
                      marginLeft: "-20px",
                      borderRadius: "50%",
                      marginTop: "-8px",
                    }}
                  ></div>
                </div>
                <img
                  src={loginLogo}
                  className="d-inline-block align-top ml-2"
                  alt=""
                  width="38"
                  height="38"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
                  onClick={() => logout()}
                />
              </div>
            </a>
          </div>
        </div>
      </nav>

      {/* Modal Notification */}
      <div className="notif">
        <div
          className="modal fade modal"
          id="exampleModalLong"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLongTitle"
          aria-hidden="true"
        >
          <div
            className="modal-dialog rounded"
            style={{
              backgroundColor: "rgb(24, 58, 100)",
              borderColor: "rgb(24, 58, 100)",
            }}
            role="document"
          >
            <div
              className="modal-content"
              style={{
                backgroundColor: "rgb(24, 58, 100)",
                borderColor: "rgb(24, 58, 100)",
              }}
            >
              <div
                className="modal-header"
                style={{
                  backgroundColor: "rgb(24, 58, 100)",
                  borderColor: "rgb(24, 58, 100)",
                }}
              >
                <h5
                  className="modal-title h4"
                  id="exampleModalLongTitle"
                  style={{
                    backgroundColor: "rgb(24, 58, 100)",
                    borderColor: "rgb(24, 58, 100)",
                  }}
                >
                  Notification
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span
                    aria-hidden="true"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    ×
                  </span>
                </button>
              </div>
              <div
                className="modal-body"
                style={{
                  backgroundColor: "rgb(24, 58, 100)",
                  borderColor: "rgb(24, 58, 100)",
                }}
              >
                {/* if ph < 6 show alert */}
                {phVal < 6 ? (
                  <div className="p-1">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="h5">Your PH is Under Level !!!</h2>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {phVal > 7 ? (
                  <div className="p-1">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="h5">Your PH is Too High !!!</h2>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {nutritionVal < 500 ? (
                  <div className="p-1">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="h5">
                          Your Nutrition is Under Level !!!
                        </h2>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {nutritionVal > 700 ? (
                  <div className="p-1">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="h5">Your Nutrition is Too High !!!</h2>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {waterHeightVal < 20 ? (
                  <div className="p-1">
                    <div className="card">
                      <div className="card-header">
                        <h2 className="h5">
                          Your Water Height is Under Level !!!
                        </h2>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal Notification */}
    </div>
  );
};

export default Navbar;
