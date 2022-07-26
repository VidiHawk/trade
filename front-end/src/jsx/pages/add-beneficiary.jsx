import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";

export default class BankAcc extends Component {
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

        <div className="verification section-padding-50">
          <div className="container h-100">
            <div className="row justify-content-center h-100 align-items-center">
              <div className="col-xl-5 col-md-6">
                <div className="auth-form card">
                  <div className="card-header">
                    <h4 className="card-title">Add a beneficiary</h4>
                  </div>
                  <div className="card-body">
                    <form className="identity-upload">
                      <div className="row">
                        <div className="mb-3 col-xl-12">
                          <label className="form-label">IBAN </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3 col-xl-12">
                          <label className="form-label">Account Name </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3 col-xl-12">
                          <label className="form-label">BIC </label>
                          <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3 col-xl-12">
                          <img
                            src="./images/routing.png"
                            alt=""
                            className="img-fluid"
                          />
                        </div>

                        <div className="text-center col-12">
                          <Link
                            to={"./beneficiaries"}
                            className="btn btn-primary mx-2"
                          >
                            Back
                          </Link>
                          <Link
                            to={"./verify-beneficiary"}
                            className="btn btn-success mx-2"
                          >
                            Save
                          </Link>
                        </div>
                      </div>
                    </form>
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
