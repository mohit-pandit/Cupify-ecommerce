import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCart.css";
import { Link } from "react-router-dom";

let CartObj = [{
    id: 1,
    itemName: "NikeCourt Air Max Volley",
    itemImg: "https://www.milton.in/cdn/shop/files/Glassy_350_Pink_4.jpg?v=1701346019&width=1000",
    description: "Black/White/Metallic Red Bronze",
    quantity: 1,
    price: 200
},
{
    id: 2,
    itemName: "NikeCourt Air Max Volley",
    itemImg: "https://www.milton.in/cdn/shop/files/Glassy_350_Pink_4.jpg?v=1701346019&width=1000",
    description: "Black/White/Metallic Red Bronze",
    quantity: 1,
    price: 200
},
{
    id: 3,
    itemName: "NikeCourt Air Max Volley",
    itemImg: "https://www.milton.in/cdn/shop/files/Glassy_350_Pink_4.jpg?v=1701346019&width=1000",
    description: "Black/White/Metallic Red Bronze",
    quantity: 1,
    price: 200
}]


export const MyCart = () => {
    const [cartItems, setCartItems] = useState(CartObj)

    // Increment quantity for a specific item
    const handleIncrement = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    // Decrement quantity for a specific item
    const handleDecrement = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };


    // Calculate subtotal
    const calculateSubtotal = () => {
        return cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);
    };


    // Remove item from the cart
    const handleRemove = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };



    return (
        <div className="container my-5">
            <div className="row">
                {/* Left Section: Bag */}
                <div className="col-md-8">
                    {/* Free Shipping Banner */}
                    <h3 className="font-weight-bold text-danger ml-3 mb-4">My Cart</h3>
                    <div className="alert alert-light text-secondary mb-4" role="alert">
                        <span className="text-danger font-weight-bold">Free Shipping for Members.</span>{" "}
                        Become a Cupify Member for fast and free shipping.{" "}
                        <a href="/" className="text-decoration-underline">
                            Join us
                        </a>{" "}
                        or{" "}
                        <a href="/" className="text-decoration-underline">
                            Sign-in
                        </a>
                    </div>

                    {/* Product */}

                    {
                        cartItems?.map((itemObj) => {
                            return (<div className="card border-0 mb-3" key={itemObj.id}>
                                <div className="row g-0">
                                    <div className="col-4">
                                        <img
                                            src={itemObj.itemImg}
                                            alt="Product"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div className="col-8">
                                        <div className="card-body">
                                            <h4 className="card-title mb-2">{itemObj.itemName}</h4>
                                            <p className="card-text text-muted mb-1">
                                                {itemObj.description}
                                            </p>
                                            <p className="card-text text-muted">
                                                Quantity{" "} : {itemObj.quantity}
                                            </p>
                                            <button
                                                className="btn btn-outline-secondary btn-sm quantity-update-btn"
                                                onClick={() => handleDecrement(itemObj.id)}>-
                                            </button>
                                            <span className="mx-3 font-weight-bold updated-quantity-count">{itemObj.quantity}</span>
                                            <button
                                                className="btn btn-outline-secondary btn-sm quantity-update-btn"
                                                onClick={() => handleIncrement(itemObj.id)}>+
                                            </button>
                                            <p className="font-weight-bold mt-3">Price : ₹ {Number(itemObj.price) * Number(itemObj.quantity)} </p>
                                            <a href="#" className="text-decoration-underline Remove-item"  onClick={() => handleRemove(itemObj.id)}>
                                                Remove
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>)
                        })
                    }

                    {/* Shipping Info */}
                    <p className="text-muted">
                        Shipping: <span className="font-weight-bold">Arrives with in 2 or 3 working days</span>{" "}
                        <Link to="/item-checkout" className="text-decoration-underline">
                            Update Location
                        </Link>
                    </p>

                    <p className="text-warning">
                        <i className="bi bi-exclamation-circle-fill me-1"></i> Just a few
                        left. Order soon.
                    </p>
                </div>

                {/* Right Section: Summary */}
                <div className="col-md-4 mt-5">
                    <div className="card p-4 shadow-sm sticky-top">
                        <h4 className="mb-3 font-weight-bold text-dark">Summary</h4>

                        {/* Promo Code */}
                        <div className="mb-3 position-relative">
                            <label htmlFor="promoCode" className="form-label mb-2">
                                Do you have a Promo Code?
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="promoCode"
                                placeholder="Enter code"
                            />
                            <button className="coupon-apply-btn position-absolute">apply</button>
                        </div>

                        {/* Price Details */}
                        <div className="d-flex justify-content-between mb-1">
                            <span>Subtotal</span>
                            <span>₹ {calculateSubtotal()}</span>
                        </div>
                        <div className="d-flex justify-content-between mb-1">
                            <span>Estimated Shipping & Handling</span>
                            <span>₹ 50.00</span>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <span>Estimated Tax</span>
                            <span>—</span>
                        </div>
                        <hr />
                        <div className="d-flex  text-dark justify-content-between font-weight-bold">
                            <span>Total</span>
                            <span>₹ {calculateSubtotal() + 50}</span>
                        </div>

                        {/* Checkout Buttons */}
                        <button className="btn btn-dark w-100 mt-3">Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

