import React from 'react'
import { Link } from 'react-router-dom'
import { CityDropdown } from '../CityDropdown'
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SettingsIcon from '@mui/icons-material/Settings';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Navbar } from './Navbar';

export const Header = () => {
  return (
    <div id="shopify-section-header_2" className="shopify-section">
       <div className="top-strip bg-blue">
        <div className="container">
          <p className="mb-0 mt-0 text-center">
            Due to the <b>COVID 19</b> epidemic, orders may be processed with a slight delay
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
                        <li><a href="/checkout">Checkout</a></li>
                        <li><a href="/account">My Account</a></li>
                        <li><a href="/pages/wishlist">Wishlist</a></li>
                        <li><a href="/cart">Cart</a></li>
                        <li><a href="/account/login">Login</a></li>
                      </ul>
                    </div>
                  </div>


                  <div className="cart_link">
                    <a href="/cart">                        <ShoppingCartIcon/>
                    <span className="shopping-cart__total mx-2"><span className="money" data-currency-usd="$0.00">$0.00</span></span><ArrowDropDownIcon/></a><span className="cart_quantity bigcounter">0</span>
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
                          <span className="shopping-cart__total"><span className="money" data-currency-usd="$0.00">$0.00</span></span>
                        </div>
                      </div>
                      <div className="single-product-cart mini_cart_footer" style={{"display":"none;"}}>
                        <div className="cart_button view_cart">
                          <a href="/cart">View Cart</a>
                        </div>
                        <div className="cart_button checkout">
                          <a href="/checkout">Checkout</a>
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

        {/* <!--header bottom satrt--> */}
        <div className="header_bottom sticky-header">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <div className="main_menu_inner">
                  <div className="logo_sticky">

                    <a href="/" className="theme-logo">
                      <img src="//monsta-demo.myshopify.com/cdn/shop/files/logo_150x.png?v=1613772534" alt="Monsta - Jewelry Shopify Theme"/>
                    </a>
                  </div>
                  <div className="main_menu d-none d-lg-block">
                    <nav>
                      <ul>

                        <li className="active"><a href="/">Home <ArrowDropDownIcon/> </a>
                          <ul className="menu-2 sub_menu">
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123812905063">Home Version 1</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123813068903">Home  Version 2</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820802151">Home  Version 3</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820867687">Home  Version 4</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820998759">Home  Version 5</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831517287">Home  Version 6</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831746663">Home  Version 7</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831877735">Home  Version 8</a></li>
                            <li className="sub_menu_li"><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123843248231">Home  Version RTL <span>RTL</span></a></li>
                          </ul>
                        </li>


                        <li><a href="#">Product <span className="sale"> SALE</span> <ArrowDropDownIcon/> </a>
                          <ul className="menu-2 sub_menu">
                            <li className="sub_menu_li"><a href="/products/5-simple-product">Simgle Product</a></li>
                            <li className="sub_menu_li"><a href="/products/3-variable-product">Variable Product</a></li>
                            <li className="sub_menu_li"><a href="/products/7-sample-affiliate-product">Affiliate Product</a></li>
                            <li className="sub_menu_li"><a href="/products/4-soldout-product">Soldout Product</a></li>
                            <li className="sub_menu_li"><a href="/products/8-countdown-product">Countdown Product</a></li>
                            <li className="sub_menu_li"><a href="/products/4-preorder-product">Preorder Product</a></li>
                          </ul>
                        </li>


                        <li className="mega_item"><a href="/collections/all">Shop <span> NEW</span> <ArrowDropDownIcon/> </a>
                          <ul className="menu-2 mega_menu">
                            <li className="mega_dropdown">
                              <a className="mega_title" href="#">Shop Layout</a>
                              <ul>
                                <li><a href="/collections/all">Full Width</a></li>
                                <li><a href="/collections/all">Fullwidth List <span> HOT </span></a></li>
                                <li><a href="/collections/all">Right Sidebar</a></li>
                                <li><a href="/collections/all">Right Sidebar List <span className="sale">sale</span></a></li>
                                <li><a href="/collections/all">List View</a></li>

                              </ul>
                            </li>
                            <li className="mega_dropdown">
                              <a className="mega_title" href="#">Other Pages</a>
                              <ul>

                                <li><a href="/cart">cart</a></li>

                                <li><a href="/checkout">Checkout</a></li>

                                <li><a href="/account">my account</a></li>

                                <li><a href="/pages/wishlist">Wishlist</a></li>

                                <li><a href="/not_found">404 page</a></li>

                              </ul>
                            </li>
                            <li className="mega_dropdown">
                              <a className="mega_title" href="#">Product Type</a>
                              <ul>

                                <li><a href="/products/6-variable-with-soldout-product">Proudct Details</a></li>

                                <li><a href="/products/11-product-with-video">product video</a></li>

                                <li><a href="/products/3-variable-product">product variable</a></li>

                                <li><a href="/products/7-sample-affiliate-product">product affiliate</a></li>

                                <li><a href="/products/8-countdown-product">Product coundown</a></li>

                              </ul>
                            </li>
                          </ul>
                        </li>


                        <li><a href="/blogs/news">Blog <ArrowDropDownIcon/> </a>
                          <ul className="menu-2 sub_menu">
                            <li className="sub_menu_li"><a href="/blogs/news">blog</a></li>
                            <li className="sub_menu_li"><a href="/blogs/news">blog left</a></li>
                            <li className="sub_menu_li"><a href="/blogs/news">blog right</a></li>
                            <li className="sub_menu_li"><a href="/blogs/news/temporibus-autem-quibusdam-3">blog details</a></li>
                          </ul>
                        </li>


                        <li><a href="#">Pages <ArrowDropDownIcon/> </a>
                          <ul className="menu-2 sub_menu">
                            <li className="sub_menu_li"><a href="/pages/about">About Us</a></li>
                            <li className="sub_menu_li"><a href="/pages/contact">contact</a></li>
                            <li className="sub_menu_li"><a href="/cart">cart</a></li>
                            <li className="sub_menu_li"><a href="/pages/wishlist">Wishlist</a></li>
                            <li className="sub_menu_li"><a href="/pages/faq">Frequently Questions</a></li>
                            <li className="sub_menu_li"><a href="/not_found">Error 404</a></li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <div className="mobile-menu d-lg-none mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{"background":"color"}}><span></span><span></span><span></span></a><nav className="mean-nav">
                    <ul style={{"display": "none;"}}>



                      <li className=""><a href="/">Home</a>
                        <ul className="" style={{"display": "none;"}}>



                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123812905063">Home Version 1</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123813068903">Home  Version 2</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820802151">Home  Version 3</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820867687">Home  Version 4</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820998759">Home  Version 5</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831517287">Home  Version 6</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831746663">Home  Version 7</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831877735">Home  Version 8</a></li>




                          <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123843248231">Home  Version RTL <span>RTL</span></a></li>


                        </ul>
                        <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>




                      <li className=""><a href="#">Product <span className="sale"> SALE</span></a>
                        <ul className="" style={{"display": "none;"}}>



                          <li className=""><a href="/products/5-simple-product">Simgle Product</a></li>




                          <li className=""><a href="/products/3-variable-product">Variable Product</a></li>




                          <li className=""><a href="/products/7-sample-affiliate-product">Affiliate Product</a></li>




                          <li className=""><a href="/products/4-soldout-product">Soldout Product</a></li>




                          <li className=""><a href="/products/8-countdown-product">Countdown Product</a></li>




                          <li className=""><a href="/products/4-preorder-product">Preorder Product</a></li>


                        </ul>
                        <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>




                      <li className=""><a href="/collections/all">Shop <span> NEW</span></a>
                        <ul className="" style={{"display": "none;"}}>



                          <li className=""><a className="" href="#">Shop Layout</a>
                            <ul className="" style={{"display": "none;"}}>

                              <li><a href="/collections/all">Full Width</a></li>

                              <li><a href="/collections/all">Fullwidth List <span> HOT </span></a></li>

                              <li><a href="/collections/all">Right Sidebar</a></li>

                              <li><a href="/collections/all">Right Sidebar List <span className="sale">sale</span></a></li>

                              <li><a href="/collections/all">List View</a></li>

                            </ul>
                            <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>




                          <li className=""><a className="" href="#">Other Pages</a>
                            <ul className="" style={{"display": "none;"}}>

                              <li><a href="/cart">cart</a></li>

                              <li><a href="/checkout">Checkout</a></li>

                              <li><a href="/account">my account</a></li>

                              <li><a href="/pages/wishlist">Wishlist</a></li>

                              <li><a href="/not_found">404 page</a></li>

                            </ul>
                            <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>




                          <li className=""><a className="" href="#">Product Type</a>
                            <ul className="" style={{"display": "none;"}}>

                              <li><a href="/products/6-variable-with-soldout-product">Proudct Details</a></li>

                              <li><a href="/products/11-product-with-video">product video</a></li>

                              <li><a href="/products/3-variable-product">product variable</a></li>

                              <li><a href="/products/7-sample-affiliate-product">product affiliate</a></li>

                              <li><a href="/products/8-countdown-product">Product coundown</a></li>

                            </ul>
                            <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>


                        </ul>
                        <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>




                      <li className=""><a href="/blogs/news">Blog</a>
                        <ul className="" style={{"display": "none;"}}>



                          <li className=""><a href="/blogs/news">blog</a></li>




                          <li className=""><a href="/blogs/news">blog left</a></li>




                          <li className=""><a href="/blogs/news">blog right</a></li>




                          <li className=""><a href="/blogs/news/temporibus-autem-quibusdam-3">blog details</a></li>


                        </ul>
                        <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>




                      <li className=""><a href="#">Pages</a>
                        <ul className="" style={{"display": "none;"}}>



                          <li className=""><a href="/pages/about">About Us</a></li>




                          <li className=""><a href="/pages/contact">contact</a></li>




                          <li className=""><a href="/cart">cart</a></li>




                          <li className=""><a href="/pages/wishlist">Wishlist</a></li>




                          <li className=""><a href="/pages/faq">Frequently Questions</a></li>




                          <li className="mean-last"><a href="/not_found">Error 404</a></li>


                        </ul>
                        <a className="mean-expand" href="#" style={{"font-size": "18px"}}>+</a></li>


                    </ul>
                  </nav></div>
                    <div className="mean-push"></div><nav style={{"display": "none;"}}>
                      <ul>



                        <li className=""><a href="/">Home</a>
                          <ul className="">



                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123812905063">Home Version 1</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123813068903">Home  Version 2</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820802151">Home  Version 3</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820867687">Home  Version 4</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123820998759">Home  Version 5</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831517287">Home  Version 6</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831746663">Home  Version 7</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123831877735">Home  Version 8</a></li>




                            <li className=""><a href="https://monsta-demo.myshopify.com/?preview_theme_id=123843248231">Home  Version RTL <span>RTL</span></a></li>


                          </ul>
                        </li>




                        <li className=""><a href="#">Product <span className="sale"> SALE</span></a>
                          <ul className="">



                            <li className=""><a href="/products/5-simple-product">Simgle Product</a></li>




                            <li className=""><a href="/products/3-variable-product">Variable Product</a></li>




                            <li className=""><a href="/products/7-sample-affiliate-product">Affiliate Product</a></li>




                            <li className=""><a href="/products/4-soldout-product">Soldout Product</a></li>




                            <li className=""><a href="/products/8-countdown-product">Countdown Product</a></li>




                            <li className=""><a href="/products/4-preorder-product">Preorder Product</a></li>


                          </ul>
                        </li>




                        <li className=""><a href="/collections/all">Shop <span> NEW</span></a>
                          <ul className="">



                            <li className=""><a className="" href="#">Shop Layout</a>
                              <ul className="">

                                <li><a href="/collections/all">Full Width</a></li>

                                <li><a href="/collections/all">Fullwidth List <span> HOT </span></a></li>

                                <li><a href="/collections/all">Right Sidebar</a></li>

                                <li><a href="/collections/all">Right Sidebar List <span className="sale">sale</span></a></li>

                                <li><a href="/collections/all">List View</a></li>

                              </ul>
                            </li>




                            <li className=""><a className="" href="#">Other Pages</a>
                              <ul className="">

                                <li><a href="/cart">cart</a></li>

                                <li><a href="/checkout">Checkout</a></li>

                                <li><a href="/account">my account</a></li>

                                <li><a href="/pages/wishlist">Wishlist</a></li>

                                <li><a href="/not_found">404 page</a></li>

                              </ul>
                            </li>




                            <li className=""><a className="" href="#">Product Type</a>
                              <ul className="">

                                <li><a href="/products/6-variable-with-soldout-product">Proudct Details</a></li>

                                <li><a href="/products/11-product-with-video">product video</a></li>

                                <li><a href="/products/3-variable-product">product variable</a></li>

                                <li><a href="/products/7-sample-affiliate-product">product affiliate</a></li>

                                <li><a href="/products/8-countdown-product">Product coundown</a></li>

                              </ul>
                            </li>


                          </ul>
                        </li>




                        <li className=""><a href="/blogs/news">Blog</a>
                          <ul className="">



                            <li className=""><a href="/blogs/news">blog</a></li>




                            <li className=""><a href="/blogs/news">blog left</a></li>




                            <li className=""><a href="/blogs/news">blog right</a></li>




                            <li className=""><a href="/blogs/news/temporibus-autem-quibusdam-3">blog details</a></li>


                          </ul>
                        </li>




                        <li className=""><a href="#">Pages</a>
                          <ul className="">



                            <li className=""><a href="/pages/about">About Us</a></li>




                            <li className=""><a href="/pages/contact">contact</a></li>




                            <li className=""><a href="/cart">cart</a></li>




                            <li className=""><a href="/pages/wishlist">Wishlist</a></li>




                            <li className=""><a href="/pages/faq">Frequently Questions</a></li>




                            <li className=""><a href="/not_found">Error 404</a></li>


                          </ul>
                        </li>


                      </ul>
                    </nav>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* <!--header bottom end--> */}
      </header>
    </div>
  )
}
