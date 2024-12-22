import React from 'react';
import './ConfirmationDetails.css'
import { CancelOrder } from '../../components/CancelOrder';

function ConfirmationDetails() {
  return (
    <div className="container my-5">
      <div className="card shadow-sm p-4">
        {/* Header Section */}
        <div className="text-center mb-5 w-50 mx-auto">
          <h3 className="text-success mb-4 font-weight-bold">&#10004; Thanks for your order</h3>
          <p className='w-75 mx-auto'>We'll get started on that right away. Feel free to reach out to us for returns, questions, or feedback.</p>
          <h4 className='font-weight-bold text-dark'>Your order number is <strong>#00730568</strong></h4>
        </div>

        <div className="row">
          {/* Left Section */}
          <div className="col-md-6">
            <h4 className="font-weight-bold text-dark">Shipping</h4>
            <p>John Newman<br /> 2278 Chestnut St<br /> San Francisco, CA, 94123<br /> No-Rush Shipping — $4.95</p>

            <h4 className="font-weight-bold mt-4 text-dark">Payment Method</h4>
            <p>&#x1F4B3; **** ending in 2418</p>

            {/* Cancel Order Section */}
            <div className="cancel-order mt-4 border p-3">
              <h4 className="font-weight-bold text-dark">Made a Mistake?</h4>
              <p>You have one hour from order placement to cancel your order. Simply click Cancel Order.</p>
              <CancelOrder />
            </div>
          </div>

          {/* Right Section */}
          <div className="col-md-6">
            <h4 className="font-weight-bold text-dark">Order Summary</h4>
            <div className="d-flex justify-content-between">
              <p>The Cotton Bikini</p>
              <p>$15</p>
            </div>
            <p className="text-muted small">XS / Small | Pale Pink · Qty: 1</p>
            <hr />

            <div className="d-flex justify-content-between">
              <p>Subtotal</p>
              <p>$15</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Discount</p>
              <p>-$9</p>
            </div>
            <div className="d-flex justify-content-between">
              <p>Shipping</p>
              <p>$4.95</p>
            </div>
            <hr />
            <div className="d-flex justify-content-between font-weight-bold">
              <p className='font-weight-bold'>Total Paid</p>
              <p>$11.00</p>
            </div>

            {/* Return Policy */}
            <div className="return-policy mt-4">
              <h4 className="font-weight-bold text-dark">Our Return Policy</h4>
              <p className="small">
                We accept returns within 30 days from the ship date, as long as items haven't been washed, worn, or damaged.
                Don’t forget to keep the tags and packaging, and let us know you’re keeping it—we’ll need them to make the return.
              </p>
              <p className="small">
                For more detailed information, terms, or to begin a return, visit <a href="#" className="text-decoration-none">confident-consumers.com</a>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationDetails;