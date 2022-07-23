import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import ScrollspyNav from "react-scrollspy-nav";

function Header1() {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="row">
            <div className="col-xl-12">
              <div className="navigation">
                <Navbar bg="light" expand="lg">
                  <Link className="navbar-brand" to={"/"}>
                    <img src={require("./../../images/logo.png")} alt="" />
                  </Link>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse>
                    <ScrollspyNav
                      scrollTargetIds={[
                        "payments",
                        "fx",
                        "accounts",
                        "pricing",
                        "platform",
                        "contact",
                      ]}
                      offset={100}
                      activeNavclassName="active"
                      scrollDuration="1000"
                      headerBackground="true"
                    >
                      <Nav className="ms-auto">
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#payments">
                            Payments
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#fx">
                            FX
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#accounts">
                            Accounts{" "}
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#pricing">
                            Pricing
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#platform">
                            Platform
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link className="nav-Nav.link" href="#contact">
                            Contact
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                    </ScrollspyNav>
                  </Navbar.Collapse>

                  <div className="signin-btn">
                    <Link to={"./account-overview"}>Dashboard</Link>
                    <Link className="btn btn-primary ms-3" to={"/signin"}>
                      Sign in
                    </Link>
                  </div>
                </Navbar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header1;
