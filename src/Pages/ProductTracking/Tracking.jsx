import React from "react";
import "./Tracking.css"; // Ensure this CSS file is created and imported

export const Tracking = () => {
  return (
    <div className="tracking-container">
      {/* Order Header */}
      <div className="order-header">
        <h1>
          Order number: <span>10501020676969</span>
        </h1>
        <div className="order-info">
          <p>Order date: Tue, 10/10/2023</p>
          <p>Payment method: Credit / Debit Card - 9549</p>
        </div>
      </div>

      {/* Order Status */}
      <div className="order-status">
        <h2>We're packing your order</h2>
        <p className="delivery-date">
          Estimated delivery: Fri, 13/10/2023 - Mon, 16/10/2023
        </p>
        <div className="status-progress">
          <div className="step completed">Order placed</div>
          <div className="step completed">Packing</div>
          <div className="step">Shipped</div>
          <div className="step">Delivered</div>
        </div>
      </div>

      {/* Order Details */}
      <div className="order-details">
        <div className="item-details">
          <h3>Pier One</h3>
          <p>Beanie - black</p>
          <p>Colour: black</p>
          <p>Size: One Size</p>
          <p>Article number: PI954ROOF-Q11</p>
          <p>Price: £8.00</p>
        </div>
      </div>

      {/* Total Section */}
      <div className="total-section">
        <h3>Total</h3>
        <p>Subtotal: £8.00</p>
        <p>Delivery: £3.99</p>
        <h4>Total: £11.99 (Includes VAT)</h4>
      </div>

      {/* Address Section */}
      <div className="address-section">
        <div className="address">
          <h3>Delivery address</h3>
          <p>John Newman</p>
          <p>2125 Chestnut Street</p>
          <p>San Francisco, CA 94123</p>
        </div>
        <div className="address">
          <h3>Billing address</h3>
          <p>John Newman</p>
          <p>2125 Chestnut Street</p>
          <p>San Francisco, CA 94123</p>
        </div>
      </div>
    </div>
  );
};

