import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";

const fx = <Tooltip id="fx">FX</Tooltip>;
const payments = <Tooltip id="payments">Payments</Tooltip>;
const accounts = <Tooltip id="accounts">Accounts</Tooltip>;
// const data = (
//     <Tooltip id="data">
//         Data
//     </Tooltip>
// );
const settings = <Tooltip id="settings">Setting</Tooltip>;

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="menu">
          <ul>
            <li>
              <Link to={"./account-overview"} activeClassName="active">
                <OverlayTrigger placement="right" overlay={accounts}>
                  <span>
                    <i className="mdi mdi-bank"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>

            <li>
              <Link to={"./payments"} activeClassName="active">
                <OverlayTrigger placement="right" overlay={payments}>
                  <span>
                    <i className="mdi mdi-format-horizontal-align-right"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>
            <li>
              <Link to={"./fx"} activeClassName="active">
                <OverlayTrigger placement="right" overlay={fx}>
                  <span>
                    <i className="mdi mdi-tumblr-reblog"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>

            {/* <li>
              <Link to={"./data-tbi"} activeClassName="active">
                <OverlayTrigger placement="right" overlay={data}>
                  <span>
                    <i className="mdi mdi-database"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li> */}
            <li>
              <Link to={"./settings"} activeClassName="active">
                <OverlayTrigger placement="right" overlay={settings}>
                  <span>
                    <i className="mdi mdi-settings"></i>
                  </span>
                </OverlayTrigger>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
