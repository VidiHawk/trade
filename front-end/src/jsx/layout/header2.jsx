import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import AuthService from "../../services/auth.service";
import EventBus from "../../common/EventBus";

const ProfileToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="profile_log">
      <div className="user">
        <span className="thumb">
          <i className="mdi mdi-account"></i>
        </span>
        <span className="arrow">
          <i className="la la-angle-down"></i>
        </span>
      </div>
    </div>
  </div>
));

const LanguageToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="language">
      <div className="icon">
        <i className="flag-icon flag-icon-gb"></i>
        <span>English</span>
      </div>
    </div>
  </div>
));

export default class Header2 extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" },
      showAdminBoard: false,
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "./" });
    else
      this.setState({
        currentUser: currentUser,
        userReady: true,
        showAdminBoard: currentUser.roles.includes("ROLE_ADMIN"),
      });

    EventBus.on("logout", () => {
      this.logOut();
    });
  }

  componentWillUnmount() {
    EventBus.remove("logout");
  }

  logOut() {
    AuthService.logout();
    this.setState({
      showAdminBoard: false,
      currentUser: undefined,
    });
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />;
    }

    const { currentUser } = this.state;

    return (
      <>
        <div className="header dashboard">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <nav className="navbar navbar-expand-lg navbar-light px-0 justify-content-between">
                  <Link className="navbar-brand" to={"./account-overview"}>
                    <img src={require("./../../images/logo.png")} alt="" />
                  </Link>

                  <div className="header-right d-flex my-2 align-items-center">
                    <div className="language">
                      <Dropdown>
                        <Dropdown.Toggle as={LanguageToggle} />
                        <Dropdown.Menu size="sm" title="">
                          <Link to={"#"} className="dropdown-item">
                            <i className="flag-icon flag-icon-nl"></i> Dutch
                          </Link>
                          <Link to={"#"} className="dropdown-item">
                            <i className="flag-icon flag-icon-fr"></i> French
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                    <div className="dashboard_log">
                      <Dropdown className="profile_log">
                        <Dropdown.Toggle as={ProfileToggle} />
                        <Dropdown.Menu size="sm" title="">
                          <div className="user-email">
                            <div className="user">
                              <span className="thumb">
                                <i className="mdi mdi-account"></i>
                              </span>
                              <div className="user-info">
                                <h6>Fabian de Mortier</h6>
                                <span>{currentUser.email}</span>
                              </div>
                            </div>
                          </div>

                          <div className="user-balance">
                            <div className="available">
                              <p>Available</p>
                              <span>0.00 USD</span>
                            </div>
                            <div className="total">
                              <p>Total</p>
                              <span>0.00 USD</span>
                            </div>
                          </div>

                          <Link
                            to={"./account-overview"}
                            className="dropdown-item"
                          >
                            <i className="mdi mdi-account"></i> Account
                          </Link>
                          <Link to={"./data-tbi"} className="dropdown-item">
                            <i className="mdi mdi-history"></i> History
                          </Link>
                          <Link to={"./settings"} className="dropdown-item">
                            <i className="mdi mdi-settings"></i> Setting
                          </Link>
                          <Link to={"./lock"} className="dropdown-item">
                            <i className="mdi mdi-lock"></i> Lock
                          </Link>
                          <Link
                            to={"./"}
                            className="dropdown-item logout"
                            onClick={this.logOut}
                          >
                            <i className="mdi mdi-logout"></i> Logout
                          </Link>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
