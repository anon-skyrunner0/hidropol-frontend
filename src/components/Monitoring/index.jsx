import React from "react";
import illusBawah from "../../Assets/images/ilus/ILUS HOME KONTEN.png";
import imgTemp from "../../Assets/images/temp.png";
import imgFloat from "../../Assets/images/uap.png";
import imgWater from "../../Assets/images/water.png";
import imgAir from "../../Assets/images/air.png";
import imgUV from "../../Assets/images/uv.png";
import { getPH } from "../../actions/getPh";
import { getNutrition } from "../../actions/getNutrition";
import { getWaterTemp } from "../../actions/getWaterTemp";
import { getWaterHeight } from "../../actions/getWaterHeight";
import { getTemp } from "../../actions/getTemp";
import { useSelector, useDispatch } from "react-redux";
// import imgTemp from "../../Assets/images/air.png";

const Monitoring = () => {
  const dispatch = useDispatch();
  const ph = useSelector((state) => state.ph_sensor.data);
  const nutrition = useSelector((state) => state.nutrition_sensor.data);
  const water_temp = useSelector((state) => state.water_temp_sensor.data);
  const water_height = useSelector((state) => state.water_height_sensor.data);
  const temp = useSelector((state) => state.temp_sensor.data);
  console.log("ph", ph);
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
    <>
      <div class="pl-12">
        <div class="container">
          <div class="row mt-5 justify-content-between">
            <div class="col-12">
              <center>
                <h1 class="h1 text-center">Monitoring Panel</h1>
              </center>
            </div>
            {/* <div class="col-4">
              <div class="text-end">
                {" "}
                <img
                  alt="gambar"
                  class="img-fluid"
                  src="https://img.icons8.com/plasticine/100/000000/sun.png"
                  width="60"
                  height="0"
                />
                {temp.length > 0 ? (
                  temp.map((temp) => <div>Sunny Day {temp.data}&deg;C</div>)
                ) : (
                  <h1 className="h3">Loading</h1>
                )}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <section class="container mt-3">
        <div class="row justify-content-md-center">
          <br />

          <div class="col-lg-2 mb-3">
            <div class="cardi text-center border-light">
              <br />
              <img alt="gambar" src={imgTemp} width="70" height="100" />
              <div class="card-body">
                <h1 class="h2">Water Temp.</h1>
                <h1 class="h3">
                  {water_temp.length > 0 ? (
                    water_temp.map((water_temp) => (
                      <h1 class="h3">{water_temp.data}&deg;C</h1>
                    ))
                  ) : (
                    <h1 className="h3">Loading</h1>
                  )}
                </h1>
              </div>
            </div>
          </div>
          <div class="col-lg-2 mb-3">
            <div class="cardi text-center border-light">
              <br />
              <img alt="gambar" src={imgTemp} width="70" height="100" />
              <div class="card-body">
                <h1 class="h2">Room Temp.</h1>
                <h1 class="h3">
                  27&deg;C
                  {/* {water_temp.length > 0 ? (
                    water_temp.map((water_temp) => (
                      <h1 class="h3">{water_temp.data}</h1>
                    ))
                  ) : (
                    <h1 className="h3">Loading</h1>
                  )} */}
                </h1>
              </div>
            </div>
          </div>

          <div class="col-lg-2 mb-3">
            <div class="cardi text-center border-light">
              <br />
              <img alt="gambar" src={imgFloat} width="70" height="100" />
              <div class="card-body">
                <h5 class="h2">Nutrition</h5>
                <h1 class="h3">
                  {nutrition.length > 0 ? (
                    nutrition.map((nutrition) => (
                      <h1 class="h3">{nutrition.data}</h1>
                    ))
                  ) : (
                    <h1 className="h3">Loading</h1>
                  )}
                </h1>
              </div>
            </div>
          </div>

          <div class="col-lg-2 mb-3">
            <div class="cardi text-center border-light">
              <br />
              <img alt="gambar" src={imgWater} width="70" height="100" />
              <div class="card-body">
                <h5 class="h2">Water Height</h5>
                <h1 class="h3">
                  {water_height.length > 0 ? (
                    water_height.map((water_height) => (
                      <h1 class="h3">
                        {water_height.data.replace("-", "")} cm
                      </h1>
                    ))
                  ) : (
                    <h1 className="h3">Loading</h1>
                  )}
                </h1>
              </div>
            </div>
          </div>

          <div class="col-lg-2 mb-3">
            <div class="cardi text-center border-light">
              <br />
              <img alt="gambar" src={imgAir} width="70" height="100" />
              <div class="card-body">
                <h5 class="h2">Water PH</h5>
                <h1 class="h3">
                  {ph.length > 0 ? (
                    ph.map((ph) => <h1 class="h3">{ph.data}</h1>)
                  ) : (
                    <h1 className="h3">Loading</h1>
                  )}
                </h1>
              </div>
            </div>
          </div>

          <div class="col-lg-2 mb-3">
            <div class="cardi text-center border-light">
              <br />
              <img alt="gambar" src={imgUV} width="70" height="100" />
              <div class="card-body">
                <h5 class="h2">UV Light Status</h5>
                <h1 class="h3">On</h1>
              </div>
            </div>
          </div>
          <br />
          <div class="container">
            <div class="row mt-5">
              <div class="col-12">
                <h1 class="h1 text-center">Weekly Chart</h1>
              </div>
            </div>
          </div>

          <div class="col-lg-12 mb-3  col-sm-12 col-md-12">
            <br />
            <div
              class="cardi text-center border-light"
              style={{
                backgroundImage: "url('images/ilus/gambargb.png')",
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <div class="card-body">
                <h1 class="h2">
                  See Recorded hydroponic progress measurement data.
                </h1>
                <a href="Chart.html">
                  <button
                    type="button"
                    class="btn btn-primary btn-sm btn-block"
                    style={{
                      borderRadius: "16px",
                      backgroundColor: "rgb(24, 58, 100)",
                    }}
                  >
                    Check out the weekly summary here!
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div class="pl-2">
            <div class="container">
              <div class="row justify-content-md-center mt-2">
                <div class="card-body" style={{ padding: "0" }}>
                  <div class="row">
                    <div class="col-md-6" style={{ paddingTop: "40px" }}>
                      <h2>HIDROPOL</h2>
                      <p style={{ textAlign: "left", fontSize: "larger" }}>
                        Polibatam Hydroponic Farm
                        <br />
                        IoT Based Monitoring System
                        <br />
                        <br />
                      </p>
                      <a className="float-left" href="about.html">
                        <button class="button button1">Read more</button>
                      </a>
                    </div>
                    <div class="col-md-6 rounded-start">
                      <img
                        alt="gambar"
                        src={illusBawah}
                        class="img-fluid rounded-start align-items-center"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Monitoring;
