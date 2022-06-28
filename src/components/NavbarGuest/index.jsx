import React, { Component } from "react";
import logoPol from "../../Assets/images/logopol.png";
import logoHidro from "../../Assets/images/logo2.png";
import notifLogo from "../../Assets/images/notif.png";
import loginLogo from "../../Assets/images/login.png";
import ilusCewek from "../../Assets/images/ilus/cewek2.png";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";
import swal from "sweetalert";

class NavbarGuest extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errors: {},
    };
  }

  componentDidMount() {
    if (this.props.auth.isAuthenticated) {
      window.location.href = "/";
      swal("Login Success", "Welcome to Hidropol", "success");
      // this.props.history.push("/");
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.auth.isAuthenticated) {
      window.location.href = "/";
      swal("Login Success", "Welcome to Hidropol", "success");
      // this.props.history.push("/");
    }

    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      email: this.state.email,
      password: this.state.password,
    };

    this.props.loginUser(userData);
  };

  render() {
    const { errors } = this.state;

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
              <a
                className="navbar-brand"
                style={{ marginLeft: "-2px" }}
                href="#"
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
                <img
                  src={loginLogo}
                  className="d-inline-block align-top"
                  alt=""
                  width="38"
                  height="38"
                  data-toggle="modal"
                  data-target=".bd-example-modal-lg"
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

        {/* Modal Login */}
        <div
          className="modal fade bd-example-modal-lg "
          tabIndex={-1}
          role="dialog"
          aria-labelledby="myLargeModalLabel"
          aria-hidden="true"
        >
          <div
            className="modal-dialog modal-lg border-light"
            style={{ maxWidth: "1200px" }}
          >
            <div className="modal-content border-light">
              <div className="card mb-3 border-light" style={{}}>
                <div className="card-body">
                  <div className="row">
                    <div
                      className="col-md-6 rounded-start"
                      style={{ backgroundColor: "#183A64" }}
                    >
                      <img
                        src={ilusCewek}
                        className="img-fluid rounded-start align-items-center"
                        alt=""
                      />
                    </div>
                    <div className="col-md-6">
                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                      <div
                        className="container-fluid"
                        style={{ textAlign: "center" }}
                      >
                        <img
                          className="img-fluid"
                          src={logoPol}
                          width={100}
                          height={100}
                          alt=""
                        />
                        <img
                          className="img-fluid"
                          src={logoHidro}
                          width={100}
                          height={100}
                          alt=""
                        />
                      </div>
                      <br />
                      <p className="title" style={{ textAlign: "center" }}>
                        Welcome back user
                      </p>
                      <div className="separator" />
                      <p className="h2" style={{ textAlign: "center" }}>
                        Your Plants Need You! Hurry Up!
                      </p>
                      <br />
                      <form
                        className="login-form"
                        noValidate
                        onSubmit={this.onSubmit}
                      >
                        <div className="form-control border-0">
                          <input
                            onChange={this.onChange}
                            value={this.state.email}
                            error={errors.email}
                            id="email"
                            type="email"
                            className={classnames("", {
                              invalid: errors.email || errors.emailnotfound,
                            })}
                          />
                          <i className="fas fa-user" />
                          <span className="text-danger">
                            {errors.email}
                            {errors.emailnotfound}
                          </span>
                        </div>
                        <div className="form-control border-0" style={{}}>
                          <input
                            onChange={this.onChange}
                            value={this.state.password}
                            error={errors.password}
                            id="password"
                            type="password"
                            className={classnames("", {
                              invalid:
                                errors.password || errors.passwordincorrect,
                            })}
                          />
                          <i className="fas fa-lock" />
                          <span className="text-danger">
                            {errors.password}
                            {errors.passwordincorrect}
                          </span>
                        </div>
                        <button className="submit">Login</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Modal Login */}
      </div>
    );
  }
}

NavbarGuest.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(NavbarGuest);
