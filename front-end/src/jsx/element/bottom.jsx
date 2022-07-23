import React from "react";
import { Link } from "react-router-dom";

function Bottom() {
  return (
    <>
      <div className="bottom section-padding">
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="bottom-logo">
                <img
                  className="pb-3"
                  src={require("../../images/logo.png")}
                  alt=""
                  width="140"
                />
                <p>Easing merchandise trade across the world.</p>
                <div><b>VIDIREN S.A.</b><br/>
                Avenue Louise 54,<br/>
                1060 Brussels, Belgium</div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Company</h4>
                <ul>
                  <li>
                    <Link to={"#"}>About</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Careers</Link>
                  </li>
                  <li>
                    <Link to={"/demo"}>Affiliates</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Our Partners</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Support</h4>
                <ul>
                  <li>
                    <Link to={"#"}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={"#"}>FAQ</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Documentation</Link>
                  </li>
                  <li>
                    <Link to={"#"}>Blog</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6">
              <div className="bottom-widget">
                <h4 className="widget-title">Term & Condition</h4>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <ul>
                      <li>
                        <Link to={"#"}>GDPR & Privacy Terms</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Website Terms of Use</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Currencycloud Terms</Link>
                      </li>
                      <li>
                        <Link to={"#"}>Other Terms</Link>
                      </li>
                    </ul>
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                    <ul>
                      <li>
                        <Link to={"#"}>EUR to USDT</Link>
                      </li>
                      <li>
                        <Link to={"#"}>EUR to USDC</Link>
                      </li>
                      <li>
                        <Link to={"#"}>EUR to BTC</Link>
                      </li>
                      <li>
                        <Link to={"#"}>EUR to CHF</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div><br/>Payment services for Vidi FX are provided by The Currency Cloud Limited. Registered in England No. 06323311. Registered Office: Stewardship Building 1st Floor, 12 Steward Street London E1 6FQ. The Currency Cloud Limited is authorised by the Financial Conduct Authority under the Electronic Money Regulations 2011 for the issuing of electronic money (FRN: 900199)</div>
        </div>
      </div>
    </>
  );
}

export default Bottom;
