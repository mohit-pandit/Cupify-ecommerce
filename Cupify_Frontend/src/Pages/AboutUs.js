import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./AboutUs.css"; // Optional custom CSS for styling
import SettingsIcon from '@mui/icons-material/Settings';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';

const AboutUs = () => {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img
            src={require('../assets/images/aboutus/about-us.jpg')} // Replace with your actual image path
            alt="Team Working"
            className="img-fluid rounded"
          />
        </div>

        {/* Content Section */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">Who Are We ?</h2>
          <p className="text-muted">
            We help people to build incredible brands and superior products. Our
            perspective is to furnish outstanding, captivating services.
          </p>
          <p className="font-weight-bold">
            Nullam gravida orci eu luctus molestie. Fusce finibus congue orci,
            non aliquam magna tincidunt ut. Aenean lacinia arcu, vel pharetra
            nibh porta a. Curabitur nec congue nibh, ac interdum nisl. Nunc
            pulvinar nec massa vitae vehicula luctus.
          </p>

          {/* Features Section */}
          <div className="d-flex justify-content-between">

            <div className="d-flex mt-3 align-items-start mb-3">
              <SettingsIcon className="text-primary" />
              <div className="ml-3">
                <h5 className="font-weight-bold mb-1">Versatile Brand</h5>
                <p className="text-muted mb-0">
                  We are crafting a digital method that sustains life across all
                  mediums.
                </p>
              </div>
            </div>

            <div className="d-flex mt-3 align-items-start">
              <AutoAwesomeIcon className="text-primary" />
              <div className="ml-3">
                <h5 className="font-weight-bold mb-1">Digital Agency</h5>
                <p className="text-muted mb-0">
                  We believe in innovation by integrating privacy with elaborate
                  ideas.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};


export default AboutUs;
