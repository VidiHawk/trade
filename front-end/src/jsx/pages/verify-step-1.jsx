import React from "react";
import { Link } from "react-router-dom";
// import PageTitle from '../element/page-title';
import Footer2 from "../layout/footer2";
// import { Row, Col, Card } from 'react-bootstrap';
import Header2 from "../layout/header2";
import Sidebar from "../layout/sidebar";

function VerifyStep1() {
  return (
    <>
      <Header2 />
      <Sidebar />

      <div className="verification section-padding-50">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="auth-form card">
                {/* <!-- <div className="card-header">
                                <h4 className="card-title">Link a Debit card</h4>
                            </div> --> */}
                <div className="card-body">
                  <form className="identity-upload">
                    <div className="identity-content">
                      <span className="icon">
                        <i className="fa fa-shield"></i>
                      </span>
                      <h4>Please verify your identity to open an account</h4>
                      <p>
                        Regulators and anti-money laundering laws require us to
                        identify our customers
                      </p>
                    </div>

                    <div className="text-center">
                      <Link
                        to={"./verify-step-2"}
                        className="btn btn-success ps-5 pe-5"
                      >
                        Upload ID
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

export default VerifyStep1;
