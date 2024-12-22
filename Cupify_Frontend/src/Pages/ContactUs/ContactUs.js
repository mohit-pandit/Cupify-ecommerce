import React, { useState } from "react";
import './ContactUs.css'
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import RoomIcon from '@mui/icons-material/Room';

const ContactUs = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Message Sent Successfully!");
  };

      
  return (
    <div className="container-fluid p-0 contact-us">
      {/* Header Section */}
      <div className="text-white py-5" style={{ backgroundColor: "#00B3AC" }}>
        <h1 className="text-center">Contact us</h1>
        <p className="text-center">
          Questions, Bug reportsa and any Feedback – we’re here for all of it.
        </p>
      </div>

      <div className="container py-5">
      <div className="row bg-white rounded">
        {/* Contact Information Section */}
        <div className="col-md-4 text-center py-4 bg-light">
          <div className="mb-4">
          <RoomIcon className="text-primary"/>
            <h5 className="mt-2">Address</h5>
            <p>Noida sector 1, Noida, UP, INDIA </p>
          </div>

          <div className="mb-4">
            <AddIcCallIcon className="text-primary"/>
            <h5 className="mt-2">Phone</h5>
            <p>123 456 789 - 000</p>
          </div>

          <div>
          <EmailIcon className="text-primary"/>
            <h5 className="mt-2">Email</h5>
            <p>supportcupify@gmail.com</p>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="col-md-8 py-4">
          <h3 className="text-primary mb-3">Send us a message</h3>
          <p>
            If you have any questions or queries, feel free to send us a
            message. It's our pleasure to help you.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                placeholder="Enter your contact number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                
              />
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                rows="4"
                placeholder="Enter your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
};


export default ContactUs;