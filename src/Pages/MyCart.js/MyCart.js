import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./CartSummary.css"; // Optional for custom styling

export const MyCart = () => {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Left Section: Bag */}
        <div className="col-md-8">
          {/* Free Shipping Banner */}
          <div className="alert alert-light text-secondary mb-4" role="alert">
            <span className="text-danger fw-bold">Free Shipping for Members.</span>{" "}
            Become a Nike Member for fast and free shipping.{" "}
            <a href="/" className="text-decoration-underline">
              Join us
            </a>{" "}
            or{" "}
            <a href="/" className="text-decoration-underline">
              Sign-in
            </a>
          </div>

          {/* Product */}
          <div className="card border-0 mb-3">
            <div className="row g-0">
              <div className="col-4">
                <img
                  src="https://via.placeholder.com/200x150" // Replace with actual product image
                  alt="Product"
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <div className="card-body">
                  <h5 className="card-title mb-2">NikeCourt Air Max Volley</h5>
                  <p className="card-text text-muted mb-1">
                    Women's Hard Court Tennis Shoe
                  </p>
                  <p className="card-text text-muted mb-1">
                    Black/White/Metallic Red Bronze
                  </p>
                  <p className="card-text text-muted">
                    Size <span className="fw-bold">8</span> • Quantity{" "}
                    <span className="fw-bold">1</span>
                  </p>
                  <p className="fw-bold">$90.00</p>
                  <a href="/" className="text-decoration-underline me-3">
                    Move to Favorites
                  </a>
                  <a href="/" className="text-decoration-underline text-danger">
                    Remove
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Info */}
          <p className="text-muted">
            Shipping: <span className="fw-bold">Arrives Tue, Jul 20 - Thu, Jul 22</span>{" "}
            <a href="/" className="text-decoration-underline">
              Edit Location
            </a>
          </p>
          <p className="text-muted">
            Pickup:{" "}
            <a href="/" className="text-decoration-underline">
              Find a Store
            </a>
          </p>

          <p className="text-warning">
            <i className="bi bi-exclamation-circle-fill me-1"></i> Just a few
            left. Order soon.
          </p>
        </div>

        {/* Right Section: Summary */}
        <div className="col-md-4">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3 fw-bold">Summary</h5>

            {/* Promo Code */}
            <div className="mb-3">
              <label htmlFor="promoCode" className="form-label">
                Do you have a Promo Code?
              </label>
              <input
                type="text"
                className="form-control"
                id="promoCode"
                placeholder="Enter code"
              />
            </div>

            {/* Price Details */}
            <div className="d-flex justify-content-between">
              <span>Subtotal</span>
              <span>$90.00</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Estimated Shipping & Handling</span>
              <span>$8.00</span>
            </div>
            <div className="d-flex justify-content-between mb-3">
              <span>Estimated Tax</span>
              <span>—</span>
            </div>
            <hr />
            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>$98.00</span>
            </div>

            {/* Checkout Buttons */}
            <button className="btn btn-dark w-100 mt-3">Checkout</button>
            <button className="btn btn-light w-100 mt-2 text-primary">
              PayPal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

