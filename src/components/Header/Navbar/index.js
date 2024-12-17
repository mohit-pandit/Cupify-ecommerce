import React from 'react'
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


export const Navbar = () => {
    return (
        <div className="sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12">
              <div className="main_menu_inner">
       
                <div className="main_menu d-none d-lg-block">
                  <nav>
                    <ul>

                      <li className="active"><Link to="/">Home </Link>
                      </li>


                      <li><a href="#">Product <span className="sale"> SALE</span> <ArrowDropDownIcon/> </a>
                        <ul className="menu-2 sub_menu">
                          <li className="sub_menu_li"><Link to="/product/printed-cups">Printed Cups</Link></li>
                          <li className="sub_menu_li"><Link to="/product/printed-bottles">Printed Bottles</Link></li>
                          <li className="sub_menu_li"><Link to="/product/cups">Stylish Cups</Link></li>
                          <li className="sub_menu_li"><Link to="/product/bottles">Stylish Bottles</Link></li>
                          </ul>
                      </li>


                      <li className="mega_item"><a href="/collections/all">Shop <span> NEW</span> <ArrowDropDownIcon/> </a>
                        <ul className="menu-2 mega_menu">
                          <li className="mega_dropdown">
                            <a className="mega_title" href="#">Offline Availability</a>
                            <ul>
                              <li><a href="/collections/all">Full Width</a></li>
                              <li><a href="/collections/all">Fullwidth List <span> HOT </span></a></li>
                              <li><a href="/collections/all">Right Sidebar</a></li>
                              <li><a href="/collections/all">Right Sidebar List <span className="sale">sale</span></a></li>
                              <li><a href="/collections/all">List View</a></li>

                            </ul>
                          </li>
                          <li className="mega_dropdown">
                            <a className="mega_title" href="#">Online Availability</a>
                            <ul>
                              <li><Link to="/item-checkout">cart</Link></li>
                              <li><Link to="/item-checkout">Checkout</Link></li>
                              <li><a href="/account">my account</a></li>
                              <li><a href="/pages/wishlist">Wishlist</a></li>
                              <li><a href="/not_found">404 page</a></li>
                            </ul>
                          </li>
                          <li className="mega_dropdown">
                            <a className="mega_title" href="#">Product Availability</a>
                            <ul>
                              <li><a href="/products/6-variable-with-soldout-product">Cups Varities</a></li>
                              <li><a href="/products/11-product-with-video">Bottles Varities</a></li>
                              <li><a href="/products/3-variable-product">Printed / Non-Printed</a></li>
                              <li><a href="/products/7-sample-affiliate-product">Sylish</a></li>
                              <li><a href="/products/8-countdown-product">Online Deliveries</a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>


                      <li><Link to="/About-Us">About Us</Link></li>
                      <li><Link to="/Contact-Us">Contact Us</Link></li>
                    </ul>
                  </nav>
                </div>
                <div className="mobile-menu d-lg-none mean-container"><div className="mean-bar"><a href="#nav" className="meanmenu-reveal" style={{"background":"color"}}><span></span><span></span><span></span></a><nav className="mean-nav">
                  <ul style={{"display": "none;"}}>



                    <li className=""><Link to="/">Home </Link>
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
                            <li><Link to="/item-checkout">cart</Link></li>
                            <li><Link to="/item-checkout">Checkout</Link></li>
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
                        <li className=""><Link to="/About-Us">About Us</Link></li>
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
                      <li className=""><Link to="/">Home </Link>
                  
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
                              <li><Link to="/item-checkout">cart</Link></li>
                              <li><Link to="/item-checkout">Checkout</Link></li>
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
                          <li className=""><Link to="/About-Us">About Us</Link></li>
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
    )
}
