// import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import './skin-and-color.css';
import './theme-custom.css';
import './theme-default.css';
import './theme-responsive.css';
import './timber.scss.css';
import { Home } from "./Pages/Home";
import { Header } from "./components/Header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ProductDetails } from './Pages/ProductDetails/ProductDetails';
import { CheckoutItem } from './Pages/Checkout/CheckoutItem';
import { Footer } from './components/Footer'
import { ConfirmationDetails } from './Pages/ThankyouPage/ConfirmationDetails';
import { Tracking } from './Pages/ProductTracking/Tracking';
// import 'swiper/swiper-bundle.min.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact="true" element={<Home />}></Route>
        <Route path="/item-details" exact="true" element={<ProductDetails />}></Route>
        <Route path="/item-checkout" exact="true" element={<CheckoutItem />}></Route>
        <Route path="/OrderConfirmation" exact="true" element={<ConfirmationDetails />}></Route>
        <Route path="/OrderTracking" exact="true" element={<Tracking />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>


  );
}

export default App;
