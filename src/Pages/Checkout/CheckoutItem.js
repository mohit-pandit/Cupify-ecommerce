import React, { useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import BlockIcon from '@mui/icons-material/Block';
import './Checkout.css'

export const CheckoutItem = () => {
  const [address, setAddress] = useState({
    country: "United Kingdom",
    firstName: "",
    lastName: "",
    company: "",
    address: "",
    apartment: "",
    city: "",
    postcode: "",
    phone: "",
  });

  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [selectedOption, setSelectedOption] = useState("paytm");

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  // Submit Address
  const handleSubmitAddress = (e) => {
    e.preventDefault();
    setIsAddressSubmitted(true);
  };

  return (
    <div className="container mt-4">
      <h3 className="font-weight-bold text-danger mb-5">Checkout Items</h3>
      <div className="row">
        {/* Left Section: Address & Payment */}
        <div className="col-md-7">
          {/* Address Form */}
          {!isAddressSubmitted ? (
            <form onSubmit={handleSubmitAddress} className="mb-4">
              <h5>Contact Information</h5>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email"
                required
              />

              <h5>Shipping Address</h5>
              <select
                className="form-control mb-3"
                name="country"
                value={address.country}
                onChange={handleInputChange}
              >
                <option>United Kingdom</option>
                <option>United States</option>
              </select>
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="First name"
                    name="firstName"
                    value={address.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Last name"
                    name="lastName"
                    value={address.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Company (optional)"
                name="company"
                value={address.company}
                onChange={handleInputChange}
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Address"
                name="address"
                value={address.address}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Apartment, suite, etc. (optional)"
                name="apartment"
                value={address.apartment}
                onChange={handleInputChange}
              />
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="City"
                    name="city"
                    value={address.city}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Postcode"
                    name="postcode"
                    value={address.postcode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Phone (optional)"
                name="phone"
                value={address.phone}
                onChange={handleInputChange}
              />

              <button type="submit" className="btn btn-success w-25 right">
                Save Address
              </button>
            </form>
          ) : (
            // Display Submitted Address
            <div className="border p-3 mb-4 rounded">
              <h5 className="font-weight-bold text-dark">Shipping Address</h5>
              <p>{`${address.firstName} ${address.lastName}`}</p>
              <p>{address.company && address.company}</p>
              <p>{address.address}</p>
              <p>{address.apartment && address.apartment}</p>
              <p>{`${address.city}, ${address.postcode}`}</p>
              <p>{address.country}</p>
              <p>{address.phone && `Phone: ${address.phone}`}</p>
              <button
                className="btn btn-link p-0"
                onClick={() => setIsAddressSubmitted(false)}
              >
                Edit Address
              </button>
            </div>
          )}


        </div>

        {/* Right Section: Order Summary */}
        <div className="col-md-5">
          <div className="shadow-sm p-4">
            <h5 className="font-weight-bold text-dark mb-3">Order Summary</h5>
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>£279.20</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Shipping</span>
              <span>Calculated at next step</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between font-weight-bold text-dark">
              <span>Total</span>
              <span>£279.20</span>
            </div>
            {/* Payment Options */}

            <div className="mt-4">
              <h4 className="mb-3 font-weight-bold">Payment Options</h4>
              <div className="d-flex gap-4">

                {/* PayPal */}
                <div
                  className={`border rounded p-3 d-flex align-items-center ${selectedOption === "PayPal" ? "border-dark" : ""
                    }`}
                  style={{ cursor: "pointer", width: "150px" }}
                  onClick={() => handleOptionChange("PayPal")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "PayPal"}
                    onChange={() => handleOptionChange("PayPal")}
                    className="me-2"

                  />
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                    alt="PayPal"
                    style={{ width: "60px" }}
                  />
                </div>

                {/* paytm */}
                <div
                  className={`border rounded p-3 d-flex align-items-center ${selectedOption === "paytm" ? "border-dark" : ""
                    }`}
                  style={{ cursor: "pointer", width: "150px" }}
                  onClick={() => handleOptionChange("paytm")}
                >
                  <input
                    type="radio"
                    name="payment"
                    checked={selectedOption === "paytm"}
                    onChange={() => handleOptionChange("paytm")}
                    className="me-2"
                  />
                  <img
                    src="https://seeklogo.com/images/A/paytm-logo-0AC7741837-seeklogo.com.png"
                    alt="paytm"
                    style={{ width: "60px" }}
                  />
                </div>
              </div>
              <button type="button" className="btn btn-success w-100 mt-3">
                Pay Now
              </button>
            </div>

          </div>




          <div className="">
            <div className="d-flex shadow-sm shipping-policy">
              <BlockIcon className="text-primary ml-4" />
              <div>
                <h6 className="font-weight-bold text-dark">TRY OUR WATCHES RISK-FREE</h6>
                <p>30-day risk-free trial, easy returns, and a 2-year warranty.</p>
              </div>
            </div>

            <div className="d-flex shadow-sm shipping-policy">
              <StarIcon className="text-primary ml-4" />
              <div>
                <h6 className="font-weight-bold text-dark">2,000+ 5-STAR REVIEWS</h6>
                <p>Trusted by thousands of customers worldwide.</p>
              </div>
            </div>

            <div className="d-flex shadow-sm shipping-policy mb-3">
              <LocalShippingIcon className="text-primary ml-4" />
              <div>

                <h6 className="font-weight-bold text-dark">FREE FAST SHIPPING</h6>
                <p>Get your order within 3 days in the UK.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


