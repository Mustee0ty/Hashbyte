import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

//import pages
import OnboardingScreen from "./Pages/OnboardingScreen.js"
import Home from "./Pages/Home.js"
import Upgrade from "./Pages/Upgrade.js"
import Test from "./Pages/Test.js"
import WalletAd from "./Pages/WalletAd.js"
import Wallet from "./Pages/Wallet.js"
import Login from "./Pages/Login.js"
import Withdrawal from "./Pages/Withdrawal.js"
import Verification from "./Pages/Verification.js"
import MiningWallet from "./Pages/MiningWallet.js"
import MobileTopUp from "./Pages/MobileTopUp.js"
import Profile from "./Pages/Profile.js"
import MarketPlace from "./Pages/MarketPlace.js"
import Profitability from "./Pages/Profitability.js"
import Swap from "./Pages/Swap.js"
import Activity from "./Pages/Activity.js"

// import Components
import Setting from "./Component/Setting.js"
import Switcher from "./Component/Switcher"
import Slide from "./Component/Slide"
import SendRecieveDrawer from "./Component/SendRecieveDrawer"
import ShareQRcode from "./Component/ShareQRcode.js"
import WithdrawSuccess from "./Component/WithdrawSuccess.js"
import Nav from "./Component/Nav.js"
import Notification from "./Component/Notification.js"
import OrderSuccessful from "./Component/OrderSuccessful.js"
import ConfirmPurcase from "./Component/ConfirmPurchase.js"
import ActivitiesChart from "./Component/ActivitiesChart.js"
import Settings from "./Component/Setting.js"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={OnboardingScreen} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/upgrade" component={Upgrade} />
          <Route exact path="/walletAd" component={WalletAd} />
          <Route exact path="/wallet" component={Wallet} />
          <Route exact path="/withdraw" component={Withdrawal} />
          <Route exact path="/miningWallet" component={MiningWallet} />
          <Route exact path="/swap" component={Swap} />
          <Route exact path="/activity" component={Activity} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/notification" component={Notification} />
          <Route exact path="/profitability" component={Profitability} />
          <Route exact path="/marketPlace" component={MarketPlace} />
          <Route exact path="/mobileTopUp" component={MobileTopUp} />
          <Route exact path="/ActivitiesChart" component={ActivitiesChart} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
