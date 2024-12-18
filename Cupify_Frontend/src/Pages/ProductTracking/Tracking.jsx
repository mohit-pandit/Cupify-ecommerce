import React, { useState } from "react";
import './Tracking.css'
import { CancelOrder } from "../../components/CancelOrder";

export const Tracking = () => {
  const [trackingState, setTrackingState] = useState("shipped"); // Change state: ordered, ready, shipped, delivered

  // State-based progress values
  const progressValues = {
    ordered: 7,
    ready: 30,
    shipped: 60,
    delivered: 100,
  };

  const currentProgress = progressValues[trackingState] || 0;

  return (
    <div className="container my-5">
      {/* Header */}
      <h3 className="text-center mb-4 text-danger">Track Your Order</h3>
      <p className="text-center mb-4"><strong>Order Id : </strong> CUP89087079</p>

      {/* Progress Bar */}
      <div className="progress-container mb-4">
        <div className="progress" style={{ height: "20px" }}>
          <div
            className="progress-bar"
            role="progressbar"
            style={{
              width: `${currentProgress}%`,
            }}
          ></div>
        </div>
        {/* Steps */}
        <div className="d-flex justify-content-between mt-2">
          <small className="text-muted">Ordered</small>
          <small className="text-muted">Ready</small>
          <small className="text-muted">Shipped</small>
          <small className="text-success">Delivered</small>
        </div>
      </div>

      {/* Updates Section */}
      <div className="w-75 mx-auto mt-5">
        <p className="text-dark mb-1"><strong>Updates : </strong> Tracking your order updates </p>
        <p className="text-success"><strong>Estimated Delivery : </strong> 20 January 2025 , Tuesday </p>
        <table className="table mt-3">
          <thead>
            <tr>
              <th>Date</th>
              <th>Location</th>
              <th>Event</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>20/06/17 - 17:32</td>
              <td>Cupify Office , Noida</td>
              <td>
                <strong>Shipped</strong>
                <br />
                Carrier: TNT <br />
                Tracking No: FA123456789
              </td>
            </tr>
            <tr>
              <td>20/06/17 - 12:00</td>
              <td>Delhi shipping office</td>
              <td>
                <strong>Ready</strong>
                <br />
                Waiting for carrier
              </td>
            </tr>
            <tr>
              <td>19/06/17 - 17:32</td>
              <td>–</td>
              <td>
                <strong>Ordered</strong>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="cancel-order mt-4 border p-3">
        <h4 className="font-weight-bold text-dark">Made a Mistake?</h4>
        <p>You have one hour from order placement to cancel your order. Simply click Cancel Order.</p>
        <CancelOrder />
      </div>
      </div>

      {/* Back to Order Details */}
      <div className="mt-4 container text-center">
        <button className="btn btn-outline-primary">Back to Order Details</button>
      </div>
      
    </div>
  );
}

