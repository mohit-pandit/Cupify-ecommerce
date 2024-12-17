import './assets/css/App.css';
import './assets/css/skin-and-color.css';
import './assets/css/theme-custom.css';
import './assets/css/theme-default.css';
import './assets/css/theme-responsive.css';
import './assets/css/timber.scss.css';
import { Home } from "./Pages/Home";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetails } from './Pages/ProductDetails/ProductDetails';
import { CheckoutItem } from './Pages/Checkout/CheckoutItem';
import { Footer } from './components/Footer'
import { ConfirmationDetails } from './Pages/ThankyouPage/ConfirmationDetails';
import { Tracking } from './Pages/ProductTracking/Tracking';
import { ContactUs } from './Pages/ContactUs/ContactUs';
import { AboutUs } from './Pages/AboutUs';
import ScrollToTop from './ScrollToTop';
import { MyCart } from './Pages/MyCart.js/MyCart';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* // Scroll smoothly on every routes changes */}
      <Header />
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route path="/item-details" exact="true" element={<ProductDetails />}></Route>
        <Route path="/item-checkout" exact="true" element={<CheckoutItem />}></Route>
        <Route path="/OrderConfirmation" exact="true" element={<ConfirmationDetails />}></Route>
        <Route path="/OrderTracking" exact="true" element={<Tracking />}></Route>
        <Route path="/Contact-Us" exact="true" element={<ContactUs />}></Route>
        <Route path="/About-Us" exact="true" element={<AboutUs />}></Route>
        <Route path="/My-Cart" exact="true" element={<MyCart />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
