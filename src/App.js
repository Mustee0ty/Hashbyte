import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

//import pages
import OnboardingScreen from './Pages/OnboardingScreen.js';
import Home from './Pages/Home.js';
import Upgrade from './Pages/Upgrade.js';
import Test from './Pages/Test.js';
import WalletAd from './Pages/WalletAd.js';
import Wallet from './Pages/Wallet.js';

// import Components
import Setting from './Component/Setting.js';
import Switcher from './Component/Switcher';
import Slider from './Component/Slider';
import SendRecieveDrawer from './Component/SendRecieveDrawer'




const App = () => {
  return(
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
            {/* <Slider /> */}
            <SendRecieveDrawer />
          </Route>
        </Switch>
      </div>
    </Router>
  )
};

export default App;
