import React, { Component } from "react";
import { Link } from "react-router-dom";
import PageTitle from "../element/page-title";
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import AccountSubmenu from "../layout/account-submenu";
import Sidebar from "../layout/sidebar";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class SettingAccount extends Component {
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
                    <h4 className="card-title">Beneficiaries</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table beneficiaries">
                        <tbody>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <div className="me-3">
                                  <i className="flag-icon flag-icon-gb"></i>
                                </div>
                                <div className="media-body">
                                  <h5 className="mt-1 mb-0">
                                    The Currency Cloud Ltd
                                  </h5>
                                  <p className="mt-1 mb-0">
                                    GBP Account **************5421
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="verify">
                                <div className="verified">Priority</div>
                              </div>
                            </td>
                            <td>
                              <div className="verify">
                                <div className="verified">
                                  <span>
                                    <i className="la la-arrow-right"></i>
                                  </span>
                                  <Link to={"#"}>Pay</Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="edit-option">
                                <Link to={"#"}>
                                  <i className="fa fa-eye mx-2"></i>
                                </Link>
                                <Link to={"#"}>
                                  <i className="fa fa-pencil mx-2"></i>
                                </Link>
                                <Link to={"#"}>
                                  <i className="fa fa-trash mx-2"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <div className="me-3">
                                  <i className="flag-icon flag-icon-de"></i>
                                </div>
                                <div className="media-body">
                                  <h5 className="mt-1 mb-0">Acme GMBH</h5>
                                  <p className="mt-1 mb-0">
                                    EUR Account **************3764
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="verify">
                                <div className="verified">Regular</div>
                              </div>
                            </td>
                            <td>
                              <div className="verify">
                                <div className="verified">
                                  <span>
                                    <i className="la la-arrow-right"></i>
                                  </span>
                                  <Link to={"#"}>Pay</Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="edit-option">
                                <Link to={"#"}>
                                  <i className="fa fa-eye mx-2"></i>
                                </Link>
                                <Link to={"#"}>
                                  <i className="fa fa-pencil mx-2"></i>
                                </Link>
                                <Link to={"#"}>
                                  <i className="fa fa-trash mx-2"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div className="d-flex">
                                <div className="me-3">
                                  <i className="flag-icon flag-icon-cn"></i>
                                </div>
                                <div className="media-body">
                                  <h5 className="mt-1 mb-0">
                                    Alibaba Hangzhou Co., Ltd.
                                  </h5>
                                  <p className="mt-1 mb-0">
                                    USD Account **************3564
                                  </p>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="verify">
                                <div className="verified">Priority</div>
                              </div>
                            </td>
                            <td>
                              <div className="verify">
                                <div className="verified">
                                  <span>
                                    <i className="la la-arrow-right"></i>
                                  </span>
                                  <Link to={"#"}>Pay</Link>
                                </div>
                              </div>
                            </td>
                            <td>
                              <div className="edit-option">
                                <Link to={"#"}>
                                  <i className="fa fa-eye mx-2"></i>
                                </Link>
                                <Link to={"#"}>
                                  <i className="fa fa-pencil mx-2"></i>
                                </Link>
                                <Link to={"#"}>
                                  <i className="fa fa-trash mx-2"></i>
                                </Link>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <div className="mt-3">
                        <Link
                          to={"./add-beneficiary"}
                          className="btn btn-primary px-4 py-2 me-3 my-2"
                        >
                          Add New Beneficiary
                        </Link>
                        {/* <Link
                          to={"./verify-step-1"}
                          className="btn btn-success px-4 py-2 my-2"
                        >
                          Add Debit Account
                        </Link> */}
                      </div>
                    </div>
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
