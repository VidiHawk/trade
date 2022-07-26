import React, { Component } from "react";
import { Nav, Tab } from "react-bootstrap";
import PageTitle from "../element/page-title";
import AccountSubmenu from "../layout/account-submenu";
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class AccountDeposit extends Component {
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

    const eurSepa =
      " Account Holder Name: Vidiren SA \n IBAN: GB01TCCL71967452309172 \n BIC: TCCLGB31 \n Currency: EUR \n Bank Name: The Currency Cloud Limited \n Bank Address: 12 Steward Street, The Steward Building, London, E1 6FQ, GB";
    const eurSwift =
      " Account Holder Name:  Vidiren SA \n IBAN: GB28TCCL12345620224698 \n BIC: TCCLGB3L \n Currency: EUR \n Bank Name: The Currency Cloud Limited \n Bank Address: 12 Steward Street, The Steward Building, London, E1 6FQ, GB";
    const usdAch =
      " Account Holder Name: Vidiren SA \n Account Number: 0331007980 \n ACH Routing Number: 026073150 \n Currency: USD \n Bank Name: Community Federal Savings Bank \n Bank Address: 810 Seventh Avenue, New York, NY 10019, US";
    const usdFedwire =
      " Account Holder Name: Vidiren SA \n Account Number: 0331007980 \n Fedwire Routing Number: 026073008 \n Currency: USD \n Bank Name: Community Federal Savings Bank \n Bank Address: 810 Seventh Avenue, New York, NY 10019, US";
    const usdSwift =
      " Account Holder Name:  Vidiren SA \n IBAN: GB28TCCL12345620224698 \n BIC: TCCLGB3L \n Currency: USD \n Bank Name: The Currency Cloud Limited \n Bank Address: 12 Steward Street, The Steward Building, London, E1 6FQ, GB";
    const gbpFaster =
      " Account Holder Name: Vidiren SA \n Account Number: 20224698 \n Sort Code: 123456 \n Currency: GBP \n Bank Name: The Currency Cloud Limited \n Bank Address: 12 Steward Street, The Steward Building, London, E1 6FQ, GB";

    return (
      <>
        <Header2 />
        <Sidebar />
        <PageTitle />

        <div className="content-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="card sub-menu">
                  <div className="card-body">
                    <AccountSubmenu />
                  </div>
                </div>
              </div>
              <div className="col-xl-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Your account details</h4>
                  </div>
                  <div className="card-body" id="deposits">
                    <Tab.Container defaultActiveKey="tab1">
                      <Nav variant="pills">
                        <Nav.Link eventKey="tab1">USD</Nav.Link>
                        <Nav.Link eventKey="tab2">EUR</Nav.Link>
                        <Nav.Link eventKey="tab3">GBP</Nav.Link>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="tab1">
                          <center>
                            <h3 className="card-title">USD Account</h3>
                            <br />
                            <h4 className="card-title">ACH Payment</h4>
                            <p>
                              Accepts payments originating in the US up to
                              $1,000,000 sent via ACH.
                            </p>
                          </center>

                          <form action="">
                            <div className="input-group">
                              <textarea
                                type="text"
                                className="form-control"
                                rows={6}
                                defaultValue={usdAch}
                              />
                            </div>
                            <div className="input-group-append">
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <button
                                  className="input-group-text bg-primary text-white"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    navigator.clipboard.writeText(usdAch);
                                  }}
                                >
                                  Copy account details
                                </button>
                              </div>
                            </div>
                          </form>

                          <center>
                            <h4 className="card-title">Fedwire Payment</h4>
                            <p>
                              Accepts payments originating in the US up to
                              $1,000,000 sent via Fedwire.
                            </p>
                          </center>

                          <form action="">
                            <div className="input-group">
                              <textarea
                                type="text"
                                className="form-control"
                                rows={6}
                                defaultValue={usdFedwire}
                              />
                            </div>
                            <div className="input-group-append">
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <button
                                  className="input-group-text bg-primary text-white"
                                  onClick={(event) => {
                                    navigator.clipboard.writeText(usdFedwire);
                                    event.preventDefault();
                                  }}
                                >
                                  Copy account details
                                </button>
                              </div>
                            </div>
                          </form>

                          <center>
                            <h4 className="card-title">SWIFT Payments</h4>
                            <p>
                              Used for international wire payments or high-value
                              transactions.
                            </p>
                          </center>

                          <form action="">
                            <div className="input-group">
                              <textarea
                                type="text"
                                className="form-control"
                                rows={6}
                                defaultValue={usdSwift}
                              />
                            </div>
                            <div className="input-group-append">
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <button
                                  className="input-group-text bg-primary text-white"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    navigator.clipboard.writeText(usdSwift);
                                  }}
                                >
                                  Copy account details
                                </button>
                              </div>
                            </div>
                          </form>

                          <ul>
                            <li>
                              <i className="mdi mdi-checkbox-blank-circle"></i>
                              Use the country of origin and payment amount to
                              choose the correct option for funding your
                              account.
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab2">
                          <center>
                            <h3 className="card-title">EUR Account</h3>
                            <br />
                            <h4 className="card-title">SEPA Payments</h4>
                            <p>
                              For euro payments, to anywhere in the European
                              Union, as well as a number of non-EU countries,
                              similar to a domestic payment.
                            </p>
                          </center>

                          <form action="">
                            <div className="input-group">
                              <textarea
                                type="text"
                                className="form-control"
                                rows={6}
                                defaultValue={eurSepa}
                              />
                            </div>
                            <div className="input-group-append">
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <button
                                  className="input-group-text bg-primary text-white"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    navigator.clipboard.writeText(eurSepa);
                                  }}
                                >
                                  Copy account details
                                </button>
                              </div>
                            </div>
                          </form>

                          <center>
                            <h4 className="card-title">SWIFT Payments</h4>
                            <p>
                              Used for international wire payments or high-value
                              transactions.
                            </p>
                          </center>

                          <form action="">
                            <div className="input-group">
                              <textarea
                                type="text"
                                className="form-control"
                                rows={6}
                                defaultValue={eurSwift}
                              />
                            </div>
                            <div className="input-group-append">
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <button
                                  className="input-group-text bg-primary text-white"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    navigator.clipboard.writeText(eurSwift);
                                  }}
                                >
                                  Copy account details
                                </button>
                              </div>
                            </div>
                          </form>

                          <ul>
                            <li>
                              <i className="mdi mdi-checkbox-blank-circle"></i>
                              Use the country of origin and payment amount to
                              choose the correct option for funding your
                              account.
                            </li>
                          </ul>
                        </Tab.Pane>
                        <Tab.Pane eventKey="tab3">
                          <center>
                            <h3 className="card-title">GBP Account</h3>
                            <br />
                            <h4 className="card-title">UK Faster Payments</h4>
                            <p>
                              Accepts payments up to £1,000,000 originating in
                              the UK. Funds typically arrive within a few
                              minutes of being sent, 24/7.
                            </p>
                          </center>

                          <form action="">
                            <div className="input-group">
                              <textarea
                                type="text"
                                className="form-control"
                                rows={6}
                                defaultValue={gbpFaster}
                              />
                            </div>
                            <div className="input-group-append">
                              <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                                <button
                                  className="input-group-text bg-primary text-white"
                                  onClick={(event) => {
                                    event.preventDefault();
                                    navigator.clipboard.writeText(gbpFaster);
                                  }}
                                >
                                  Copy account details
                                </button>
                              </div>
                            </div>
                          </form>

                          <ul>
                            <li>
                              <i className="mdi mdi-checkbox-blank-circle"></i>
                              Use the country of origin and payment amount to
                              choose the correct option for funding your
                              account.
                            </li>
                          </ul>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer2 />
      </>
    );
  }
}
