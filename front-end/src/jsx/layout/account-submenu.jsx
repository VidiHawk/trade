import React from "react";
import { Link } from "react-router-dom";

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
          <Link to={"#"} className="nav-link">
            <i className="mdi mdi-account"></i>
            <span>Beneficiaries</span>
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to={"./account-withdraw"} className="nav-link">
            <i className="mdi mdi-pentagon"></i>
            <span>Withdraw</span>
          </Link>
        </li> */}
        {/* <li className="nav-item">
          <Link to={"./account-api"} className="nav-link">
            <i className="mdi mdi-database"></i>
            <span>API</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./account-affiliate"} className="nav-link">
            <i className="mdi mdi-diamond"></i>
            <span>Affiliate</span>
          </Link>
        </li> */}
      </ul>
    </>
  );
}

export default AccountSubmenu;
