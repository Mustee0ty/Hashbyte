import React from "react"

//import Component
import Switcher from "./Component/Switcher"

//import Images
import ProfilePic from "./assets/profilepic.png"
import WalletHero from "./assets/walletHeroImg.png"
import QrCode from "./assets/QrCode.png"
import SSDImage from "./assets/marketImage.png"
import TetherLogo from "./assets/TetherIcon.png"

//import Svgs
import WalElipse from "./assets/CircularWalletThing.svg"
import ENG from "./assets/EN.svg"
import USD from "./assets/USD.svg"

//Nav icons
import Home from "./assets/NavIcons/Home.svg"
import Profitability from "./assets/NavIcons/Percentage.svg"
import WalletIcon from "./assets/NavIcons/Wallet.svg"
import ExchangeIcon from "./assets/NavIcons/Exchange.svg"
import Activity from "./assets/NavIcons/Activity.svg"
import MobileIcon from "./assets/MobileIcon.svg"
import MarketPlaceIcon from "./assets/MarketPlaceIcon.svg"
import PadlockIcon from "./assets/PadlockIcon.svg"
import ThumbPrinticon from "./assets/ThumbPrinticon.svg"
import NotificationIcon from "./assets/NotificationIcon.svg"
import WorldIcon from "./assets/WorldIcon.svg"
import CurrencyIcon from "./assets/CurrencyIcon.svg"
import SunIcon from "./assets/SunIcon.svg"

// cypto SliderSVGs
import BitcoinLogo from "./assets/BitcoinLogo.png"
import BNBLogo from "./assets/BNBLogo.png"

export const HomeData = [
  {
    id: 1,
    processingPower: "72.40",
    activeComputers: "0/4",
    inactiveComputers: "0/4",
    upComingPayTime: "9d : 09h : 59m : 23s",
    maintenanceFees: "-$65",
    bitcoinAmount: "$48945.89",
    bnbAmount: "$230.89",
    rate: "+45.90%",
    estWeeklyIncome: "$230.89",
    estMonthlyIncome: "230.89",
    estYearlyIncome: "3230.89",
  },
]

export const computerList = [
  {
    id: 1,
    url: "/",
    text: "computer one",
  },
  {
    id: 2,
    url: "/",
    text: "computer two",
  },
  {
    id: 3,
    url: "/",
    text: "computer three",
  },
]

export const QualityList = [
  {
    id: 1,
    url: "/",
    text: "Quality one",
  },
  {
    id: 2,
    url: "/",
    text: "Quality two",
  },
  {
    id: 3,
    url: "/",
    text: "Quality three",
  },
]

export const WalletAdSlider = [
  {
    id: 1,
    image: WalletHero,
    url: "",
    heading: "Lov k rvnrnivirvnriv",
    Subtitle: "veieivhdu7rgv",
  },
  {
    id: 2,
    image: WalletHero,
    url: "",
    heading: "Lov k rvnrnivirvnriv",
    Subtitle: "veieivhdu7rgv",
  },
  {
    id: 3,
    image: WalletHero,
    url: "",
    heading: "Lov k rvnrnivirvnriv",
    Subtitle: "veieivhdu7rgv",
  },
]

export const Profileinfo = [
  {
    id: 1,
    name: "Abdul Rasheed",
    email: "abdulrasheed@gmail.com",
    profilepic: ProfilePic,
    memberShip: "July 2018",
    withdrawn: "$230.89",
    dailyIncome: "$34",
  },
]

export const UtilitiesList = [
  {
    id: 1,
    icon: MobileIcon,
    text: "Mobile Top Up",
    url: "/mobileTopUp",
  },
  {
    id: 2,
    icon: MarketPlaceIcon,
    text: "Market Place",
    url: "/marketPlace",
  },
]

export const SettingsList = [
  {
    id: 1,
    heading: "Security",
    icon1: PadlockIcon,
    icon2: ThumbPrinticon,
    icon3: NotificationIcon,
    text1: "Setup Pin",
    text2: "Login with fingerprint",
    text3: "Notification",
    switch1: false,
    switch2: true,
    switch3: true,
  },
  {
    id: 2,
    heading: "Others",
    icon1: WorldIcon,
    icon2: CurrencyIcon,
    icon3: SunIcon,
    text1: "Languages",
    text2: "Currency",
    text3: "Dark Mode",
    switch1: false,
    switch2: false,
    switch3: true,
    Languages: true,
    Currency: true,
    Lang: ENG,
    Curr: USD,
  },
]

export const WalletSlides = [
  {
    id: 1,
    heading: "Do more with HashByte",
    subtitle: "Shop, Pay for Utilities",
    image: WalletHero,
  },
  {
    id: 2,
    heading: "nvrnvi ncienwgr",
    subtitle: "Shop, Pay for Utilities",
    image: WalletHero,
  },
  {
    id: 3,
    heading: "Yada mada tata",
    subtitle: "Shop, Pay for Utilities",
    image: WalletHero,
  },
]

export const SendRecievePopUp = [
  {
    id: 1,
    amount: "$345,78.90",
    text: "Total amount earned",
  },
  {
    id: 2,
    amount: "$345,78.90",
    text: "Total amount withdrawn",
  },
]

export const OtherWallets = [
  {
    id: 1,
    amount: "$345,78.90",
    acctInfo: "Withdrawable",
    background: "bg-#356AF3",
    icon: WalElipse,
  },
  {
    id: 1,
    amount: "$345,78.90",
    acctInfo: "Withdrawable",
    background: "bg-#F18455",
    icon: WalElipse,
  },
]

export const QRDetails = [
  {
    id: 1,
    qrImage: QrCode,
    qrAddress: "btcehg453hd344j4ffhdgdjd",
  },
]

export const WithdrawSuccessDetails = [
  {
    id: 1,
    amount: "$567.90",
    Address: "tdgfdgfsffshjs354",
    cryptoAmount: "0.56",
    cryptoCurrency: "BTC",
    date: "4 july 2022, 3.30am",
  },
]

export const NavIcons = [
  {
    id: 1,
    icon: Home,
    url: "/Home",
  },
  {
    id: 2,
    icon: Profitability,
    url: "/Profitability",
  },
  {
    id: 3,
    icon: WalletIcon,
    url: "/Wallet",
  },
  {
    id: 4,
    icon: Activity,
    url: "/Activity",
  },
  {
    id: 5,
    icon: ExchangeIcon,
    url: "/swap",
  },
]

export const cryptoSlides = [
  {
    id: 1,
    logo: BitcoinLogo,
    cryptoCurrency: "Bitcoin(BTC)",
    cryptoName: "Bitcoin",
    amount: "$48945.89",
    color: "#5B63E6",
    cryptoSub: "BTC",
  },
  {
    id: 2,
    logo: BNBLogo,
    cryptoCurrency: "Binance(BNB)",
    cryptoName: "BinanceCoin",
    amount: "$230.89",
    color: "#FFFFFF",
    cryptoSub: "BNB",
  },
  {
    id: 3,
    logo: BNBLogo,
    cryptoCurrency: "NextCrypto",
    cryptoName: "Dogecoin",
    amount: "$435.09",
    color: "#FFFFFF",
    cryptoSub: "DOGE",
  },
]

export const GraphData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Bitcoin Price",
      data: [5000, 6000, 8000, 10000, 12000, 15000],
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
}

export const walletBalance = [
  {
    id: 1,
    balance: "0.8956767 BTC",
    walletType: "Main Balance",
  },
]

export const HistoryData = [
  {
    id: 1,
    coinLogo: BitcoinLogo,
    transactionAmount: "$0.93245",
    time: "5h ago",
    status: "Success",
  },
  {
    id: 2,
    coinLogo: BNBLogo,
    transactionAmount: "$0.93245",
    time: "5h ago",
    status: "Success",
  },
  {
    id: 3,
    coinLogo: BitcoinLogo,
    transactionAmount: "$0.93245",
    time: "5h ago",
    status: "Success",
  },
]

export const amountBubbles = [
  {
    id: 1,
    amount: "50",
  },
  {
    id: 2,
    amount: "100",
  },
  {
    id: 3,
    amount: "200",
  },
  {
    id: 4,
    amount: "1000",
  },
  {
    id: 5,
    amount: "2000",
  },
]

export const notificationData = [
  {
    id: 1,
    heading: "Congratulations",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting,",
    time: "5h ago",
  },
  {
    id: 2,
    heading: "Congratulations",
    text: "lorem ipsum dalo nveiv v ejv e",
    time: "5h ago",
  },
  {
    id: 3,
    heading: "Congratulations",
    text: "lorem ipsum dalo nveiv v ejv e",
    time: "5h ago",
  },
  {
    id: 4,
    heading: "Congratulations",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting,",
    time: "5h ago",
  },
  {
    id: 5,
    heading: "Congratulations",
    text: "It has survived not only five centuries, but also the leap into electronic typesetting,",
    time: "5h ago",
  },
]

export const DeviceList = [
  {
    id: 1,
    text: "Device1",
  },
  {
    id: 2,
    text: "Device2",
  },
  {
    id: 3,
    text: "Device3",
  },
]

export const Elcost = [
  {
    id: 1,
    text: "Cost1",
  },
  {
    id: 2,
    text: "Cost2",
  },
  {
    id: 3,
    text: "Cost3",
  },
]
export const CurrencyList = [
  {
    id: 1,
    text: "Currency1",
  },
  {
    id: 2,
    text: "Currency2",
  },
  {
    id: 3,
    text: "Currency3",
  },
]

export const products = [
  {
    id: 1,
    name: "DDR3 SDRAM",
    price: "10.99",
    image: SSDImage,
    sold: "10",
    cryptoPrice: "0.5678 BTC",
  },
  {
    id: 2,
    name: "Product 1",
    price: "10.99",
    image: SSDImage,
    sold: "10",
    cryptoPrice: "0.5678 BTC",
  },
  {
    id: 3,
    name: "Product 1",
    price: "10.99",
    image: SSDImage,
    sold: "10",
    cryptoPrice: "0.5678 BTC",
  },
  {
    id: 4,
    name: "Product 1",
    price: "10.99",
    image: SSDImage,
    sold: "10",
    cryptoPrice: "0.5678 BTC",
  },
  {
    id: 5,
    name: "Product 1",
    price: "10.99",
    image: SSDImage,
    sold: "10",
    cryptoPrice: "0.5678 BTC",
  },
  {
    id: 6,
    name: "Product 1",
    price: "10.99",
    image: SSDImage,
    sold: "10",
    cryptoPrice: "0.5678 BTC",
  },
]

export const swappables = [
  {
    id: 1,
    swap: "BTC/USDT",
  },
  {
    id: 2,
    swap: "BNB/USDT",
  },
  {
    id: 3,
    swap: "DOGE/USDT",
  },
  {
    id: 4,
    swap: "SOL/USDT",
  },
  {
    id: 5,
    swap: "ETH/USDT",
  },
]

export const swapTime = [
  {
    id: 1,
    time: "12h",
  },
  {
    id: 2,
    time: "1d",
  },
  {
    id: 3,
    time: "1w",
  },
  {
    id: 4,
    time: "1m",
  },
  {
    id: 5,
    time: "6m",
  },
  {
    id: 6,
    time: "All",
  },
]

export const swapHistory = [
  {
    id: 1,
    icon1: BitcoinLogo,
    icon2: TetherLogo,
    transactionAmount: "$0.93245",
    status: true,
    time: "1h",
  },
]

export const ActivitiesNav = [
  {
    id: 1,
    text: "Week",
    url: "/week",
  },
  {
    id: 2,
    text: "Month",
    url: "/Month",
  },
  {
    id: 3,
    text: "Year",
    url: "/Year",
  },
]
