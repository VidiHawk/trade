import React from "react";
import { Nav, Tab } from "react-bootstrap";
import PerfectScrollbar from "react-perfect-scrollbar";
// import { Link } from "react-router-dom";
import PageTitle from "../element/page-title";
import AccountSubmenu from "../layout/account-submenu";
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";

function AccountOverview() {
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

            <div className="col-xl-12 col-lg-12 col-md-12">
              <div className="card acc_balance">
                <div className="card-header">
                  <h4 className="card-title">Main account</h4>
                  {/* <div className="col-6">
                    <ul className="text-end breadcrumbs list-unstyle">
                      <li>
                        Account Number: <b>NL73TCCB1234567800</b>
                      </li>
                    </ul>
                  </div> */}
                </div>

                <div className="card-body">
                  <span>Consolidated balance</span>
                  <h3>1,234,347.00 USD</h3>

                  {/* <div className="d-flex justify-content-between my-3">
                    <div>
                      <p className="mb-1">USD balance</p>
                      <h4>345,233.35 USD</h4>
                    </div>
                    <div>
                      <p className="mb-1">JPY balance</p>
                      <h4>56,845.25 JPY</h4>
                    </div> </div>*/}
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="row">
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">USD Balance</p>
                      <h4>345,233.35 USD</h4>
                    </div>
                    {/* <div className="card-body">
                      <p className="mb-1">USD Account Number</p>
                      <h4>NL73TCCB1234567801</h4>
                    </div> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">EUR Balance</p>
                      <h4>534,354.00 EUR</h4>
                    </div>
                    {/* <div className="card-body">
                      <p className="mb-1">EUR Account Number</p>
                      <h4>NL73TCCB1234567802</h4>
                    </div> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">CAD Balance</p>
                      <h4>5,400.00 CAD</h4>
                    </div>
                    {/* <div className="card-body">
                      <p className="mb-1">CAD Account Number</p>
                      <h4>NL73TCCB1234567803</h4>
                    </div> */}
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6">
                  <div className="card text-center pt-2">
                    <div className="card-body">
                      <p className="mb-1">JPY Balance</p>
                      <h4>128,800 JPY</h4>
                    </div>
                    {/* <div className="card-body">
                      <p className="mb-1">UJPYAccount Number</p>
                      <h4>NL73TCCB1234567804</h4>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-12">
              <div className="card-header">
                <h4 className="card-title">Transactions History</h4>
              </div>
              <Tab.Container defaultActiveKey="usd-transactions">
                <div className="card">
                  <div className="card-header">
                    <div className="card-title">
                      <Nav variant="pills">
                        <Nav.Link eventKey="usd-transactions">USD</Nav.Link>
                        <Nav.Link eventKey="eur-transactions">EUR</Nav.Link>
                        <Nav.Link eventKey="cad-transactions">CAD</Nav.Link>
                        <Nav.Link eventKey="jpy-transactions">JPY</Nav.Link>
                      </Nav>
                    </div>
                  </div>
                  <PerfectScrollbar>
                    <div className="card-body open-position-table">
                      <div className="market-history market-order">
                        <Tab.Content>
                          <Tab.Pane eventKey="usd-transactions">
                            <div className="table-responsive">
                              <table className="table table-striped mb-0 table-responsive-sm">
                                <thead>
                                  <tr>
                                    <th>Transaction ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Balance</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>#565845522</td>
                                    <td>
                                      January 12, {new Date().getFullYear()}{" "}
                                    </td>
                                    <td>12,364.00 USD</td>
                                    <td>Pending</td>
                                    <td>234,485 USD</td>
                                  </tr>
                                  <tr>
                                    <td>#565845522</td>
                                    <td>
                                      January 10, {new Date().getFullYear()}{" "}
                                    </td>
                                    <td>345.00 USD</td>
                                    <td>Completed</td>
                                    <td>234,645 USD</td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </Tab.Pane>
                          <Tab.Pane eventKey="eur-transactions">
                            <div className="table-responsive">
                              <table className="table table-striped mb-0 table-responsive-sm">
                                <thead>
                                  <tr>
                                    <th>Transaction ID</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Balance</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr>
                                    <td>#565845522</td>
                                    <td>
                                      January 12, {new Date().getFullYear()}{" "}
                                    </td>
                                    <td>12,364.00 EUR</td>
                                    <td>Pending</td>
                                    <td>234,485 EUR</td>
                                  </tr>
                                  <tr>
                                    <td>#565845522</td>
                                    <td>
                                      January 10, {new Date().getFullYear()}{" "}
                                    </td>
                                    <td>345.00 EUR</td>
                                    <td>Completed</td>
                                    <td>234,645 EUR</td>
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

              {/* </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab2">
                        <></>
                      </Tab.Pane>
                      <Tab.Pane eventKey="tab3"></Tab.Pane>
                    </Tab.Content>
                  </Tab.Container> */}
            </div>
            {/* </div>
            </div> */}
          </div>
        </div>
      </div>

      <Footer2 />
    </>
  );
}

export default AccountOverview;
