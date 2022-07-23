import React from "react";
import { Link } from "react-router-dom";
import HomeChart from "../charts/home";
// import DashChart from "../charts/dash";
// import EosChart from "../charts/eos";
// import EthChart from "../charts/eth";
// import LtcChart from "../charts/ltc";
// import UsdChart from "../charts/usd";
// import XrpChart from "../charts/xrp";
// import XtzChart from "../charts/xtz";
// import Testimonial from "../element/testimonial";
// import Sidebar from '../layout/sidebar';
// import PageTitle from '../element/page-title';
import Footer1 from "../layout/footer1";
// import { Row, Col, Card } from 'react-bootstrap';
import Header1 from "../layout/header1";
import Bottom from "./../element/bottom";

class Homepage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // items: [],
      eurUsd: 1,
      eurGbp: 1,
      cnyEur: 1,
      jpyEur: 1,
      usdEurFluctuation: 0,
      gbpEurFluctuation: 0,
      cnyEurFluctuation: 0,
      jpyEurFluctuation: 0,
      eurHistoricalRates: [
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
      ],
      gbpHistoricalRates: [
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
      ],
      jpyHistoricalRates: [
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
      ],
      cnyHistoricalRates: [
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "2",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
        "0",
        "1",
        "2",
        "3",
        "4",
        "3",
        "2",
        "1",
      ],
    };
  }

  // cross-currency triangulation formula EUR/GBP = EUR/USD divided by GBP/USD

  componentDidMount() {
    this.getHistoricalRates(29);
    this.fluctuationRate(30);
    this.eurRates();
    this.usdRates();
  }

  dateToday = () => {
    const today = new Date();
    const dateToday = today.toISOString().split("T")[0];
    return dateToday;
  };

  fluctuationDate = (timeFrame) => {
    const today = new Date();
    const fluctuation = new Date();
    fluctuation.setDate(today.getDate() - timeFrame);
    const dateFluctuation = fluctuation.toISOString().split("T")[0];
    return dateFluctuation;
  };

  historicalDate = (timeFrame) => {
    const today = new Date();
    const lastPast = new Date();
    lastPast.setDate(today.getDate() - timeFrame);
    const datePast = lastPast.toISOString().split("T")[0];
    return datePast;
  };

  usdRates = () => {
    fetch("https://open.er-api.com/v6/latest/USD")
      .then((res) => res.json())
      .then((USD) => {
        this.setState({
          eurUsd: 1 / USD.rates.EUR,
        });
      });
  };

  eurRates = () => {
    fetch("https://open.er-api.com/v6/latest/EUR")
      .then((res) => res.json())
      .then((EUR) => {
        this.setState({
          eurGbp: 1 / EUR.rates.GBP,
          cnyEur: EUR.rates.CNY,
          jpyEur: EUR.rates.JPY,
        });
      });
  };

  fluctuationRate = (timeFrame) => {
    const dateToday = this.dateToday();
    const datePast = this.fluctuationDate(timeFrame);
    const urlRates = `https://api.exchangerate.host/fluctuation?start_date=${datePast}&end_date=${dateToday}`;
    fetch(urlRates)
      .then((res) => res.json())
      .then((data) => {
        const rate = Object.values(data);
        this.setState({
          usdEurFluctuation: (
            100 *
            (rate[5].USD.change_pct - rate[5].USD.change_pct * 2)
          ).toFixed(2),
          gbpEurFluctuation: (
            100 *
            (rate[5].GBP.change_pct - rate[5].GBP.change_pct * 2)
          ).toFixed(2),
          cnyEurFluctuation: (
            100 *
            (rate[5].CNY.change_pct - rate[5].CNY.change_pct * 2)
          ).toFixed(2),
          jpyEurFluctuation: (
            100 *
            (rate[5].JPY.change_pct - rate[5].JPY.change_pct * 2)
          ).toFixed(2),
        });
      });
  };

  getHistoricalRates = (timeFrame) => {
    const dateToday = this.dateToday();
    const datePast = this.historicalDate(timeFrame);
    const urlRates = `https://api.exchangerate.host/timeseries?start_date=${datePast}&end_date=${dateToday}&base=EUR&symbols=USD,GBP,CNY,JPY`;
    fetch(urlRates)
      .then((res) => res.json())
      .then((timeseries) => {
        let eurData = [];
        let gbpData = [];
        let jpyData = [];
        let cnyData = [];
        const rawData = Object.values(timeseries);
        const allRates = rawData[6];
        for (const key in allRates) {
          const eur = Number(100 * allRates[key].USD);
          eurData.push(eur.toFixed(3));
          const gbp = Number(100 * allRates[key].GBP);
          gbpData.push(gbp.toFixed(3));
          const jpy = Number(allRates[key].JPY);
          jpyData.push(jpy.toFixed(3));
          const cny = Number(allRates[key].CNY);
          cnyData.push(cny.toFixed(3));
        }
        this.setState({
          eurHistoricalRates: eurData,
          gbpHistoricalRates: gbpData,
          jpyHistoricalRates: jpyData,
          cnyHistoricalRates: cnyData,
        });
      });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(event.target[0].value);
    // console.log(event.target.elements.username.value);
    // console.log(event.target.username.value);
    // console.log(this.inputNode.value);
  };

  // formatNumber = (number, decimals) => {
  //   const fixedNumber = Number(number.toFixed(decimals));
  //   const formatedNumber = fixedNumber.toLocaleString("en-US");
  //   return formatedNumber;
  // };

  formatCurrency = (number, currencyCode) => {
    const fixedNumber = Number(number.toFixed());
    const formatedCurrency = fixedNumber.toLocaleString("en-US", {
      style: "currency",
      currency: currencyCode,
    });
    return formatedCurrency;
  };

  render() {
    const {
      eurUsd,
      eurGbp,
      cnyEur,
      jpyEur,
      usdEurFluctuation,
      cnyEurFluctuation,
      gbpEurFluctuation,
      jpyEurFluctuation,
      eurHistoricalRates,
      gbpHistoricalRates,
      jpyHistoricalRates,
      cnyHistoricalRates,
    } = this.state;

    // const midMarket = eurUsd ? this.formatNumber(eurUsd, 4) : 0;
    // const ourCommission = eurUsd
    //   ? this.formatNumber(eurUsd * 0.002 * 1000000, 2)
    //   : 0;
    const ourCommission = eurUsd ? (eurUsd * 0.002 * 1000000).toFixed(2) : 0;
    const youSave = eurUsd ? (eurUsd * 1000000 * 0.05).toFixed(2) : 0;
    const usdColor = usdEurFluctuation < 0 ? "red" : "#10D078";
    const cnyColor = cnyEurFluctuation < 0 ? "red" : "#10D078";
    const gbpColor = gbpEurFluctuation < 0 ? "red" : "#10D078";
    const jpyColor = jpyEurFluctuation < 0 ? "red" : "#10D078";
    // console.log(" GBP historical rates: ", gbpHistoricalRates);
    // console.log(" EUR historical rates: ", eurHistoricalRates);
    // console.log(" JPY historical rates: ", jpyHistoricalRates);
    // console.log(" CNY historical rates: ", cnyHistoricalRates);

    // console.log("USD/EUR fluctuation 30d: ", usdEurFluctuation);
    // console.log("CNY/EUR fluctuation 30d: ", cnyEurFluctuation);
    // console.log("GBP/EUR fluctuation 30d: ", gbpEurFluctuation);
    // console.log("JPY/EUR fluctuation 30d: ", jpyEurFluctuation);
    // console.log("EUR/JPY ", jpyEur);
    // console.log("EUR/CNY ", cnyEur);
    // console.log("EUR/GBP ", eurGbp);
    // console.log("EUR/Usd ", eurUsd);

    return (
      <>
        <Header1 />
        <div className="intro" id="payments">
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-xl-6 col-lg-6 col-12">
                <div className="intro-content">
                  <h1>
                    Pay your suppliers with{" "}
                    <strong className="text-primary">VIDI FX</strong> <br />
                    get the best rates on 20+ currencies
                  </h1>
                  <p>Fast and secure payments all over the world</p>
                </div>
                <div className="intro-btn">
                  <Link to={"./signin"} className="btn btn-primary">
                    Get Started
                  </Link>
                  {/* <Link to={"#"} className="btn btn-outline-primary">
                  Browse Now
                </Link> */}
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-12">
                <div className="intro-form-exchange">
                  <form
                    method="post"
                    name="myform"
                    className="currency_validate"
                    onSubmit={this.handleSubmit}
                  >
                    <div className="mb-3">
                      <label className="me-sm-2">Sell</label>
                      <div className="input-group mb-3">
                        <select name="currency" className="form-control">
                          <option data-display="Bitcoin" value="bitcoin">
                            EUR
                          </option>
                          {/* <option value="litecoin">Litecoin</option> */}
                        </select>
                        <input
                          type="text"
                          name="eur_amount"
                          className="form-control"
                          defaultValue={this.formatCurrency(1000000, "EUR")}
                          // ref={(node) => (this.inputNode = node)}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label className="me-sm-2">Get</label>
                      <div className="input-group mb-3">
                        <select name="currency" className="form-control">
                          <option data-display="Bitcoin" value="bitcoin">
                            USD
                          </option>
                          {/* <option value="litecoin">Litecoin</option> */}
                        </select>
                        <input
                          type="text"
                          name="usd_amount"
                          className="form-control"
                          defaultValue={this.formatCurrency(
                            (eurUsd - eurUsd * 0.002) * 1000000,
                            "USD"
                          )}
                        />
                      </div>
                      {/* <h6 className="mb-0">0.2% commission - no hidden fees</h6> */}
                      <div className="d-flex justify-content-between mt-0 align-items-center">
                        <p className="mb-0">
                          Mid-market now is 1 EUR = {eurUsd.toFixed(3)} USD
                          <br />
                          0.2% commission - no hidden fees
                          <br />
                          Our commission on this trade is {
                            ourCommission
                          } USD <br />
                          Save up to {youSave} USD compared to mainstreet banks
                        </p>
                        {/* <h6 className="mb-0">0.5% commission</h6> */}
                      </div>
                    </div>
                    <Link
                      to={"./signin"}
                      type="submit"
                      name="submit"
                      className="btn btn-success btn-block"
                    >
                      Exchange Now
                      {/* <i className="la la-arrow-right"></i> */}
                    </Link>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="price-grid section-padding" id="fx">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center">
                  <h2>Today's Foreign Exchange Rates</h2>
                  <p>
                    {" "}
                    Sign in to get access to 20+ currencies, 10 digital
                    currencies, historical rates, forward contracts, logistics
                    tracking tools, and more
                  </p>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  <div className="card-body">
                    <h3>{eurUsd.toFixed(3)} USD/EUR</h3>
                    <div className="d-flex align-items-center">
                      {/* <div className="text-success">{usdEurFluctuation}%</div> */}
                    </div>
                    <p className="mb-0">30-day change:</p>
                    <div color={usdColor}>{usdEurFluctuation}%</div>
                    <HomeChart
                      historicalData={eurHistoricalRates}
                      color={["#1c75bc"]}
                    />
                    {/* <span className="flex-grow-1">{usdEurFluctuation}%</span>
                    <span className="mb-0">30-day chart</span> */}
                  </div>
                  {/* <div className="card-header">
                    <div className="d-flex align-items-center">
                      <div className="text-success">{usdEurFluctuation}%</div>
                    </div>
                    <p className="mb-0">30-day chart</p>
                  </div> */}
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  {/* <div className="card-header">
                    <div className="d-flex align-items-center">
                      <span>
                        <i className="cc LTC"></i>
                      </span>
                      <div className="flex-grow-1">CNY/EUR</div>
                    </div>
                    <p className="mb-0"> now</p>
                  </div> */}
                  <div className="card-body">
                    <h3>{cnyEur.toFixed(2)} CNY/EUR</h3>
                    <p className="mb-0">30-day change:</p>
                    <span color={cnyColor}>{cnyEurFluctuation}%</span>
                    <HomeChart
                      historicalData={cnyHistoricalRates}
                      color={["#A5A8A9"]}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  {/* <div className="card-header">
                    <div className="d-flex align-items-center">
                      <span>
                        <i className="cc DASH"></i>
                      </span>
                      <div className="flex-grow-1">EUR/GBP</div>
                    </div>
                    <p className="mb-0"> now</p>
                  </div> */}
                  <div className="card-body">
                    <h3>{eurGbp.toFixed(3)} EUR/GBP</h3>
                    <p className="mb-0">30-day change:</p>
                    <span color={gbpColor}>{gbpEurFluctuation}%</span>
                    <HomeChart
                      historicalData={gbpHistoricalRates}
                      color={["#F7931A"]}
                    />
                  </div>
                </div>
              </div>

              <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                <div className="card">
                  {/* <div className="card-header">
                    <div className="d-flex align-items-center">
                      <span>
                        <i className="cc XRP"></i>
                      </span>
                      <div className="flex-grow-1">JPY/EUR</div>
                    </div>
                    <p className="mb-0"> now</p>
                  </div> */}
                  <div className="card-body">
                    <h3>{jpyEur.toFixed(2)} JPY/EUR</h3>
                    <p className="mb-0">30-day change:</p>
                    <span color={jpyColor}>{jpyEurFluctuation}%</span>
                    <HomeChart
                      historicalData={jpyHistoricalRates}
                      color={["#346AA9"]}
                    />
                  </div>
                </div>
              </div>

              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="cc ETH"></i>
                    </span>
                    <div className="flex-grow-1">Ethereum</div>
                  </div>
                  <p className="mb-0"> 24h</p>
                </div>
                <div className="card-body">
                  <h3>USD 62,548.2254</h3>
                  <span className="text-success">+2.05%</span>
                  <EthChart />
                </div>
              </div>
            </div> */}

              {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="cc USDT"></i>
                    </span>
                    <div className="flex-grow-1">Tether</div>
                  </div>
                  <p className="mb-0"> 24h</p>
                </div>
                <div className="card-body">
                  <h3>USD 62,548.2254</h3>
                  <span className="text-success">+2.05%</span>
                  <UsdChart />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="cc EOS"></i>
                    </span>
                    <div className="flex-grow-1">Eosio</div>
                  </div>
                  <p className="mb-0"> 24h</p>
                </div>
                <div className="card-body">
                  <h3>USD 62,548.2254</h3>
                  <span className="text-success">+2.05%</span>
                  <EosChart />
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
              <div className="card">
                <div className="card-header">
                  <div className="d-flex align-items-center">
                    <span>
                      <i className="cc XTZ"></i>
                    </span>
                    <div className="flex-grow-1">Tezos</div>
                  </div>
                  <p className="mb-0"> 24h</p>
                </div>
                <div className="card-body">
                  <h3>USD 62,548.2254</h3>
                  <span className="text-success">+2.05%</span>
                  <XtzChart />
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>

        <div className="getstart section-padding" id="accounts">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="section-title text-center">
                  <h2>Open a business account in minutes</h2>
                  <p>
                    Get a multi-currency business or personal account with IBAN
                    to collect and send payments.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="getstart-content">
                  <span>
                    <i className="la la-user-plus"></i>
                  </span>
                  <h3>Open an account</h3>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="getstart-content">
                  <span>
                    <i className="la la-bank"></i>
                  </span>
                  <h3>Credit your account</h3>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4">
                <div className="getstart-content">
                  <span>
                    <i className="la la-exchange"></i>
                  </span>
                  <h3>Pay your suppliers</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="portfolio section-padding" id="platform">
          <div className="container">
            <div className="row py-lg-5 justify-content-center">
              <div className="col-xl-7">
                <div className="section-title text-center">
                  <h2>Monitor your trades on the dashboard</h2>
                  <p>
                    VIDI FX features a variety of functionalities for importers
                  </p>
                </div>
              </div>
            </div>
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-lg-6">
                <div className="portfolio_list">
                  <div className="row">
                    <div className="col-xl-6">
                      <div className="d-flex">
                        <span className="port-icon">
                          <i className="la la-bar-chart"></i>
                        </span>
                        <div className="flex-grow-1">
                          <h4>FX & payments</h4>
                          <p>
                            Convert currencies at the lowest rates. Make
                            payments all over the world. Hedge your trades with
                            futures and options on all main currencies.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="d-flex">
                        <span className="port-icon">
                          <i className="la la-calendar-check-o"></i>
                        </span>
                        <div className="flex-grow-1">
                          <h4>SpeedFi™</h4>
                          <p>
                            With our upcoming proprietary algorithm, your
                            payments will be credited to your beneficiaries in
                            less than 10 min accross the world.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="d-flex">
                        <span className="port-icon">
                          <i className="la la-lock"></i>
                        </span>
                        <div className="flex-grow-1">
                          <h4>Logistics</h4>
                          <p>
                            Merchandise tracking and analytics dashboard. Issue
                            electronic BLs and share commercial docs with your
                            suppliers, carriers, and freight forwarders.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-6">
                      <div className="d-flex">
                        <span className="port-icon">
                          <i className="la la-mobile"></i>
                        </span>
                        <div className="flex-grow-1">
                          <h4>TradeFi™</h4>
                          <p>
                            Apply for a Letter of Credit or bank guarantee
                            online and get it approved in 1 - 2 days. For other
                            trade finance solutions, talk to our experts.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="portfolio_img">
                  <img
                    src={require("./../../images/dash.png")}
                    alt=""
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="trade-app section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center">
                  <h2>Process payments. Anywhere</h2>
                  <p>
                    {" "}
                    All of our products are ready to go, easy to use and offer
                    great value to any kind of business
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card trade-app-content">
                  <div className="card-body">
                    <span>
                      <i className="la la-mobile"></i>
                    </span>
                    <h4 className="card-title">Mobile</h4>
                    <p>
                      All the power of Vidi FX's currency exchange and payment
                      solutions in the palm of your hand. Mobile app available
                      soon.
                    </p>

                    <Link to={"#"}>
                      {" "}
                      Know More <i className="la la-arrow-right"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="card trade-app-content">
                  <div className="card-body">
                    <span>
                      <i className="la la-desktop"></i>
                    </span>
                    <h4 className="card-title">Desktop</h4>
                    <p>
                      Powerful trading platform for those who mean business. The
                      Vidi FX trading experience, tailor-made for your Windows
                      or MacOS device.
                    </p>

                    <Link to={"#"}>
                      {" "}
                      Know More <i className="la la-arrow-right"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12" id="platform">
                <div className="card trade-app-content">
                  <div className="card-body">
                    <span>
                      <i className="la la-connectdevelop"></i>
                    </span>
                    <h4 className="card-title">API</h4>
                    <p>
                      The Vidi FX API is designed to provide an easy and
                      efficient way to integrate your enterprise applications
                      into our platform.
                    </p>

                    <Link to={"#"}>
                      {" "}
                      Know More <i className="la la-arrow-right"></i>{" "}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-xl-12">
                <div className="trusted-business py-5 text-center">
                  <h3>
                    Trusted by Our <strong>Partners & Investors</strong>
                  </h3>
                </div>
                <div className="row justify-content-center">
                  <div className="col-auto">
                    <div className="trusted-logo">
                      <Link to={"#"}>
                        <img
                          className="img-fluid"
                          src={require("./../../images/partners/ma.webp")}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="trusted-logo">
                      <Link to={"#"}>
                        <img
                          className="img-fluid"
                          src={require("./../../images/partners/hsbc.webp")}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="trusted-logo">
                      <Link to={"#"}>
                        <img
                          className="img-fluid"
                          src={require("./../../images/partners/kn.webp")}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  {/* <div className="col-auto">
                    <div className="trusted-logo">
                      <Link to={"#"}>
                        <img
                          className="img-fluid"
                          src={require("./../../images/partners/cc.webp")}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="trusted-logo">
                      <Link to={"#"}>
                        <img
                          className="img-fluid"
                          src={require("./../../images/partners/gv.webp")}
                          alt=""
                        />
                      </Link>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="testimonial section-padding" id="testimonial">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title">
                  <h2>What our customer says</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-10">
                <div className="testimonial-content">
                  <Testimonial />
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="promo section-padding">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-8">
                <div className="section-title text-center">
                  <h2>Pushing ahead of the competition</h2>
                  <p> Building the systems of tomorrow</p>
                </div>
              </div>
            </div>
            <div className="row align-items-center py-5">
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="promo-content">
                  <div className="promo-content-img">
                    <img
                      className="img-fluid"
                      src={require("./../../images/svg/protect.svg")}
                      alt=""
                    />
                  </div>
                  <h3>Fully Secure </h3>
                  <p>Our fintech systems have been audited by QuantVault</p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="promo-content">
                  <div className="promo-content-img">
                    <img
                      className="img-fluid"
                      src={require("./../../images/svg/cyber.svg")}
                      alt=""
                    />
                  </div>
                  <h3>Protected by insurance</h3>
                  <p>
                    Funds in transit and custody are guaranteed by our insurance
                    policy.
                  </p>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-4">
                <div className="promo-content">
                  <div className="promo-content-img">
                    <img
                      className="img-fluid"
                      src={require("./../../images/svg/finance.svg")}
                      alt=""
                    />
                  </div>
                  <h3>Industry experience</h3>
                  <p>
                    Our team has a deep knowledge of the import/export business
                    worldwide.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="appss section-padding" id="app">
          <div className="container">
            <div className="row align-items-center justify-content-between">
              <div className="col-xl-7 col-lg-6 col-md-6">
                <div className="appss-content">
                  <h2>
                    Available soon! The secure app to pay all over the world
                  </h2>
                  <ul>
                    <li>
                      <i className="la la-check"></i> All your fiat currencies
                      and digital assets in one place
                    </li>
                    <li>
                      <i className="la la-check"></i> Payments on the SWIFT,
                      CHAPS, SEPA, CIPS networks
                    </li>
                    <li>
                      <i className="la la-check"></i> Automate payments to your
                      suppliers
                    </li>
                    <li>
                      <i className="la la-check"></i> Launching soon on:
                    </li>
                  </ul>
                  <div className="mt-4">
                    <Link
                      to={"#"}
                      className="btn btn-primary my-1 waves-effect"
                    >
                      <img src={require("./../../images/android.svg")} alt="" />
                    </Link>
                    <Link
                      to={"#"}
                      className="btn btn-primary my-1 waves-effect"
                    >
                      <img src={require("./../../images/apple.svg")} alt="" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-5 col-lg-6 col-md-6">
                <div className="appss-img">
                  <img
                    className="img-fluid"
                    src={require("./../../images/app2.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="blog section-padding" id="blog">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title text-center">
                  <h2>Blog</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="blog-grid">
                  <div className="card">
                    <img
                      className="img-fluid"
                      src={require("./../../images/blog/1.jpg")}
                      alt=""
                    />
                    <div className="card-body">
                      <Link href="blog-single.html">
                      <Link to={"#"}>
                        <h4 className="card-title">
                          Why does Litecoin need MimbleWimble?
                        </h4>
                      </Link>
                      <p className="card-text">
                        Cras chinwag brown bread Eaton cracking goal so I said a
                        load of old tosh baking cakes.!
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="meta-info">
                        <Link to={"#"} className="author">
                          <img
                            src={require("./../../images/avatar/5.jpg")}
                            alt=""
                          />{" "}
                          Admin
                        </Link>
                        <Link to={"#"} className="post-date">
                          <i className="la la-calendar"></i> 31 July,{" "}
                          {new Date().getFullYear()}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="blog-grid">
                  <div className="card">
                    <img
                      className="img-fluid"
                      src={require("./../../images/blog/2.jpg")}
                      alt=""
                    />
                    <div className="card-body">
                      <Link href="blog-single.html">
                      <Link to={"#"}>
                        <h4 className="card-title">
                          How to securely store your HD wallet seeds?
                        </h4>
                      </Link>
                      <p className="card-text">
                        Cras chinwag brown bread Eaton cracking goal so I said a
                        load of old tosh baking cakes.!
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="meta-info">
                        <Link to={"#"} className="author">
                          <img
                            src={require("./../../images/avatar/6.jpg")}
                            alt=""
                          />{" "}
                          Admin
                        </Link>
                        <Link to={"#"} className="post-date">
                          <i className="la la-calendar"></i> 31 July,{" "}
                          {new Date().getFullYear()}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12">
                <div className="blog-grid">
                  <div className="card">
                    <img
                      className="img-fluid"
                      src={require("./../../images/blog/3.jpg")}
                      alt=""
                    />
                    <div className="card-body">
                      <Link href="blog-single.html">
                      <Link to={"#"}>
                        <h4 className="card-title">
                          Exclusive Interview With Xinxi Wang Of Litecoin
                        </h4>
                      </Link>
                      <p className="card-text">
                        Cras chinwag brown bread Eaton cracking goal so I said a
                        load of old tosh baking cakes.!
                      </p>
                    </div>
                    <div className="card-footer">
                      <div className="meta-info">
                        <Link to={"#"} className="author">
                          <img
                            src={require("./../../images/avatar/7.jpg")}
                            alt=""
                          />{" "}
                          Admin
                        </Link>
                        <Link to={"#"} className="post-date">
                          <i className="la la-calendar"></i> 31 July,{" "}
                          {new Date().getFullYear()}{" "}
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="get-touch section-padding" id="contact">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-xl-6">
                <div className="section-title">
                  <h2>Get in touch. Stay in touch.</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="get-touch-content">
                  <div className="d-flex">
                    <span>
                      <i className="fa fa-shield"></i>
                    </span>
                    <div className="flex-grow-1">
                      <h4>Support</h4>
                      <p>
                        Got a problem? Just get in touch. Our Brussels based
                        support team is available during business hours.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="get-touch-content">
                  <div className="d-flex">
                    <span>
                      <i className="fa fa-cubes"></i>
                    </span>
                    <div className="flex-grow-1">
                      <h4>Vidi FX Blog</h4>
                      <p>
                        News and updates from the world’s most competitive FX
                        and payment provider.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="get-touch-content">
                  <div className="d-flex">
                    <span>
                      <i className="fa fa-certificate"></i>
                    </span>
                    <div className="flex-grow-1">
                      <h4>Careers</h4>
                      <p>
                        Help build the future of fintech. Start your new career
                        at Vidi FX.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="get-touch-content">
                  <div className="d-flex">
                    <span>
                      <i className="fa fa-life-ring"></i>
                    </span>
                    <div className="flex-grow-1">
                      <h4>Community</h4>
                      <p>
                        Vidi FX is global. Join the discussion in our Telegram
                        channel.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Bottom />

        <Footer1 />
      </>
    );
  }
}

export default Homepage;
