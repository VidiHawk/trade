import React, { Component } from "react";
import { Accordion, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import PageTitle from "../element/page-title";
import Popup from "../element/popup";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
// import AccountSubmenu from "../layout/account-submenu";
// import { Row, Col, Card } from 'react-bootstrap';
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class Payments extends Component {
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

    // const { currentUser } = this.state;

    return (
      <>
        <Header2 />
        <Sidebar />
        <PageTitle />

        <div className="content-body">
          <div className="container">
            <div className="row">
              {/* <div className="col-xl-12">
              <div className="card sub-menu">
                <div className="card-body">
                  <div className="row">
                    <div className="page-title-header">
                      <p>Make a Payment</p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">From</h4>
                  </div>
                  <div className="card-body">
                    <div className="buy-sell-widget">
                      <form
                        method="post"
                        name="myform"
                        className="currency_validate"
                      >
                        <div className="mb-3">
                          <label className="form-label">Account</label>
                          <div className="input-group mb-3">
                            <select
                              name="account"
                              className="form-control mw-100"
                            >
                              <option value="NL02ABNA0123456789">
                                NL02ABNA0123456789
                              </option>
                              <option value="NL02ABNA0123456789">
                                NL02ABNA0564326785
                              </option>
                            </select>
                            <input
                              type="text"
                              name="usd_amount"
                              className="form-control text-end"
                              // value="1,234,347.00 USD"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Currency</label>
                          <div className="input-group mb-3">
                            <select
                              name="currency"
                              className="form-control mw-100"
                            >
                              <option value="eur">EUR</option>
                              <option value="usd">USD</option>
                            </select>
                            <input
                              type="text"
                              name="usd_amount"
                              className="form-control text-end"
                              // value="345,125.00 EUR"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">
                            Enter your amount
                          </label>
                          <div className="input-group">
                            <input
                              type="text"
                              name="currency_amount"
                              className="form-control"
                              placeholder="34,000 EUR"
                            />
                            {/* <!-- <input type="text" name="usd_amount" className="form-control"
                                                    placeholder="125.00 USD"/> --> */}
                          </div>
                          <div className="d-flex justify-content-between mt-3">
                            <p className="mb-0">Monthly Limit</p>
                            <h6 className="mb-0">$49750 remaining</h6>
                          </div>
                        </div>
                        {/* <Link to={"#"} className="btn btn-success btn-block">
                        Buy Now
                      </Link> */}
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">To</h4>
                  </div>
                  <div className="card-body">
                    <div className="buy-sell-widget">
                      <form
                        method="post"
                        name="myform"
                        className="currency_validate"
                      >
                        <div className="mb-3">
                          <label className="form-label">Account</label>
                          <div className="input-group mb-3">
                            <select
                              name="currency"
                              className="form-control mw-100"
                            >
                              <option value="usd-account">
                                009456464750287364
                              </option>
                              <option value="eur-account">
                                009456464750287364
                              </option>
                            </select>
                            <input
                              type="text"
                              name="usd_amount"
                              className="form-control text-end"
                              value=""
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Payment Currency</label>
                          <div className="input-group mb-3">
                            <select name="currency" className="form-control">
                              <option data-display="Bitcoin" value="bitcoin">
                                USD
                              </option>
                              <option value="litecoin">Litecoin</option>
                            </select>
                            <input
                              type="text"
                              name="usd_amount"
                              className="form-control text-end"
                              value="356,536.00 USD"
                            />
                          </div>
                        </div>

                        <div className="mb-3">
                          <label className="form-label">Account Name</label>
                          <div className="input-group">
                            <input
                              type="text"
                              name="currency_amount"
                              className="form-control"
                              placeholder="Foxconn Industries China Limited"
                            />
                            {/* <!-- <input type="text" name="usd_amount" className="form-control"
                                                    placeholder="125.00 USD"/> --> */}
                          </div>
                          {/* <div className="d-flex justify-content-between mt-3">
                          <p className="mb-0">Monthly Limit</p>
                          <h6 className="mb-0">$49750 remaining</h6>
                        </div> */}
                        </div>
                        <Link to={"#"} className="btn btn-danger btn-block">
                          Pay Now
                        </Link>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-12 col-lg-12 col-md-12">
                <div className="card">
                  <div className="card-body">
                    <div className="buyer-seller">
                      <div className="d-flex justify-content-between mb-3">
                        <div className="buyer-info">
                          <div className="d-flex">
                            {/* <img
                            className="me-3 rounded"
                            src={require("../../images/avatar/2.jpg")}
                            alt=""
                          /> */}
                            <div className="media-body">
                              <h4>Remitter</h4>
                              <h5 className="text-body">Fabian de Mortier</h5>
                              <Link to={"#"} className="text-body">
                                fdm@example.com
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="seller-info text-end">
                          <div className="d-flex">
                            <div className="media-body">
                              <h4>Recipient</h4>
                              <h5 className="text-body">Mike Zhang</h5>
                              <Link to={"#"} className="text-body">
                                mz@example.com
                              </Link>
                            </div>
                            {/* <img
                            className="ms-3 rounded"
                            src={require("../../images/avatar/5.jpg")}
                            alt=""
                          /> */}
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-striped">
                          <tbody>
                            <tr>
                              <td>
                                <span className="text-primary">
                                  You are paying
                                </span>
                              </td>
                              <td>
                                <span className="text-primary">
                                  356,536.00 USD
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td>To Account</td>
                              <td>Bank of China ***********5245</td>
                            </tr>
                            <tr>
                              <td>Mid-Market Exchange Rate</td>
                              <td>1 EUR / 1.04856347 USD</td>
                            </tr>
                            <tr>
                              <td>Commission</td>
                              <td>0.25%</td>
                            </tr>
                            <tr>
                              <td>Total Commission</td>
                              <td>$725.00 USD</td>
                            </tr>
                            <tr>
                              <td>Payment Fee</td>
                              <td>
                                <div className="text-danger">$0.00 USD</div>
                              </td>
                            </tr>
                            <tr>
                              <td> Total Commission + Payment Fee</td>
                              <td> $725.00 USD</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 
              <div className="col-xl-3 col-lg-3">
                <div className="apps-download">
                  <div className="apps-download-content">
                    <h4>Download the app to make payments on the go:</h4>
                    <div className="mt-4 text-center">
                      <Link to={"#"} className="btn btn-primary m-2">
                        <img src={require("../../images/android.svg")} alt="" />
                      </Link>
                      <Link to={"#"} className="btn btn-success m-2">
                        <img src={require("../../images/apple.svg")} alt="" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div> */}

              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Recent Activity</h4>
                  </div>
                  <div className="card-body">
                    <div className="transaction-table">
                      <div className="table-responsive">
                        <table className="table table-striped mb-0 table-responsive-sm">
                          <tbody>
                            <tr>
                              <td>
                                <span className="sold-thumb">
                                  <i className="mdi mdi-arrow-down"></i>
                                </span>
                              </td>

                              <td>
                                <span className="badge badge-danger p-2">
                                  Out
                                </span>
                              </td>
                              <td>
                                {/* <i className="cc BTC"></i> USD */}
                                <i className="fas fa-dollar-sign"></i> USD
                              </td>
                              <td>To - Bank *******5264</td>
                              <td className="text-danger">-45,738.00 USD</td>
                              <td>1,254,356.00 USD</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="buy-thumb">
                                  <i className="mdi mdi-arrow-up"></i>
                                </span>
                              </td>
                              <td>
                                <span className="badge badge-success p-2">
                                  In
                                </span>
                              </td>
                              <td>
                                {/* <i className="cc LTC"></i> LTC */}
                                JPY
                              </td>
                              <td>From - Bank *******8475</td>
                              <td className="text-success">+33,345.00 JPY</td>
                              <td>1,234,323.25 USD</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="sold-thumb">
                                  <i className="mdi mdi-arrow-down"></i>
                                </span>
                              </td>
                              <td>
                                <span className="badge badge-danger p-2">
                                  Out
                                </span>
                              </td>
                              <td>
                                {/* <i className="cc XRP"></i> XRP */} CHF
                              </td>
                              <td>Using - Card *******8475</td>
                              <td className="text-danger">-242.00 CHF</td>
                              <td>1,234,023.25 USD</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="buy-thumb">
                                  <i className="mdi mdi-arrow-up"></i>
                                </span>
                              </td>
                              <td>
                                <span className="badge badge-success p-2">
                                  In
                                </span>
                              </td>
                              <td>
                                {/* <i className="cc DASH"></i> USD */}
                                USD
                              </td>
                              <td>Using - Card *******2321</td>
                              <td className="text-success">+5,843.00 USD</td>
                              <td>1,228,895.25 USD</td>
                            </tr>
                            <tr>
                              <td>
                                <span className="sold-thumb">
                                  <i className="mdi mdi-arrow-down"></i>
                                </span>
                              </td>
                              <td>
                                <span className="badge badge-danger p-2">
                                  Out
                                </span>
                              </td>
                              <td>
                                {/* <i className="cc BTC"></i> EUR */}
                                EUR
                              </td>
                              <td>From - Bank *******2321</td>
                              <td className="text-danger">-242 EUR</td>
                              <td>1,234,323.25 USD</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">FAQ</h4>
                  </div>
                  <div className="card-body">
                    <Accordion
                      defaultActiveKey="0"
                      id="accordion-faq"
                      className="accordion"
                    >
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="0">
                          <h5>What Shipping Methods are Available?</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                          <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="1">
                          <h5>How Long Will it Take To Get My Package?</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                          <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>

                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="2">
                          <h5>How Do I Track My Order?</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                          <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                      <Card>
                        <Accordion.Toggle as={Card.Header} eventKey="3">
                          <h5>How Do I Track My Order?</h5>
                        </Accordion.Toggle>
                        <Accordion.Collapse eventKey="3">
                          <Card.Body>
                            Anim pariatur cliche reprehenderit, enim eiusmod
                            high life accusamus terry richardson ad squid. 3
                            wolf moon officia aute, non cupidatat skateboard
                            dolor brunch. Food truck quinoa nesciunt laborum
                            eiusmod.
                          </Card.Body>
                        </Accordion.Collapse>
                      </Card>
                    </Accordion>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <Popup />
              </div>
            </div>
          </div>
        </div>

        <Footer2 />
      </>
    );
  }
}
