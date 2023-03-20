import React from "react";

//import Component
import Switcher from './Component/Switcher'

//import Images
import ProfilePic from './assets/profilepic.png';
import WalletHero from './assets/walletHeroImg.png'
import QrCode from './assets/QrCode.png'

//import Svgs
import WalElipse from './assets/CircularWalletThing.svg'
import ENG from './assets/EN.svg'
import USD from './assets/USD.svg'

//Nav icons
import Home from './assets/NavIcons/Home.svg'
import Profitability from './assets/NavIcons/Percentage.svg'
import WalletIcon from './assets/NavIcons/Wallet.svg'
import ExchangeIcon from './assets/NavIcons/Exchange.svg'
import Activity from './assets/NavIcons/Activity.svg'
import MobileIcon from './assets/MobileIcon.svg';
import MarketPlaceIcon from './assets/MarketPlaceIcon.svg';
import PadlockIcon from './assets/PadlockIcon.svg';
import ThumbPrinticon from './assets/ThumbPrinticon.svg';
import NotificationIcon from './assets/NotificationIcon.svg';
import WorldIcon from './assets/WorldIcon.svg'
import CurrencyIcon from './assets/CurrencyIcon.svg'
import SunIcon from './assets/SunIcon.svg'

export const computerList = [
  {
    id:1,
    url:'/',
    text:'computer one',
  },
  {
    id:2,
    url:'/',
    text:'computer two',
  },
  {
    id:3,
    url:'/',
    text:'computer three',
  },
]

export const QualityList = [
  {
    id:1,
    url:'/',
    text:'Quality one',
  },
  {
    id:2,
    url:'/',
    text:'Quality two',
  },
  {
    id:3,
    url:'/',
    text:'Quality three',
  },
]

export const WalletAdSlider = [
  {
    id:1,
    image:WalletHero,
    url:'',
    heading:'Lov k rvnrnivirvnriv',
    Subtitle:'veieivhdu7rgv',
  },
  {
    id:2,
    image:WalletHero,
    url:'',
    heading:'Lov k rvnrnivirvnriv',
    Subtitle:'veieivhdu7rgv',
  },
  {
    id:3,
    image:WalletHero,
    url:'',
    heading:'Lov k rvnrnivirvnriv',
    Subtitle:'veieivhdu7rgv',
  },
]

export const profileinfo = [
  {
    id:1,
    name: 'Abdul Rasheed',
    email: 'abdulrasheed@gmail.com',
    profilepic: ProfilePic,
  }
]

export const SettingsList = [
  {
    id:1,
    heading:'Utilities',
    icon1:MobileIcon,
    icon2:MarketPlaceIcon,
    text1:'Mobile Top Up',
    text2:'Market Place',
    switch1:false,
    switch2:false,
  },
  {
    id:2,
    heading:'Security',
    icon1:PadlockIcon,
    icon2:ThumbPrinticon,
    icon3:NotificationIcon,
    text1:'Setup Pin',
    text2:'Login with fingerprint',
    text3:'Notification',
    switch1:false,
    switch2:true,
    switch3:true,
  },
  {
    id:3,
    heading:'Others',
    icon1:WorldIcon,
    icon2:CurrencyIcon,
    icon3:SunIcon,
    text1:'Languages',
    text2:'Currency',
    text3:'Dark Mode',
    switch1:false,
    switch2:false,
    switch3:true,
    Languages:true,
    Currency:true,
    Lang:ENG,
    Curr:USD,
  },
]

export const WalletSlides = [
  {
    id:1,
    heading:'Do more with HashByte',
    subtitle:'Shop, Pay for Utilities',
    image: WalletHero,
  },
  {
    id:2,
    heading:'nvrnvi ncienwgr',
    subtitle:'Shop, Pay for Utilities',
    image: WalletHero,
  },
  {
    id:3,
    heading:'Yada mada tata',
    subtitle:'Shop, Pay for Utilities',
    image: WalletHero,
  },
]

export const SendRecievePopUp = [
  {
    id:1,
    amount: '$345,78.90',
    text:'Total amount earned',
  },
  {
    id:2,
    amount: '$345,78.90',
    text:'Total amount withdrawn',
  },
]

export const OtherWallets = [
    {
      id:1,
      amount:'$345,78.90',
      acctInfo: 'Withdrawable',
      background: '#356AF3',
      icon: WalElipse,
    },
    {
      id:1,
      amount:'$345,78.90',
      acctInfo: 'Withdrawable',
      background: '#F18455',
      icon: WalElipse,
    },
]

export const  QRDetails = [
  {
    id:1,
    qrImage:QrCode,
    qrAddress:'btcehg453hd344j4ffhdgdjd',
  }
]

export const WithdrawSuccessDetails = [
  {
    id:1,
    amount: '$567.90',
    Address: 'tdgfdgfsffshjs354',
    cryptoAmount: '0.56',
    cryptoCurrency: 'BTC',
    date:'4 july 2022, 3.30am'
  },
]

export const NavIcons = [
  {
    id:1,
    icon:Home,
    url:'/Home',
  },
  {
    id:2,
    icon:Profitability,
    url:'/Profitability',
  },
  {
    id:3,
    icon:WalletIcon,
    url:'/Wallet',
  },
  {
    id:4,
    icon: Activity,
    url:'/Activity',
  },
  {
    id:5,
    icon:ExchangeIcon,
    url:'/Exchange',
  },
]