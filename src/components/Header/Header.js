import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <div id="shopify-section-header_2" className="shopify-section">
       <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
          " Find Your Perfect Flavour with <b> Cupify,</b> Where Every Cup Tells a Story "
          </p>
        </div>
      </div>
      <header className="header_area header_two" id="section-header_2" data-section="HeaderSections">
        {/* <!--header middel start--> */}
        <div className="header_middel">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-2 col-md-3">
                <div className="logo">
                  <a href="/" className="theme-logo">
                    <img src="assets/logo/cupify-logo.png" alt="Cupify Logo"/>
                  </a></div>
              </div>
              <div className="col-lg-10 col-md-9">
                <div className="middel_right">


                  <div className="search_btn">
                    <form action="/search" method="get" className="input-group search-bar" role="search" style={{"position": "relative"}}>

                      <input type="search" name="q" value="" placeholder="Search our store" aria-label="Search our store" autocomplete="off"/>
                        <button type="submit"><SearchIcon/></button>
                        <ul className="search-results home-two" style={{"position": "absolute", "left": "0px", "top": "43px", "display": "none"}}></ul></form>
                  </div>


                  <div className="box_setting">
                    <a href="javascript:void(0)"><SettingsIcon/></a>
                    <div className="dropdown_setting">
                      <ul>
                        <li><Link to="/item-checkout">Checkout</Link></li>
                        <li><a href="/account">My Account</a></li>
                        <li><Link to="/item-checkout">Cart</Link></li>
                        <li><a href="/account/login">Login</a></li>
                      </ul>
                    </div>
                  </div>


                  <div className="cart_link">
                    <Link to="/item-checkout">                        <ShoppingCartIcon/>
                    <span className="shopping-cart__total mx-2"><span className="money" >₹ 460.00</span></span><ArrowDropDownIcon/></Link><span className="cart_quantity bigcounter">0</span>
                    {/* <!--mini cart--> */}

                    <div className="mini_cart">
                      <div className="mini_cart_inner cart-empty-title" style={{"display":"block;"}}>
                        <h3>Your cart is currently empty.</h3>
                      </div>
                      <div className="mini_cart_inner single-product-cart" style={{"display":"none;"}}>
                        <div className="single-cart-item-loop">
                        </div>
                        <div className="cart_total" style={{"display":"none;"}}>
                          <span>Total:</span>
                          <span className="shopping-cart__total"><span className="money" >₹ 460.00</span></span>
                        </div>
                      </div>
                      <div className="single-product-cart mini_cart_footer" style={{"display":"none;"}}>
                        <div className="cart_button view_cart">
                          <Link to="/item-checkout">View Cart</Link>
                        </div>
                        <div className="cart_button checkout">
                          <Link to="/item-checkout">Checkout</Link>
                        </div>

                      </div>
                    </div>
                    {/* <!--mini cart end--> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!--header middel end--> */}

      </header>
    </div>
  )
}
