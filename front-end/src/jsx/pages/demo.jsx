import React from "react";
import { Link } from "react-router-dom";
import Footer1 from "../layout/footer1";
import { Nav, Navbar } from "react-bootstrap";
import ScrollspyNav from "react-scrollspy-nav";

function Demo() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <Navbar bg="dark" expand="lg">
                  <Link className="navbar-brand" to={"/"}>
                    <img src={require("./../../images/logo.png")} alt="" />
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse>
                    <ScrollspyNav
                      scrollTargetIds={["home", "demo", "support"]}
                      offset={100}
                      activeNavclassName="active"
                      scrollDuration="1000"
                      headerBackground="true"
                    >
                      <Nav className="ms-auto">
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#home">
                            Home
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#demo">
                            Demo
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </ScrollspyNav>
                  </Navbar.Collapse>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="intro section-padding position-relative" id="home">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-6 col-md-6">
              <div className="intro-content">
                <h1>
                  <span className="text-primary">Vidi FX </span>
                  website and platform
                </h1>
                <br />
                <h2>sitemap overview</h2>
                <p>
                  Vidi FX is a complete UI of Front end and Backend. Sign in,
                  Signup, Phone and ID card verification, one time password
                  verify, forex dashboard, accounts overview, etc Browse through
                  all pages below.{" "}
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-md-6 py-md-5">
              <div className="intro-demo_img">
                <img
                  src={require("../../images/portfolio.jpg")}
                  alt=""
                  className="img-fluid"
                />
                <img
                  src={require("../../images/portfolio-dark.jpg")}
                  alt=""
                  className="img-fluid dark-img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="demo section-padding page-section" id="demo">
        <div className="container">
          <div className="row py-lg-5 justify-content-center">
            <div className="col-xl-7">
              <div className="section-heading text-center">
                <h2>Dashboard</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/landing.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Landing Page</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./fx"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/dashboard.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Forex Dashboard</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./payments"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/buy-sell.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Payments</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./account-overview"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/accounts.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>

                <h4>Accounts Overview</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./account-deposit"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/deposit.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>

                <h4>Account Details</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./account-beneficiaries"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/withdraw.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Beneficiaries</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./account-api"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/api.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>API</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./account-affiliate"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/affiliate.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Affiliate</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./settings"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/settings.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Edit Profile</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./settings-preferences"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/preferences.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Preferences</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./settings-security"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/security.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Security</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./settings-account"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/linked-account.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Linked Account</h4>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./signin"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/signin.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Signin</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./signup"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/signup.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Signup</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./reset"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/reset.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Reset</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./lock"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/lock.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Locked</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./otp-1"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/otp-phone.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>OTP Number</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./otp-2"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/otp-code.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>OTP Code</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./verify-step-1"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/verify-id.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Verify ID</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./verify-step-2"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/upload-id.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Upload ID</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./verify-step-3"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/id-verifing.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>ID Verifying</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./verify-step-4"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/id-verified.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>ID Verified</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./add-debit-card"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/add-debit-card.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Add Debit Card</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./verify-step-6"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/success.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Success</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./verify-step-5"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/choose-account.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Recommendation</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./add-beneficiary"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/add-bank.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>Add Bank Account</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./400"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/400.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>400</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./403"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/403.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>403</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./404"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/404.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>404</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./500"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/500.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>500</h4>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
              <div className="demo_img">
                <div className="row">
                  <div className="col">
                    <Link to={"./503"} target="_blank">
                      <div className="img-wrap">
                        <img
                          src={require("../../images/demo/dashboard/dark/503.jpg")}
                          alt=""
                          className="img-fluid"
                        />
                      </div>
                    </Link>
                  </div>
                </div>
                <h4>503</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer1 />
    </>
  );
}

export default Demo;
