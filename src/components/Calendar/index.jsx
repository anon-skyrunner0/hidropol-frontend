import gambar1 from "../../Assets/images/ilus/gambar1.png";
import gambar3 from "../../Assets/images/ilus/gambar3.png";
import icon6 from "../../Assets/images/icon (6).png";
import icon8 from "../../Assets/images/icon (8).png";
import React, { useEffect, useState } from "react";
const Calendar = () => {
  return (
    <div
      className="content mt-5 mb-5"
      style={{ backgroundImage: "url('BG_CONTRL.jpg') !important" }}
    >
      <img
        src={gambar3}
        width={400}
        height={400}
        className="rounded mx-auto d-block mt-5"
        alt="..."
      />
      <h1 className="text-center h1">Calendar</h1>
      <br />
      <div className="pl-12">
        <div className="container">
          <div className="row justify-content-md-center">
            <br />
            <div className="col-lg-6 mb-3">
              <div
                className="cardi text-center border-light pb-5"
                style={{ width: "100%" }}
              >
                <img alt="W3Schools" src={icon8} width="25%" height="25%" />
                <div className="card-body" style={{ textAlign: "center" }}>
                  <h1 className="text-center h1" style={{ fontSize: "larger" }}>
                    Menanam
                  </h1>
                  <h1 className="text-center h1" style={{ fontSize: "larger" }}>
                    "Tanaman Selada"
                  </h1>
                  <h2 className="text-center h2" style={{ fontSize: "medium" }}>
                    Hari ke-1{" "}
                  </h2>
                  <p className="text-center p" style={{ fontSize: "small" }}>
                    Panen: Tersisa 27 Hari
                  </p>
                  {/* <a href="calender.html" className="btn btn-primary px-5 py-2">
                    Panen
                  </a> */}
                </div>
              </div>
            </div>
          </div>
          <div className="card-body" style={{ padding: "0%" }}>
            <div
              className="month"
              style={{
                backgroundImage: 'url("images/ilus/gambargb.png")',
                backgroundPosition: "center",
                backgroundSize: "cover",
              }}
            >
              <ul>
                <li className="prev">❮</li>
                <li className="next">❯</li>
                <li>
                  July
                  <br />
                  <span style={{ font: "size 24px" }} />
                  <b>
                    <span style={{ color: "#ffff" }}>2022</span>
                  </b>
                </li>
              </ul>
            </div>
            <ul className="weekdays">
              <li>Mo</li>
              <li>Tu</li>
              <li>We</li>
              <li>Th</li>
              <li>Fr</li>
              <li>Sa</li>
              <li>Su</li>
            </ul>
            <ul className="days">
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
              <li>6</li>
              <li>7</li>
              <li>8</li>
              <li>9</li>
              <li>10</li>
              <li>11</li>
              <li>12</li>
              <li>13</li>
              <li>14</li>
              <li>15</li>
              <li>16</li>
              <li>17</li>
              <li>18</li>
              <li>19</li>
              <li>20</li>
              <li>21</li>
              <li>22</li>
              <li>23</li>
              <li>24</li>
              <li>25</li>
              <li>26</li>
              <li>27</li>
              <li>28</li>
              <li>29</li>
              <li>30</li>
              <li>
                <span className="active">31</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
