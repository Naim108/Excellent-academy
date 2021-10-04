import React from "react";
import Header from '../Header/Header'
import "./Banner.css";
import logo from '../../images/logo.png'

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container  ">
        <div className="row  d-flex banner align-items-center justify-content-center">
          <div className="col-md-6 p-6">
            <h1 className="title">
            Now learning from anywhere, and build your bright career.
            </h1>
            <p className=" text-center mt-3">
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
