import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { history } from "../helpers/history";

import Homepage from "./pages/index";
import FX from "./pages/fx";
import Payments from "./pages/payments";
import Settings from "./pages/settings";
import AccountDeposit from "./pages/account-deposit";
import AccountOverview from "./pages/account-overview";
import BankAcc from "./pages/add-beneficiary";
import DebitCard from "./pages/add-debit-card";
import Demo from "./pages/demo";
import Lock from "./pages/lock";
import Otp1 from "./pages/otp-1";
import Otp2 from "./pages/otp-2";
import Reset from "./pages/reset";
import SettingAccount from "./pages/settings-account";
import Preferences from "./pages/settings-preferences";
import Security from "./pages/settings-security";
import Signin from "./pages/signin";
import Signup from "./pages/signup";
import VerifyStep1 from "./pages/verify-step-1";
import VerifyStep2 from "./pages/verify-step-2";
import VerifyStep3 from "./pages/verify-step-3";
import VerifyStep4 from "./pages/verify-step-4";
import VerifyStep5 from "./pages/verify-step-5";
import VerifyStep6 from "./pages/verify-step-6";
import AccountAffiliate from "./pages/account-affiliate";
// import AccountApi from "./pages-optional/account-api";
import { clearMessage } from "../actions/message";
import Home from "../components/home.component";
import Login from "../components/login.component";
import Register from "../components/register.component";
import Profile from "../components/profile.component";
import BoardUser from "../components/board-user.component";
import BoardModerator from "../components/board-moderator.component";
import BoardAdmin from "../components/board-admin.component";

class Index extends Component {
  constructor(props) {
    super(props);
    history.listen((location) => {
      props.dispatch(clearMessage()); // clear message when changing location
    });
  }

  render() {
    return (
      <>
        <Router history={history}>
          {/* <BrowserRouter> */}
          {/* note: using BrowserRouter might be more efficient than using Router */}
          <div id="main-wrapper">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/fx" component={FX} />
              <Route path="/payments" component={Payments} />
              <Route path="/account-overview" component={AccountOverview} />
              <Route path="/settings" component={Settings} />
              <Route path="/account-deposit" component={AccountDeposit} />
              <Route path="/add-beneficiary" component={BankAcc} />
              <Route path="/add-debit-card" component={DebitCard} />
              <Route path="/demo" component={Demo} />
              <Route path="/lock" component={Lock} />
              <Route path="/otp-1" component={Otp1} />
              <Route path="/otp-2" component={Otp2} />
              <Route path="/reset" component={Reset} />
              <Route path="/settings-account" component={SettingAccount} />
              <Route path="/settings-preferences" component={Preferences} />
              <Route path="/settings-security" component={Security} />
              <Route path="/signin" component={Signin} />
              <Route path="/signup" component={Signup} />
              <Route path="/verify-step-1" component={VerifyStep1} />
              <Route path="/verify-step-2" component={VerifyStep2} />
              <Route path="/verify-step-3" component={VerifyStep3} />
              <Route path="/verify-step-4" component={VerifyStep4} />
              <Route path="/verify-step-5" component={VerifyStep5} />
              <Route path="/verify-step-6" component={VerifyStep6} />

              <Route path="/account-affiliate" component={AccountAffiliate} />
              {/* <Route path="/account-api" component={AccountApi} /> */}

              <Route exact path={["/home"]} component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/mod" component={BoardModerator} />
              <Route path="/admin" component={BoardAdmin} />
            </Switch>
          </div>
          {/* </BrowserRouter> */}
        </Router>
      </>
    );
  }
}

export default Index;
