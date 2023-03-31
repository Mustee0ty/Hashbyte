import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import pages
import OnboardingScreen from './Pages/OnboardingScreen.js';
import Home from './Pages/Home.js';
import Upgrade from './Pages/Upgrade.js';
import Test from './Pages/Test.js';
import WalletAd from './Pages/WalletAd.js';
import Wallet from './Pages/Wallet.js';
import Login from './Pages/Login.js';

// import Components
import Setting from './Component/Setting.js';
import Switcher from './Component/Switcher';
import Slide from './Component/Slide';
import SendRecieveDrawer from './Component/SendRecieveDrawer'
import ShareQRcode from './Component/ShareQRcode.js';
import WithdrawSuccess from './Component/WithdrawSuccess.js';
import Nav from './Component/Nav.js';




const App = () => {
  return(
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            {/* <OnboardingScreen /> */}
            {/* <Upgrade /> */}
            <Home />
            {/* <Test /> */}
            {/* <WalletAd /> */}
            {/* <Setting /> */}
            {/* <Wallet /> */}
            {/* <Switcher /> */}
            {/* <Slide /> */}
            {/* <SendRecieveDrawer /> */}
            {/* <ShareQRcode /> */}
            {/* <WithdrawSuccess /> */}
            {/* <Nav /> */}
            {/* <Login /> */}
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
