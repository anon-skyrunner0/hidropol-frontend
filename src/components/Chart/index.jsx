import React, { useRef } from "react";
import { getAllNutrition } from "../../actions/getAllNutrition";
import { getAllPH } from "../../actions/getAllPH";
import { getAllHeight } from "../../actions/getAllHeight";
import { getAllOuterTemp } from "../../actions/getAllOuterTemp";
import { getAllWaterTemp } from "../../actions/getAllWaterTemp";
import { useDispatch, useSelector } from "react-redux";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

const Chart = () => {
  const dispatch = useDispatch();
  //define state
  const nutri = useSelector((state) => state.allNutrition.data);
  const ph = useSelector((state) => state.allPH.data);
  const height = useSelector((state) => state.allHeight.data);
  const outerTemp = useSelector((state) => state.allOuterTemp.data);
  const waterTemp = useSelector((state) => state.allWaterTemp.data);

  //end define state
  //define date
  const date = new Date();
  //chart data for nutrition
  const dataNutrition = {
    labels: nutri.map((item) => item.createdAt),
    datasets: [
      {
        label: "Nutrition",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
        hoverBorderColor: "rgba(255,99,132,1)",
        data: nutri.map((item) => item.data),
      },
    ],
  };
  console.table(dataNutrition);

  //   const avgNutrition =
  //     nutri.reduce((acc, curr) => {
  //       return acc + parseFloat(curr.data);
  //     }, 0) / nutri.length;

  const avgPH =
    ph.reduce((acc, curr) => {
      return acc + parseFloat(curr.data);
    }, 0) / ph.length;

  const avgHeight =
    height.reduce((acc, curr) => {
      return acc + parseFloat(curr.data);
    }, 0) / height.length;

  const avgOuterTemp =
    outerTemp.reduce((acc, curr) => {
      return acc + parseFloat(curr.data);
    }, 0) / outerTemp.length;

  const avgWaterTemp =
    waterTemp.reduce((acc, curr) => {
      return acc + parseFloat(curr.data);
    }, 0) / waterTemp.length;

  const avgNutrition =
    nutri.reduce((acc, curr) => {
      return acc + parseFloat(curr.data);
    }, 0) / nutri.length;

  console.log("ph", ph);
  console.log("nutri", nutri);
  console.log("height", height);
  console.log("outerTemp", outerTemp);
  console.log("waterTemp", waterTemp);

  React.useEffect(() => {
    setTimeout(() => {
      dispatch(getAllNutrition());
      dispatch(getAllPH());
      dispatch(getAllHeight());
      dispatch(getAllOuterTemp());
      dispatch(getAllWaterTemp());
    }, 1000);
  }, [
    getAllNutrition,
    getAllPH,
    getAllHeight,
    getAllOuterTemp,
    getAllWaterTemp,
  ]);

  return (
    <div style={{ marginTop: "120px" }}>
      <div className="container">
        <div className="data">
          <div className="head mb-3">
            <h1>Nutrition</h1>
            <p className="text-muted" style={{ fontWeight: "100" }}>
              5 latest nutrition data appears below. . .
            </p>
            <small>Average Nutrition : {avgNutrition.toFixed(2)} ppm</small>
          </div>
          <table
            id="table_id"
            className="table table-striped"
            style={{ height: "15em", overflow: "auto" }}
          >
            <thead>
              <tr className="text-center">
                <th>Recorded At</th>
                <th>Sensor Data</th>
              </tr>
            </thead>
            <tbody>
              {/* sorting data from the newest and limit to 5 */}
              {nutri
                .sort((a, b) => {
                  return new Date(b.createdAt) - new Date(a.createdAt);
                })
                .slice(0, 5)
                .map((item) => {
                  return (
                    <tr className="text-center">
                      <td>
                        {// format date
                        new Date(item.createdAt).toLocaleDateString("en-UK", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                          hour12: false,
                          timeZone: "Asia/Bangkok",
                        })}
                      </td>
                      <td>{item.data}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="data">
          <div className="head mb-3">
            <h1>PH</h1>
            <p className="text-muted" style={{ fontWeight: "100" }}>
              5 latest PH data appears below. . .
            </p>
            <small>Average PH : {avgPH.toFixed(2)}</small>
          </div>
          <table
            id="table_id"
            className="table table-striped"
            style={{ height: "15em", overflow: "auto" }}
          >
            <thead>
              <tr className="text-center">
                <th>Recorded At</th>
                <th>Sensor Data</th>
              </tr>
            </thead>
            <tbody>
              {/* sorting data from the newest and limit to 5 */}
              {ph
                .sort((a, b) => {
                  return new Date(b.createdAt) - new Date(a.createdAt);
                })
                .slice(0, 5)
                .map((item) => {
                  return (
                    <tr className="text-center">
                      <td>
                        {// format date
                        new Date(item.createdAt).toLocaleDateString("en-UK", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                          hour12: false,
                          timeZone: "Asia/Bangkok",
                        })}
                      </td>
                      <td>{item.data}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
        <div className="data">
          <div className="head mb-3">
            <h1>Water Temperature</h1>
            <p className="text-muted" style={{ fontWeight: "100" }}>
              5 latest Water Temperature data appears below. . .
            </p>
            <small>Average Water Temperature : {avgWaterTemp.toFixed(2)}</small>
          </div>
          <table
            id="table_id"
            className="table table-striped"
            style={{ height: "15em", overflow: "auto" }}
          >
            <thead>
              <tr className="text-center">
                <th>Recorded At</th>
                <th>Sensor Data</th>
              </tr>
            </thead>
            <tbody>
              {/* sorting data from the newest and limit to 5 */}
              {waterTemp
                .sort((a, b) => {
                  return new Date(b.createdAt) - new Date(a.createdAt);
                })
                .slice(0, 5)
                .map((item) => {
                  return (
                    <tr className="text-center">
                      <td>
                        {// format date
                        new Date(item.createdAt).toLocaleDateString("en-UK", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                          hour: "numeric",
                          minute: "numeric",
                          second: "numeric",
                          hour12: false,
                          timeZone: "Asia/Bangkok",
                        })}
                      </td>
                      <td>{item.data}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Chart;
