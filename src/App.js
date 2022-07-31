import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/Navbar";
import Landing from "./components/layout/Landing";
import Controlling from "./components/Controlling";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
import Tips1 from "./components/TipsPages/tips1";
import Tips2 from "./components/TipsPages/tips2";
import Tips3 from "./components/TipsPages/tips3";

import "./App.css";
import Footer from "./components/Footer";
import NavbarGuest from "./components/NavbarGuest";
import About from "./components/About";
import Tips from "./components/Tips";
import Chart from "./components/Chart";
import Calendar from "./components/Calendar";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
const state = store.getState();

//get auth state from redux store
const auth = state.auth.isAuthenticated;

console.log("auth", auth);

console.log(store.getState());
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            {auth === true ? <Navbar /> : <NavbarGuest />}
            <Route exact path="/" component={Landing} />
            <Route exact path="/about" component={About} />
            <Route exact path="/tips" component={Tips} />
            <Route exact path="/chart" component={Chart} />
            <Route exact path="/tips1" component={Tips1} />
            <Route exact path="/tips2" component={Tips2} />
            <Route exact path="/tips3" component={Tips3} />
            <Route exact path="/calendar" component={Calendar} />
            {/* <Route exact path="/login" component={Login} /> */}
            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/controlling" component={Controlling} />
              <PrivateRoute exact path="/register" component={Register} />
            </Switch>
            <Footer />
          </div>
        </Router>
      </Provider>
    );
  }
}
export default App;
