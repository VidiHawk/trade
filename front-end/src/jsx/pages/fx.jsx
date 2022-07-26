import React, { Component } from "react";
import { Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import "react-rangeslider/lib/index.css";
import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import PageTitle from "../element/page-title";
import TimeDatePicker from "../element/datepicker";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";

// const currencyCloud = require("currency-cloud");
// const API_KEY = process.env.REACT_APP_API_KEY;
// const LOGIN_ID = process.env.REACT_APP_LOGIN_ID;

// console.log("API_KEY: ", process.env.REACT_APP_API_KEY);
// console.log("LOGIN_ID: ", process.env.REACT_APP_LOGIN_ID);

// currencyCloud.authentication
//   .login({
//     environment: "demo",
//     loginId: LOGIN_ID,
//     apiKey: API_KEY,
//   })
//   .then(currencyCloud.reference.getAvailableCurrencies)
//   .then(function (res) {
//     console.log(
//       "available currencies: " + JSON.stringify(res.currencies, null, 2)
//     );
//   })
//   .then(currencyCloud.balances.find)
//   .then(function (res) {
//     console.log("balances: " + JSON.stringify(res.balances, null, 2));
//   })
//   .then(currencyCloud.authentication.logout)
//   .catch(console.log);

export default class FX extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "/" });
    this.setState({ currentUser: currentUser, userReady: true });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <>
        <Header2 />
        <Sidebar />
        <PageTitle />

        <div className="content-body" id="fx">
          <div className="container">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-xxl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">FX Dashboard</h4>
                    {/* <span>
                    24h Change <strong className="text-success"> +5.30%</strong>
                  </span> */}
                  </div>
                  <div className="card-body">
                    <div className="row  justify-content-between">
                      <div className="col col-sm-auto col-6">
                        <p className="mb-2">EUR Account Balance</p>
                        <h6>314,107.51 EUR</h6>
                      </div>
                      {/* <div className="col col-sm-auto col-6">
                      <p className="mb-2">Index Price</p>
                      <h6>10,326.19 USD</h6>
                    </div>
                    <div className="col col-sm-auto col-6">
                      <p className="mb-2">Mark Price</p>
                      <h6>10,343.94 USD</h6>
                    </div>
                    <div className="col col-sm-auto col-6">
                      <p className="mb-2">Last Price</p>
                      <h6>10,383.51 USD</h6>
                    </div>
                    <div className="col col-sm-auto col-6">
                      <p className="mb-2">Funding Rate</p>
                      <h6>0.1392%</h6>
                    </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-4 col-xl-4 col-lg-4 col-md-6">
                <Tab.Container defaultActiveKey="market">
                  <div className="card">
                    <div className="card-header">
                      <Nav variant="pills">
                        <Nav.Link eventKey="market">Market Order</Nav.Link>
                        <Nav.Link eventKey="limit">Limit Order</Nav.Link>
                        <Nav.Link eventKey="#">Futures</Nav.Link>
                        <Nav.Link eventKey="#">Options</Nav.Link>
                      </Nav>
                    </div>
                    <div className="card-body market-limit">
                      <Tab.Content>
                        <Tab.Pane eventKey="limit">
                          <form
                            method="post"
                            name="myform"
                            className="currency_limit"
                          >
                            <div className="mb-3">
                              <label className="form-label">
                                Sell Currency
                              </label>
                              <div className="input-group mb-3">
                                <select
                                  name="currency"
                                  className="form-control mw-150"
                                >
                                  <option data-display="Euro" value="euro">
                                    EUR
                                  </option>
                                  <option value="usd">USD</option>
                                  <option value="gbp">GBP</option>
                                  <option value="cad">CAD</option>
                                  <option value="jpy">JPY</option>
                                </select>
                                <input
                                  type="text"
                                  name="amount"
                                  className="form-control text-end"
                                  placeholder="Enter Amount"
                                />
                              </div>
                            </div>

                            <div className="mb-3">
                              <label className="form-label">
                                Buy Currency Limit Amount
                              </label>
                              <div className="input-group mb-3">
                                <select
                                  name="currency"
                                  className="form-control mw-150"
                                >
                                  <option data-display="Usd" value="usd">
                                    USD
                                  </option>
                                  <option value="eur">EUR</option>
                                  <option value="gbp">GBP</option>
                                  <option value="cad">CAD</option>
                                  <option value="jpy">JPY</option>
                                </select>
                                <input
                                  type="text"
                                  name="amount"
                                  className="form-control text-end"
                                  placeholder="Enter Amount"
                                />
                              </div>
                            </div>

                            <div className="mb-3">
                              <div className="form-label border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                                Time In Force
                                {/* <select name="currency" className="border-0 h-0"> */}
                                <select
                                  name="currency"
                                  className="form-control text-end mw-250"
                                >
                                  <option
                                    data-display="Good 'Til Cancelled"
                                    value=""
                                  >
                                    Good 'Til Cancelled
                                  </option>
                                  <option value="">7 days</option>
                                  <option value="">30 days</option>
                                </select>
                              </div>
                            </div>

                            <div className="btn mt-3">
                              <button
                                type="submit"
                                name="submit"
                                className="btn btn-success"
                              >
                                Place Order
                              </button>
                            </div>
                          </form>
                        </Tab.Pane>
                        <Tab.Pane eventKey="market">
                          <form
                            method="post"
                            name="myform"
                            className="currency_market"
                          >
                            <div className="mb-3">
                              <label className="form-label">
                                Sell Currency
                              </label>
                              <div className="input-group mb-3">
                                <select
                                  name="currency"
                                  className="form-control mw-150"
                                >
                                  <option data-display="Euro" value="euro">
                                    EUR
                                  </option>
                                  <option value="usd">USD</option>
                                  <option value="gbp">GBP</option>
                                  <option value="cad">CAD</option>
                                  <option value="jpy">JPY</option>
                                </select>
                                <input
                                  type="text"
                                  name="amount"
                                  className="form-control text-end"
                                  placeholder="Enter Amount"
                                />
                              </div>
                            </div>

                            <div className="mb-3">
                              <label className="form-label">Buy Currency</label>
                              <div className="input-group mb-3">
                                <select
                                  name="currency"
                                  className="form-control mw-150"
                                >
                                  <option data-display="Usd" value="usd">
                                    USD
                                  </option>
                                  <option value="eur">EUR</option>
                                  <option value="gbp">GBP</option>
                                  <option value="cad">CAD</option>
                                  <option value="jpy">JPY</option>
                                </select>
                                {/* <input
                                type="text"
                                name="amount"
                                className="form-control text-end"
                                placeholder="Enter Amount"
                              /> */}
                              </div>
                            </div>

                            <div className="mb-3">
                              <label className="form-label">Order Date</label>
                              <div className="input-group mw-150">
                                <div>
                                  <TimeDatePicker />
                                </div>
                              </div>
                            </div>

                            {/* <div className="mb-3">
                            <div className="form-label border-0 px-0 py-1 d-flex justify-content-between align-items-center">
                              Order Date
                              <select
                                name="currency"
                                className="form-control text-end "
                              >
                                <div>
                                  <TimeDatePicker />
                                </div>
                              </select>
                            </div>
                          </div> */}

                            <div className="btn mt-3">
                              <button
                                type="submit"
                                name="submit"
                                className="btn btn-success"
                              >
                                Get Quote
                              </button>
                            </div>
                          </form>
                        </Tab.Pane>
                      </Tab.Content>
                    </div>
                  </div>
                </Tab.Container>
              </div>

              <div className="col-xxl-8 col-xl-8 col-lg-8 col-md-6">
                {/* <!-- TradingView Widget BEGIN --> */}
                <div
                  className="tradingview-widget-container card"
                  style={{ height: "460px" }}
                >
                  <TradingViewWidget
                    symbol="EURUSD"
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                  />
                </div>
                {/* <!-- TradingView Widget END --> */}
              </div>

              <div className="col-xl-12 col-lg-12 col-xxl-12">
                <Tab.Container defaultActiveKey="active-orders">
                  <div className="card">
                    <div className="card-header">
                      <Nav variant="pills">
                        <Nav.Link eventKey="active-orders">
                          Active Orders
                        </Nav.Link>
                        <Nav.Link eventKey="filled">Orders Filled</Nav.Link>
                      </Nav>
                    </div>
                    <PerfectScrollbar>
                      <div className="card-body open-position-table">
                        <div className="market-history market-order">
                          <Tab.Content>
                            <Tab.Pane eventKey="active-orders">
                              <div className="table-responsive">
                                <table className="table table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">Order ID</th>
                                      <th scope="col">Sell Symbol</th>
                                      <th scope="col">Buy Symbol</th>
                                      <th scope="col">Market Price</th>
                                      <th scope="col">Limit Price</th>
                                      <th scope="col">Entry Date</th>
                                      <th scope="col">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">64826492</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>-</td>
                                      <td>31,453.78 USD</td>
                                      <td>18-07-2022</td>
                                      <td>Pending</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="filled">
                              <div className="table-responsive">
                                <table className="table table-striped">
                                  <thead>
                                    <tr>
                                      <th scope="col">Order ID</th>
                                      <th scope="col">Sell Symbol</th>
                                      <th scope="col">Buy Symbol</th>
                                      <th scope="col">Sell Amount</th>
                                      <th scope="col">Buy Amount</th>
                                      <th scope="col">Entry Date</th>
                                      <th scope="col">Status</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">6437926</th>
                                      <td>EUR</td>
                                      <td>USD</td>
                                      <td>60,000.00 EUR</td>
                                      <td>62,356.98 USD</td>
                                      <td>02-07-2022</td>
                                      <td>Successful</td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                            </Tab.Pane>
                          </Tab.Content>
                        </div>
                      </div>
                    </PerfectScrollbar>
                  </div>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>

        <Footer2 />
      </>
    );
  }
}
