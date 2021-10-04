import React from "react";
import "./Banner.css";
import logo from '../../images/logo.png'


// Banner part design

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container  ">
        <div className="row  d-flex  align-items-center justify-content-center">
          <div className="col-md-6 ">
            <h1 className="title fw-bold">
            Now learning from anywhere, and build your bright career.
            </h1>
            <p>We provide a wide range of courses for the different sectors you can choose from, which suits you perfectly.
            It has survived not only five centuries but also the leap into electronic typesetting.
            </p>
            <button className="mt-3 btn btn-course">Start Course</button>
          </div>
          <div className=" logo col-md-6">
            <img src={logo} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
