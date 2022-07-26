import React, { Component } from "react";
import { Link } from "react-router-dom";
import Footer2 from "../layout/footer2";
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";
// import PageTitle from '../element/page-title';

export default class VerifyBeneficiary extends Component {
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
                  <div className="card-body">
                    <form className="identity-upload">
                      <div className="identity-content">
                        <span className="icon">
                          <i className="fa fa-check"></i>
                        </span>
                        <h4>Your new beneficiary was added</h4>
                        <p>You can now make a new payment.</p>
                      </div>

                      <div className="text-center">
                        <Link
                          to={"./beneficiaries"}
                          className="btn btn-success ps-5 pe-5"
                        >
                          Continue
                        </Link>
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
