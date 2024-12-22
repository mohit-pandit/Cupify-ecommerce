import React, { useState } from "react";
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StarIcon from '@mui/icons-material/Star';
import BlockIcon from '@mui/icons-material/Block';
import './Checkout.css'

export const CheckoutItem = () => {
  const [address, setAddress] = useState({
    city: "New Delhi",
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    Pincode: "",
    phone: "",
    phone2: "",
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
              <h4 className="mb-3">Contact Information</h4>
              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email address"
                value={address.email}
                name="email"
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Phone number"
                name="phone"
                value={address.phone}
                onChange={handleInputChange}
                required
              />

              <h4 className="mb-3 mt-4">Shipping Address</h4>
              <select
                className="form-control mb-3"
                name="city"
                value={address.city}
                onChange={handleInputChange}
              >
                <option>New Delhi</option>
                <option>Gurgaon</option>
                <option>Noida</option>
                <option>Ghaziabad</option>
                <option>Faridabad</option>
                <option>Ballabgarh</option>
                <option>Okhla</option>
                <option>Others</option>
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
                    placeholder="Pincode"
                    name="Pincode"
                    value={address.Pincode}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Phone 2 (optional)"
                name="phone2"
                value={address.phone2}
                onChange={handleInputChange}

              />

              <button type="submit" className="btn btn-success w-25 right">
                Save Address
              </button>
            </form>
          ) : (
            // Display Submitted Address
            <div className="border p-3 mb-4 rounded shipping-address">
              <h3 className="font-weight-bold text-dark mb-4">Shipping Address</h3>
              <span>Name : </span> <p>{` ${address.firstName} ${address.lastName}`}</p>
              <span>Email : </span> <p>{` ${address.email}`}</p>
              <span>Address : </span> <p>{address.address}</p>
              <span>Apartment : </span> <p>{address.apartment && address.apartment}</p>
              <span>City - Pincode : </span> <p>{`${address.city}, ${address.Pincode}`}</p>
              <span>City : </span> <p>{address.city}</p>
              <span>Phone : </span> <p>{address.phone && `${address.phone}`}</p>
              <span>Phone2 : </span> <p>{address.phone2 && `${address.phone2}`}</p>
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


export default CheckoutItem;

