import React, { Component } from "react";
import { Link } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
import AuthService from "../../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

// const vusername = (value) => {
//   if (value.length < 3 || value.length > 20) {
//     return (
//       <div className="alert alert-danger" role="alert">
//         The username must be between 3 and 20 characters.
//       </div>
//     );
//   }
// };

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    // this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      // username: "",
      email: "",
      password: "",
      successful: false,
      message: "",
    };
  }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value,
  //   });
  // }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        // this.state.username,
        this.state.email,
        this.state.password
      ).then(
        (response) => {
          console.log("Success");
          this.props.history.push("/account-overview");
          window.location.reload();
          this.setState({
            message: response.data.message,
            successful: true,
          });
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            successful: false,
            message: resMessage,
          });
        }
      );
    } else {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    return (
      <>
        <div className="authentication">
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
                  <div className="card-header justify-content-center">
                    <h4 className="card-title">Sign up for an account</h4>
                  </div>
                  <div className="card-body">
                    <Form
                      onSubmit={this.handleRegister}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      {!this.state.successful && (
                        <div>
                          {/* <div className="mb-3">
                            <label>Username</label>
                            <Input
                              type="text"
                              className="form-control"
                              placeholder="username"
                              name="username"
                              value={this.state.username}
                              onChange={this.onChangeUsername}
                              validations={[required, vusername]}
                            />
                          </div> */}
                          <div className="mb-3">
                            <label>Email</label>
                            <Input
                              type="email"
                              className="form-control"
                              placeholder="hello@example.com"
                              name="email"
                              value={this.state.email}
                              onChange={this.onChangeEmail}
                              validations={[required, email]}
                            />
                          </div>
                          <div className="mb-3">
                            <label>Password</label>
                            <Input
                              type="password"
                              className="form-control"
                              placeholder="Password"
                              name="password"
                              value={this.state.password}
                              onChange={this.onChangePassword}
                              validations={[required, vpassword]}
                            />
                          </div>
                        </div>
                      )}

                      {this.state.message && (
                        <div className="form-control">
                          <div
                            className={
                              this.state.successful
                                ? "alert alert-success"
                                : "alert alert-danger"
                            }
                            role="alert"
                          >
                            {this.state.message}
                          </div>
                        </div>
                      )}
                      <div className="text-center mt-4">
                        <button
                          className="btn btn-success btn-block"
                          disabled={this.state.loading}
                        >
                          {this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                          )}
                          <span>Sign up</span>
                        </button>
                        <CheckButton
                          // className="btn btn-success btn-block"
                          style={{ display: "none" }}
                          ref={(c) => {
                            this.checkBtn = c;
                          }}
                        />
                      </div>

                      <div className="new-account mt-3">
                        <p>
                          Already have an account?{" "}
                          <Link className="text-primary" to={"signin"}>
                            Sign in
                          </Link>
                        </p>
                      </div>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
