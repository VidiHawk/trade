import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const ExportToggle = React.forwardRef(({ children, onClick }, ref) => (
  <div
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <div className="nav-item">
      <Link
        to={"#"}
        className="nav-link  dropdown-toggle"
        data-toggle="dropdown"
      >
        <i className="mdi mdi-file-export"></i>
        <span>Export Statements</span>
      </Link>
    </div>
  </div>
));

function AccountSubmenu() {
  return (
    <>
      <ul className="d-flex">
        <li className="nav-item">
          <Link to={"./account-overview"} className="nav-link">
            <i className="mdi mdi-bank"></i>
            <span>Overview</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./account-deposit"} className="nav-link">
            <i className="mdi mdi-format-align-justify"></i>
            <span>Account Details</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./beneficiaries"} className="nav-link">
            <i className="mdi mdi-account"></i>
            <span>Beneficiaries</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Toggle as={ExportToggle} />
            <Dropdown.Menu size="sm" title="">
              <Link className="dropdown-item py-2" to={"#"}>
                2022
              </Link>
              <Link className="dropdown-item py-2" to={"#"}>
                2021
              </Link>
              <Link className="dropdown-item pt-2" to={"#"}>
                2020
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </>
  );
}

export default AccountSubmenu;
