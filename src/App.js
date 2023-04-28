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

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {/* <OnboardingScreen /> */}
            {/* <Upgrade /> */}
            {/* <Home /> */}
            {/* <Test /> */}
            {/* <WalletAd /> */}
            {/* <Setting /> */}
            {/* <Wallet /> */}
            {/* <Switcher /> */}
            {/* <Slide /> */}
            {/* <SendRecieveDrawer /> */}
            {/* <ShareQRcode /> */}
            {/* <WithdrawSuccess /> */}
            {/* <Withdrawal /> */}
            {/* <Nav /> */}
            {/* <Login /> */}
            {/* <Verification /> */}
            {/* <MiningWallet /> */}
            {/* <Notification /> */}
            {/* <Profitability /> */}
            {/* <MobileTopUp /> */}
            {/* <Profile /> */}
            <MarketPlace />
            {/* <OrderSuccessful /> */}
            {/* <ConfirmPurcase /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
