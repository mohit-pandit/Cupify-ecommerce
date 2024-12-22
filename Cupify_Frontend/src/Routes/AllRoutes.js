import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Signup from '../Pages/Auth/Signup/Signup'
import Login from '../Pages/Auth/Login/Login'
import ForgotPassword from '../Pages/Auth/ForgotPassword/ForgotPassword'
import { PrivateRoute } from './PrivateRoute'
import { Header } from '../components/Header/Header'
import { Footer } from '../components/Footer'

const Home = lazy(() => import('../Pages/Home'));
const ProductDetails = lazy(() => import('../Pages/ProductDetails/ProductDetails'));
const MyCart = lazy(() => import('../Pages/MyCart.js/MyCart'));
const CheckoutItem = lazy(() => import('../Pages/Checkout/CheckoutItem'));
const ConfirmationDetails = lazy(() => import('../Pages/ThankyouPage/ConfirmationDetails'));
const Tracking = lazy(() => import('../Pages/ProductTracking/Tracking'));
const ContactUs = lazy(() => import('../Pages/ContactUs/ContactUs'));
const AboutUs = lazy(() => import('../Pages/AboutUs'));

export const AllRoutes = () => {
    const location = useLocation();
    const AuthRoutes = ["/login", "/signup", "forgot-password"]

    return (
        <>
            <Suspense fallback={<div className='container text-center my-auto'>
                <img src='/assets/loader.gif' alt='Loader' />
                <h4 style={{ marginTop: '-60px' }} className='font-weight-bold'>Loading Content ..... </h4>
            </div>}>

                {!AuthRoutes.includes(location.pathname) && <Header />}
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" exact="true" element={<Home />}></Route>
                    <Route path="/item-details" exact="true" element={<ProductDetails />}></Route>
                    <Route path="/item-checkout" exact="true" element={<CheckoutItem />}></Route>
                    <Route path="/Contact-Us" exact="true" element={<ContactUs />}></Route>
                    <Route path="/About-Us" exact="true" element={<AboutUs />}></Route>
                    <Route path="/My-Cart" exact="true" element={<MyCart />}></Route>

                    {/* private Routes */}
                    <Route path="/OrderConfirmation" exact="true" element={<PrivateRoute element={ConfirmationDetails} />}></Route>
                    <Route path="/OrderTracking" exact="true" element={<PrivateRoute element={Tracking} />}></Route>

                    {/* Auth Routes */}
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" exact element={<Login />} />
                    <Route path="/forgot-password" element={<ForgotPassword />} />

                </Routes>
                {!AuthRoutes.includes(location.pathname) && <Footer />}
            </Suspense>

        </>
    )
}
