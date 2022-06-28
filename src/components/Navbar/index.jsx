import React, { Component } from "react";
import logoPol from "../../Assets/images/logopol.png";
import logoHidro from "../../Assets/images/logo2.png";
import notifLogo from "../../Assets/images/notif.png";
import loginLogo from "../../Assets/images/login.png";
import ilusCewek from "../../Assets/images/ilus/cewek2.png";
import swal from "sweetalert";

const Navbar = () => {
  //logout function
  const logout = () => {
    localStorage.clear();
    swal("Logout Success !", "", "success");
    window.location.reload();
  };

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
                <a className="nav-link" href="tips.html">
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
              <img
                src={notifLogo}
                className="d-inline-block align-top mr-2"
                alt=""
                width="38"
                height="38"
                data-toggle="modal"
                data-target="#exampleModalLong"
              />
              <img
                src={loginLogo}
                className="d-inline-block align-top"
                alt=""
                width="38"
                height="38"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
                onClick={() => logout()}
              />
            </a>
          </div>
        </div>
      </nav>

      {/* Modal Notification */}
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
              <div className="p-1">
                <div className="card">
                  <div className="card-header">
                    <h2 className="h5">Your Water PH is Under Level !!!</h2>
                  </div>
                </div>
              </div>
              <div className="p-1">
                <div className="card">
                  <div className="card-header">
                    <h2 className="h5">
                      Your Nutrition Amount is Under Level !!!
                    </h2>
                  </div>
                </div>
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
