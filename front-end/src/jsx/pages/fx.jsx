import React, { Component } from "react";
import { Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
// import TradingViewWidget, { Themes } from "react-tradingview-widget";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import PageTitle from "../element/page-title";
import TimeDatePicker from "../element/datepicker";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";
import * as currencyCloud from "currency-cloud";
import { login, logout } from "../../config/currency-cloud";
import CountDown from "../element/countdown";
// import "react-rangeslider/lib/index.css";

export default class FX extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnGreen: true,
      loading: false,
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      availableCurrencies: [],
      activeAccounts: [],
      activeBalances: [" "],
      selectedSellCurrency: "EUR",
      selectedBuyCurrency: "USD",
      buyOrSell: "BUY",
      amount: null,
      quote: undefined,
      timer: null,
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();
    if (!currentUser) this.setState({ redirect: "./" });
    this.setState({ currentUser: currentUser, userReady: true });
    this.currencyCloudData();
  }

  btnChangeColor = () => {
    this.setState({ btnGreen: !this.state.btnGreen });
  };

  currencyCloudData = () => {
    login()
      .then(currencyCloud.reference.getAvailableCurrencies)
      .then((res) => {
        this.setState({
          availableCurrencies: res.currencies,
        });
      })
      .then(currencyCloud.balances.find)
      .then((res) => {
        // const lengthBalances = res.balances.length;
        const activeBalances = [];
        if (res.balances.length > 0) {
          for (const item in res.balances) {
            const account = res.balances[item];
            activeBalances.push({ [account.currency]: account.amount });
          }
          this.setState({
            activeAccounts: res.balances,
            activeBalances: activeBalances,
          });
        }
      })
      .then(logout)
      .catch(console.log);
  };

  countDownCallBack = (countDownData) => {
    this.setState({ timer: countDownData });
  };

  handleChangeSell = (e) => {
    this.setState({ selectedSellCurrency: e.target.value });
  };

  handleChangeBuy = (e) => {
    this.setState({ selectedBuyCurrency: e.target.value });
  };

  handleChangeBuyOrSell = (e) => {
    this.setState({ buyOrSell: e.target.value });
  };

  handleAmount = (e) => {
    this.setState({ amount: e.target.value });
  };

  getQuote = () => {
    const quoteParams = {
      buyCurrency: this.state.selectedBuyCurrency,
      sellCurrency: this.state.selectedSellCurrency,
      amount: this.state.amount,
      fixedSide: this.state.buyOrSell.toLowerCase(),
    };
    return currencyCloud.retry(() => {
      return currencyCloud.rates.get(quoteParams).then((res) => {
        this.setState({ quote: res });
      });
    });
  };

  handleGetQuoteMarket = (e) => {
    e.preventDefault();
    this.setState({
      loading: true,
    });
    login()
      .then(this.getQuote)
      .then(logout)
      .catch((err) => {
        if (err instanceof currencyCloud.APIerror) {
          console.log(err.toYAML());
        } else {
          console.log(err);
        }
      });
    this.setState({
      loading: false,
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const {
      activeAccounts,
      activeBalances,
      availableCurrencies,
      selectedSellCurrency,
      // selectedBuyCurrency,
      // buyOrSell,
      amount,
      loading,
      quote,
    } = this.state;

    let btnClass = this.state.btnGreen
      ? "btn btn-success btn-success:hover"
      : "btn btn-check:checked+.btn-success:focus";
    const initCurrencySell = Object.keys(activeBalances[0]);
    const selectedAccountCurrency = selectedSellCurrency
      ? selectedSellCurrency
      : initCurrencySell;
    // const chartCurrencyPair =
    //   buyOrSell === "BUY"
    //     ? selectedBuyCurrency + selectedSellCurrency
    //     : selectedSellCurrency + selectedBuyCurrency;

    console.log("timer: ", this.state.timer);
    console.log("quote: ", quote);

    console.log("activeBalances: ", activeBalances);

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
                        <p className="mb-2">
                          {selectedAccountCurrency} Account Balance
                        </p>
                        <h6>
                          {activeBalances[0][initCurrencySell]}{" "}
                          {selectedAccountCurrency}
                        </h6>
                      </div>
                      {/* <div className="col col-sm-auto col-6">
                      <p className="mb-2">Index Price</p>
                      <h6>10,326.19 USD</h6>
                    </div>
                    <div className="col col-sm-auto col-6">
                      <p className="mb-2">Mark Price</p>
                      <h6>10,343.94 USD</h6>
                    </div>
                     */}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                <Tab.Container defaultActiveKey="market">
                  <div className="card">
                    <div className="card-header">
                      <Nav variant="pills">
                        <Nav.Link eventKey="market">Market Order</Nav.Link>
                        <Nav.Link eventKey="limit">Limit Order</Nav.Link>
                        <Nav.Link eventKey="forward">
                          Forward Contracts
                        </Nav.Link>
                      </Nav>
                    </div>
                    <div className="card-body market-order">
                      <Tab.Content>
                        <Tab.Pane eventKey="market">
                          <form
                            method="post"
                            name="myform"
                            className="currency_market"
                            onSubmit={this.handleGetQuoteMarket}
                          >
                            <div className="mb-3">
                              <div className="d-flex justify-content-between form-label">
                                <div>
                                  <label className="form-label">Sell</label>
                                  <div className="input-group">
                                    <select
                                      name="currency"
                                      className="form-control miw-90 mw-150"
                                      value={this.state.selectedSellCurrency}
                                      onChange={this.handleChangeSell}
                                    >
                                      {activeAccounts.map(
                                        ({ currency }, index) => (
                                          <option key={currency}>
                                            {currency}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </div>
                                <div>
                                  <label className="form-label">Buy</label>
                                  <div className="input-group">
                                    <select
                                      name="currency"
                                      className="form-control miw-90"
                                      value={this.state.selectedBuyCurrency}
                                      onChange={this.handleChangeBuy}
                                    >
                                      {availableCurrencies.map(
                                        ({ code }, index) => (
                                          <option key={code}>{code}</option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <label className="form-label">Amount to</label>
                              <div className="input-group">
                                <select
                                  name="currency"
                                  className="form-control miw-90 me-2"
                                  value={this.state.buyOrSell}
                                  onChange={this.handleChangeBuyOrSell}
                                >
                                  <option>BUY</option>
                                  <option>SELL</option>
                                </select>
                                <input
                                  type="number"
                                  min="10"
                                  step="any"
                                  name="amount"
                                  className="form-control input text-end ms-2"
                                  placeholder="Enter Amount"
                                  // value={amount}
                                  onChange={this.handleAmount}
                                />
                              </div>
                            </div>
                            <div className="text-body">
                              By clicking on "Get a Quote" you agree with our
                              Terms of use
                            </div>
                            <div className="btn mb-1">
                              <button
                                type="submit"
                                name="quote"
                                onSubmit={this.handleGetQuoteMarket}
                                className={btnClass}
                                disabled={!amount || amount < 10}
                              >
                                {loading && (
                                  <>
                                    <div>Getting your quote</div>
                                    <span className="spinner-border spinner-border-sm"></span>
                                  </>
                                )}
                                Get Quote
                              </button>
                            </div>
                            {quote && (
                              <>
                                <CountDown
                                  initial="20"
                                  fxCallBack={this.countDownCallBack}
                                />
                              </>
                            )}
                          </form>
                        </Tab.Pane>
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
                                  {activeAccounts.map(({ currency }, index) => (
                                    <option key={currency}>{currency}</option>
                                  ))}
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
                                  {availableCurrencies.map(
                                    ({ code }, index) => (
                                      <option key={code}>{code}</option>
                                    )
                                  )}
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
                        <Tab.Pane eventKey="forward">
                          <form
                            method="post"
                            name="myform"
                            className="currency_market"
                          >
                            <div className="mb-3">
                              <div className="d-flex justify-content-between form-label">
                                <div>
                                  <label className="form-label">Sell</label>
                                  <div className="input-group">
                                    <select
                                      name="currency"
                                      className="form-control miw-90 mw-150"
                                      value={this.state.selectedSellCurrency}
                                      onChange={this.handleChangeSell}
                                    >
                                      {activeAccounts.map(
                                        ({ currency }, index) => (
                                          <option key={currency}>
                                            {currency}
                                          </option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </div>
                                <div>
                                  <label className="form-label">Buy</label>
                                  <div className="input-group">
                                    <select
                                      name="currency"
                                      className="form-control miw-90"
                                      value={this.state.selectedBuyCurrency}
                                      onChange={this.handleChangeBuy}
                                    >
                                      {availableCurrencies.map(
                                        ({ code }, index) => (
                                          <option key={code}>{code}</option>
                                        )
                                      )}
                                    </select>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="mb-4">
                              <label className="form-label">Amount to</label>
                              <div className="input-group">
                                <select
                                  name="currency"
                                  className="form-control miw-90 me-2"
                                  value={this.state.buyOrSell}
                                  onChange={this.handleChangeBuyOrSell}
                                >
                                  <option>BUY</option>
                                  <option>SELL</option>
                                </select>
                                <input
                                  type="number"
                                  min="10"
                                  step="any"
                                  name="amount"
                                  className="form-control input text-end ms-2"
                                  placeholder="Enter Amount"
                                  // value={this.state.}
                                  onChange={this.handleAmount}
                                />
                              </div>
                            </div>

                            <div className="mb-3">
                              <label className="form-label">
                                Conversion Date
                              </label>
                              <div className="input-group mw-150">
                                <div>
                                  <TimeDatePicker />
                                </div>
                              </div>
                            </div>
                            <div className="text-body">
                              By clicking on "Get a Quote" you agree with our
                              Terms of use
                            </div>
                            <div className="btn mt-3">
                              <button
                                type="submit"
                                name="quote"
                                onSubmit={this.handleGetQuoteMarket}
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

              <div className="col-xxl-6 col-xl-6 col-lg-6 col-md-6">
                {/* <!-- TradingView Widget BEGIN --> */}
                {/* <div
                  className="tradingview-widget-container card"
                  style={{ height: "460px" }}
                >
                  <TradingViewWidget
                    symbol={chartCurrencyPair}
                    theme={Themes.DARK}
                    locale="en"
                    autosize
                  />
                </div> */}
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
