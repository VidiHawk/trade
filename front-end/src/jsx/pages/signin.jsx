import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Signin extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: "",
    };
  }

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

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true,
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("./otp-1");
          window.location.reload();
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
                    <h4 className="card-title">Sign in</h4>
                  </div>
                  <div className="card-body">
                    <Form
                      onSubmit={this.handleLogin}
                      ref={(c) => {
                        this.form = c;
                      }}
                    >
                      <form
                        method="post"
                        name="myform"
                        className="signin_validate"
                      >
                        <div className="mb-3">
                          <label>Email</label>
                          <Input
                            type="email"
                            className="form-control"
                            placeholder="hello@example.com"
                            name="email"
                            value={this.state.email}
                            onChange={this.onChangeEmail}
                            validations={[required]}
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
                            validations={[required]}
                          />
                        </div>
                        {this.state.message && (
                          <div className="form-control">
                            <div className="alert alert-danger" role="alert">
                              {this.state.message}
                            </div>
                          </div>
                        )}
                        <div className="row d-flex justify-content-between mt-4 mb-2">
                          <div className="mb-3 mb-0">
                            <label className="toggle">
                              <input
                                className="toggle-checkbox"
                                type="checkbox"
                              />
                              <span className="toggle-switch"></span>
                              <span className="toggle-label">Remember me</span>
                            </label>
                          </div>
                          <div className="mb-3 mb-0">
                            <Link to={"./reset"}>Forgot Password?</Link>
                          </div>
                        </div>
                        {this.state.loading && (
                          <span className="spinner-border spinner-border-sm"></span>
                        )}
                        <div className="text-center">
                          <button
                            className="btn btn-success btn-block"
                            disabled={this.state.loading}
                          >
                            {this.state.loading && (
                              <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Sign in</span>
                          </button>

                          <CheckButton
                            className="btn btn-success btn-block"
                            style={{ display: "none" }}
                            ref={(c) => {
                              this.checkBtn = c;
                            }}
                          />
                          {/* 
                          <Link
                            to={"./otp-1"}
                            className="btn btn-success btn-block"
                          >
                            Sign in
                          </Link> */}
                        </div>
                      </form>
                    </Form>
                    <div className="new-account mt-3">
                      <p>
                        Don't have an account?{" "}
                        <Link className="text-primary" to={"./signup"}>
                          Sign up
                        </Link>
                      </p>
                    </div>
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
