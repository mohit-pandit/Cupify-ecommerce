import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export const Footer = () => {
    return (
        <>
            <div id="shopify-section-footer" className="shopify-section">
                <footer className="footer_widgets footer_other " id="section-footer">
                    <div className="container">
                        <div className="footer_top ">
                            <div className="row">
                                <div className="col-lg-4 col-md-6">
                                    <div className="widgets_container contact_us">
                                        <h3>About Cupify</h3>
                                        <div className="footer_contact">
                                            <p> Address: Noida sector 1, Noida, UP, INDIA <br/>Phone: 123 456 789 - 000
                                            <br/> Email: supportcupify@gmail.com </p>
                                                <ul>
                                                    <li><Link to="https://www.facebook.com/"><FacebookIcon/></Link></li>
                                                    <li><Link to="https://accounts.google.com"><EmailIcon/></Link></li>
                                                    <li><Link to="https://www.instagram.com/"><InstagramIcon/></Link></li>
                                                    <li><Link to="https://www.linkedin.com/login"><LinkedInIcon/></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-2 col-md-6">
                                        <div className="widgets_container widget_menu">
                                            <h3>Information</h3>
                                            <div className="footer_menu">
                                                <ul>
                                                    <li><Link to="">Home</Link></li>
                                                    <li><Link to="/About-Us">About Us</Link></li>
                                                    <li><Link to="/Contact-Us">Contact Us</Link></li>
                                                    <li><Link to="">Services</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>



                                    <div className="col-lg-2 col-md-6">
                                        <div className="widgets_container widget_menu">
                                            <h3>My Account</h3>
                                            <div className="footer_menu">
                                                <ul>
                                                    <li><Link to=""> My Account</Link></li>
                                                    <li><Link to=""> Order History</Link></li>
                                                    <li><Link to="/item-checkout"> Checkout</Link></li>
                                                    <li><Link to=""> Frequently Questions</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-lg-4 col-md-6">
                                        <div className="widgets_container product_widget">
                                            <h3>Top Most Products</h3>
                                            <div className="simple_product">
                                                <div className="simple_product_items">
                                                    <div className="simple_product_thumb">
                                                        <Link to="">
                                                            <img src={require('../assets/images/footer/footer-bottles.jpg')} alt="Top Rated Bottles"/>
                                                        </Link>
                                                    </div>
                                                    <div className="simple_product_content">
                                                        <div className="product_name">
                                                            <h3 className='font-weight-bold'><Link to="">Stylish Bottles</Link></h3>
                                                        </div>
                                                        <div className="product_price"><span className="old_price"><span className="money">₹ 300.00</span></span><span className="current_price"><span className="money">₹ 250.00 </span></span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="simple_product_items">
                                                    <div className="simple_product_thumb">
                                                        <Link to="">
                                                        <img src={require('../assets/images/footer/footer-cups.png')} alt="Top Rated Cups"/>
                                                        </Link>
                                                    </div>
                                                    <div className="simple_product_content">
                                                        <div className="product_name">
                                                            <h3 className='font-weight-bold'><Link to="">Stylish Mugs</Link></h3>
                                                        </div>
                                                        <div className="product_price"><span className="old_price"><span className="money">₹ 250.00</span></span><span className="current_price"><span className="money">₹ 200.00</span></span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer_middel">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="footer_middel_menu">
                                            <ul>
                                                <li><Link to=""> Online Store</Link></li>
                                                <li><Link to=""> Privacy Policy</Link></li>
                                                <li><Link to=""> Terms Of Use</Link></li>
                                                <li><Link to="/Contact-Us"> Contact us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="footer_bottom">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="copyright_area">
                                            <p>Copyright © 2025 <Link to="https://cupify.com" title="https://cupify.com">Cupify</Link> | Built for Product Market  by <Link to="https://cupify.com">Cupify Team</Link></p>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                </footer>
            </div>
        </>
    )
}
