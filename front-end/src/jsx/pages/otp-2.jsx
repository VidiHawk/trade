import React from "react";
import { Link } from "react-router-dom";

function Otp2() {
  return (
    <>
      <div className="authincation">
        <div className="container h-100">
          <div className="row justify-content-center h-100 align-items-center">
            <div className="col-xl-5 col-md-6">
              <div className="mini-logo text-center my-3">
                <Link to={"./"}>
                  <img
                    src={require("../../images/logo.png")}
                    alt=""
                    width="150"
                  />
                </Link>
              </div>
              <div className="auth-form card">
                <div className="card-body">
                  <Link className="page-back text-muted" to={"./otp-1"}>
                    <span>
                      <i className="fa fa-angle-left"></i>
                    </span>{" "}
                    Back
                  </Link>
                  <h3 className="text-center">OTP Verification</h3>
                  {/* <p className="text-center mb-5">
                    We will send one time code on this number
                  </p> */}
                  <form>
                    <div className="mb-3">
                      <label>Enter your OTP Code</label>
                      <input
                        type="text"
                        className="form-control text-center font-weight-bold"
                        defaultValue=""
                      />
                    </div>
                    <div className="text-center">
                      <Link
                        to={"./account-overview"}
                        className="btn btn-success btn-block"
                      >
                        Verify
                      </Link>
                    </div>
                  </form>
                  {/* <div className="info mt-3">
                    <p className="text-muted">
                      You dont recommended to save password to browsers!
                    </p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Otp2;
