import React, { useState } from "react";
import InfoIcon from '@mui/icons-material/Info';

export const CancelOrder = () => {
  const [show, setShow] = useState(false);
  const [comment, setComment] = useState("");
  const [reason, setReason] = useState("");

  // Modal control
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleCancelOrder = () => {
    console.log("Reason:", reason);
    console.log("Comments:", comment);
    setShow(false);
  };

  return (
    <div className="container mt-5">
      {/* Trigger Button */}
      <button className="btn btn-danger" onClick={handleShow}>
        Cancel Your Order
      </button>

      {/* Bootstrap Modal */}
      <div
        className={`modal fade ${show ? "show d-block" : "d-none"}`}
        tabIndex="-1"
        role="dialog"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content p-3 w-75 mx-auto">
            {/* Modal Header */}
            <div className="modal-header">
              <h3 className="modal-title font-weight-bold ">Cancel Your Order</h3>
              <button type="button" className="close" onClick={handleClose}>
                <span>&times;</span>
              </button>
            </div>

            {/* Modal Body */}
            <div className="modal-body">
              <div className="alert alert-success d-inline-flex">
                <InfoIcon className="mr-2"/> The following information
                is only for our records and will not prevent you from cancelling
                your order.
              </div>
              {/* Reasons for Cancellation */}
              <div className="mb-3">
                <h4 className="font-weight-bold text-dark my-2">
                  Reasons for cancellation (optional) :
                </h4>
                <div>
                  <div className="form-check">
                    <input
                      className=""
                      type="radio"
                      name="reason"
                      id="reason1"
                      onChange={() => setReason("Changed my mind")}
                    />
                    <label className="form-check-label" htmlFor="reason1">
                      Changed my mind
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className=""
                      type="radio"
                      name="reason"
                      id="reason2"
                      onChange={() => setReason("Wrong shipping address")}
                    />
                    <label className="form-check-label" htmlFor="reason2">
                      Wrong shipping address
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className=""
                      type="radio"
                      name="reason"
                      id="reason3"
                      onChange={() => setReason("Duplicate order")}
                    />
                    <label className="form-check-label" htmlFor="reason3">
                      Duplicate order
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className=""
                      type="radio"
                      name="reason"
                      id="reason4"
                      onChange={() => setReason("Other")}
                    />
                    <label className="form-check-label" htmlFor="reason4">
                      Other
                    </label>
                  </div>
                </div>
              </div>

              {/* Additional Comments */}
              <div className="mb-3">
                <h5 className="font-weight-bold text-dark">Additional comments : </h5>
                <textarea
                  className="form-control"
                  rows="3"
                  maxLength="200"
                  placeholder="Enter additional comments here..."
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <small className="text-muted">{comment.length}/200</small>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-light"
                onClick={handleClose}
              >
                Never Mind
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={handleCancelOrder}
              >
                Cancel Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
