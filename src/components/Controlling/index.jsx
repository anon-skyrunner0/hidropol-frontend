import gambar1 from "../../Assets/images/ilus/gambar1.png";
import icon6 from "../../Assets/images/icon (6).png";
import React, { useState } from "react";
// import illusBawah from "../../Assets/images/ilus/ILUS HOME KONTEN.png";
// import imgTemp from "../../Assets/images/temp.png";
// import imgFloat from "../../Assets/images/uap.png";
// import imgWater from "../../Assets/images/water.png";
// import imgAir from "../../Assets/images/air.png";
// import imgUV from "../../Assets/images/uv.png";
// import bgCtrl from "../../Assets/images/ilus/BG_CONTRL.jpg";
import { getPH } from "../../actions/getPh";
import { getNutrition } from "../../actions/getNutrition";
import { getWaterTemp } from "../../actions/getWaterTemp";
import { getWaterHeight } from "../../actions/getWaterHeight";
import { getController } from "../../actions/getController";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import swal from "sweetalert";

const Controlling = () => {
  const dispatch = useDispatch();
  const ph = useSelector((state) => state.ph_sensor.data);
  const nutrition = useSelector((state) => state.nutrition_sensor.data);
  const water_height = useSelector((state) => state.water_height_sensor.data);
  const control = useSelector((state) => state.control.data);

  //default state ph_down
  const [ph_down, setPhDown] = useState([]);
  const [ph_up, setPhUp] = useState([]);
  const [nutritionCntrl, setNutritionCntrl] = useState([]);
  const [uvLight, setUvLight] = useState([]);
  const [waterPump, setWaterPump] = useState([]);

  React.useEffect(() => {
    Object.entries(control).map(([key, value]) => {
      //reassign value to variable
      if (key === "ph_down") {
        setPhDown(value.status);
      }

      if (key === "ph_up") {
        setPhUp(value.status);
      }

      if (key === "nutrition_up") {
        setNutritionCntrl(value.status);
      }

      if (key === "uv_light") {
        setUvLight(value.status);
      }

      if (key === "water_pump") {
        setWaterPump(value.status);
      }
    });
  });

  console.log("nutri", nutritionCntrl);

  //handle ph_up
  const handlePhUp = () => {
    //ph_up off
    if (ph_up === true) {
      // console.log("turned off");
      Axios.put(
        `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`,
        {
          ph_up: {
            status: false,
          },
        }
      )
        .then((res) => {
          swal("PH Up Turned Off Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //ph_up on
    if (ph_up === false) {
      // console.log("turned on");
      Axios.put(
        `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`,
        {
          ph_up: {
            status: true,
          },
        }
      )
        .then((res) => {
          swal("PH Up Turned On Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //handle ph_down
  const handlePhDown = () => {
    //handle turn off ph down
    if (ph_down === true) {
      Axios.put(
        "https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4",
        {
          ph_down: {
            status: false,
          },
        }
      )
        .then((res) => {
          swal("PH Down Turned Off Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //handle turn on ph down
    if (ph_down === false) {
      Axios.put(
        "https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4",
        {
          ph_down: {
            status: true,
          },
        }
      )
        .then((res) => {
          swal("PH Down Turned On Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //handle uv_light
  const handleUvLight = () => {
    //handle turn off uv light
    if (uvLight === true) {
      Axios.put(
        "https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4",
        {
          uv_light: {
            status: false,
          },
        }
      )
        .then((res) => {
          swal("UV Light Turned Off Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //handle turn on uv light
    if (uvLight === false) {
      Axios.put(
        "https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4",
        {
          uv_light: {
            status: true,
          },
        }
      )
        .then((res) => {
          swal("UV Light Turned On Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  //handle water_pump
  const handleWaterPump = () => {
    //water pump off
    if (waterPump === true) {
      Axios.put(
        `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`,
        {
          water_pump: {
            status: false,
          },
        }
      )
        .then((res) => {
          swal("Water Pump Turned Off Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //water pump on
    if (waterPump === false) {
      Axios.put(
        `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`,
        {
          water_pump: {
            status: true,
          },
        }
      )
        .then((res) => {
          swal("Water Pump Turned On Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  //handle nutrition_up
  const handleNutrition = () => {
    //nutrition off
    if (nutritionCntrl === true) {
      Axios.put(
        `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`,
        {
          nutrition_up: {
            status: false,
          },
          nutrition_down: {
            status: false,
          },
        }
      )
        .then((res) => {
          swal("Nutrition Up Turned Off Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }

    //nutrition on
    if (nutritionCntrl === false) {
      Axios.put(
        `https://testing-z.herokuapp.com/api/controls/625cfa9898b4120cea428ac4`,
        {
          nutrition_up: {
            status: true,
          },
          nutrition_down: {
            status: true,
          },
        }
      )
        .then((res) => {
          swal("Nutrition Up Turned On Successfully !", "", "success");
          window.location.reload();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(getPH());
      dispatch(getNutrition());
      dispatch(getWaterTemp());
      dispatch(getWaterHeight());
      dispatch(getController());
    }, 1000);
  }, []);

  return (
    <div
      className="content mt-5 mb-5"
      style={{ backgroundImage: "url('BG_CONTRL.jpg') !important" }}
    >
      <img
        src={gambar1}
        width={400}
        height={400}
        className="rounded mx-auto d-block"
        alt="..."
      />
      <h1 className="text-center h1">Controlling Panel</h1>
      <div className="pl-12">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-4">
              <h1 className="h1 text-start" />
            </div>
            <div className="row justify-content-md-center">
              <br />
              {/* <div className="col-lg-6 mb-3">
                <div className="cardi text-center border-light">
                  <img src={icon6} width="25%" height="25%" />
                  {/* <div className="card-body">
                    <select
                      className="form-select"
                      aria-label="Default select example"
                    >
                      <option selected>Choose plants</option>
                      <option value={1}>Kangkung</option>
                      <option value={2}>Pakcoy</option>
                      <option value={3}>Selada</option>
                    </select>
                    <br />
                    <a href="calender.html">
                      <button className="button button2">Start planting</button>
                    </a>
                  </div> 
                </div>
              </div> */}
            </div>
          </div>
          <div className="p-3">
            <div className="row justify-content-center ">
              <div className="card-deck">
                <div className="col-lg-6 mb-3">
                  <div
                    className="cardi text-center border-light "
                    style={{ width: "100%", height: "100%" }}
                  >
                    <br />
                    <div className="card-body">
                      <div className="cardalem">
                        <div className="p-1">
                          <h5 className="h4">Volume Air </h5>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="p-3">
                        <div className="form-group">
                          <label className="h5">
                            Your Current Water Volume{" "}
                          </label>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={
                              water_height.length > 0
                                ? water_height[0].data + " cm"
                                : 0
                            }
                            readOnly
                          />
                        </div>

                        <div className="form-group">
                          <button
                            className="btn btn-danger px-5 py-3"
                            onClick={() => handleWaterPump()}
                          >
                            {waterPump === true ? "TURN OFF" : "TURN ON"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="col-lg-6 mb-3">
                  <div
                    className="cardi text-center border-light"
                    style={{ width: "100%" }}
                  >
                    <br />
                    <div className="card-body">
                      <div className="cardalem">
                        <div className="p-1">
                          <h5 className="h4">Ph Air</h5>
                        </div>
                      </div>
                      <br />
                      <br />
                      <div className="p-4">
                        <div className="form-group">
                          <label className="h5">Your Current Water Ph</label>
                          <input
                            type="text"
                            className="form-control text-center"
                            value={ph.length > 0 ? ph[0].data : 0}
                            readOnly
                          />
                          {ph.length > 0 ? (
                            ph[0].data > 5.5 && ph[0].data < 7.5 ? (
                              <small className="text-success">
                                Your Current PH Amount is Good !
                              </small>
                            ) : (
                              <small className="text-danger">
                                Your Current PH Amount is Bad !
                              </small>
                            )
                          ) : (
                            <small className="text-muted">
                              Getting The Data !
                            </small>
                          )}
                        </div>
                        <div className="form-group" style={{ display: "flex" }}>
                          <div
                            className="phup"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label htmlFor="">PH Up</label>
                            {/* <input
                                type="checkbox"
                                defaultChecked={ph_up}
                                data-toggle="toggle"
                                data-onstyle="dark"
                              /> */}
                            <button
                              className="btn btn-danger px-5 py-3"
                              onClick={() => handlePhUp()}
                            >
                              {ph_up === true ? "TURN OFF" : "TURN ON"}
                            </button>
                          </div>

                          <div
                            className="phdown"
                            style={{
                              display: "flex",
                              flexDirection: "column",
                            }}
                          >
                            <label htmlFor="">PH Down</label>
                            <button
                              className="btn btn-danger px-5 py-3"
                              onClick={() => handlePhDown()}
                            >
                              {ph_down == true ? "TURN OFF" : "TURN ON"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="card-deck">
              <div className="col-lg-6 mb-3">
                <div
                  className="cardi text-center border-light"
                  style={{ width: "100%" }}
                >
                  <br />
                  <div className="card-body">
                    <div className="cardalem">
                      <div className="p-1">
                        <h5 className="h4">Nutrition</h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="p-4">
                      <div className="form-group">
                        <label className="h5">Your Current Nutrition</label>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={
                            nutrition.length > 0
                              ? nutrition[0].data + " ppm"
                              : 0
                          }
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        {/* <input
                          type="checkbox"
                          defaultChecked={nutritionCntrl}
                          data-toggle="toggle"
                          data-onstyle="dark"
                        /> */}
                        <button
                          className="btn btn-danger px-5 py-3"
                          onClick={() => handleNutrition()}
                        >
                          {nutritionCntrl === true ? "TURN OFF" : "TURN ON"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="col-lg-6 mb-3">
                <div
                  className="cardi text-center border-light"
                  style={{ width: "100%" }}
                >
                  <br />
                  <div className="card-body">
                    <div className="cardalem">
                      <div className="p-1">
                        <h5 className="h4">UV Light </h5>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="p-4">
                      <div className="form-group">
                        <label className="h5">Your Current UV Light</label>
                        <input
                          type="text"
                          className="form-control text-center"
                          value={uvLight === true ? "Turned On" : "Turned Off"}
                          readOnly
                        />
                      </div>
                      <div className="form-group">
                        <button
                          className="btn btn-danger px-5 py-3"
                          onClick={() => handleUvLight()}
                        >
                          {uvLight === true ? "TURN OFF" : "TURN ON"}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controlling;
