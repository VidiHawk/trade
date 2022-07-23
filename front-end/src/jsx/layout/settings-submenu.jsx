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
        <span>Export CSV</span>
      </Link>
    </div>
  </div>
));

function SettingsSubmenu() {
  return (
    <>
      <ul className="d-flex">
        <li className="nav-item">
          <Link to={"./settings"} className="nav-link">
            <i className="mdi mdi-account-settings-variant"></i>
            <span>Edit Profile</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./settings-preferences"} className="nav-link">
            <i className="mdi mdi-settings"></i>
            <span>Preferences</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./settings-security"} className="nav-link">
            <i className="mdi mdi-lock"></i>
            <span>Security</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link to={"./settings-account"} className="nav-link">
            <i className="mdi mdi-bank"></i>
            <span>Linked Account</span>
          </Link>
        </li>
        <li className="nav-item dropdown">
          <Dropdown>
            <Dropdown.Toggle as={ExportToggle} />
            <Dropdown.Menu size="sm" title="">
              <Link className="dropdown-item py-2" to={"./data-last-price"}>
                Last Price
              </Link>
              <Link className="dropdown-item py-2" to={"./data-index-price"}>
                Index Price
              </Link>
              <Link className="dropdown-item pt-2" to={"./data-mark-price"}>
                Mark Price
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </li>
      </ul>
    </>
  );
}

export default SettingsSubmenu;
