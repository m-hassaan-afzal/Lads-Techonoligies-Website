import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Loader from "../../components/Loader/Loader";
import HeaderOne from "../../components/Header/HeaderOne";

const Login = () => (
  <Loader>
    <HeaderOne />
    <section
      className="title-hero-bg login-cover-bg"
      data-stellar-background-ratio="0.2"
    >
      <div className="table-display">
        <div className="login v-align text-center">
          <Tabs className="signup-box">
            <TabList id="signup-tabs" className="nav nav-tabs">
              <Tab>
                <a data-toggle="tab" href="!#login" onClick={e => e.preventDefault()}>
                  Login
                </a>
              </Tab>
              <Tab>
                <a data-toggle="tab" href="!#account" onClick={e => e.preventDefault()}>
                  Create Account
                </a>
              </Tab>
            </TabList>
            <div id="signup-content" className="tab-content">
              <TabPanel id="login" className="tab-pane fade in active">
                <form method="post" className="form login_type text-center">
                  <input
                    type="text"
                    name="username"
                    className="form-control mb-20"
                    placeholder="Username"
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control mb-20"
                    placeholder="Password"
                  />
                  <button
                    type="submit"
                    name="login"
                    className="btn btn-color btn-circle full-width"
                  >
                    LOGIN
                  </button>
                  <h6 className="mt-20 gray-light"> DON'T HAVE AN ACCOUNT? </h6>
                  <a href="!#">
                    SIGN UP <i className="fa fa-angle-double-right"></i>{" "}
                  </a>
                </form>
              </TabPanel>
              <TabPanel id="account" className="tab-pane fade in active">
                <form method="post" className="form login_type text-center">
                  <input
                    type="text"
                    name="yourname"
                    className="form-control mb-20"
                    placeholder="Your Name"
                  />
                  <input
                    type="text"
                    name="yourusername"
                    className="form-control mb-20"
                    placeholder="Your Username"
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control mb-20"
                    placeholder="Password"
                  />
                  <input
                    type="password"
                    name="password"
                    className="form-control mb-20"
                    placeholder="Reset Password"
                  />
                  <button
                    type="submit"
                    name="submit"
                    className="btn btn-color btn-circle full-width"
                  >
                    REGISTER NOW
                  </button>
                </form>
              </TabPanel>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  </Loader>
);

export default Login;
