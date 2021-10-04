import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="row footer-color mt-5 p-5 text-center ">
            <div className="col-md-4">
                <h2 className="fw-bold m-2">Excellence Academy</h2>
                <h5 className="mt-3">Dhaka,Bangladesh</h5>
                <p>info@gmail.com</p>
                <p>+880 15353434</p>
                
            </div>
            <div className="col-md-4">
                <h2 className="fw-bold">Category</h2>
                <h6 className="mt-3">Creative Writing</h6>
                <h6>Film & Video</h6>
                <h6>Graphic Design</h6>
                <h6>UI/UX Design</h6>
                <h6>Business Analytics</h6>
            </div>
            <div className="col-md-4">
                <h2 className="fw-bold">Quick Links</h2>
                <a href="/"><h6 className="mt-3">Quick Links</h6></a>
                <a href="/"><h6>Privacy Policy</h6></a>
                <a href="/"><h6>Discussion</h6></a>
                <a href="/"><h6>Terms & Conditions</h6></a>
                <a href="/"><h6>Customer Support</h6></a>
            </div>
            
        </div>
    );
};

export default Footer;