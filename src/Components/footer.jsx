import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <p>Environment Friendly</p>
        <p>Secure Payment</p>
        <p>Shipping Across India</p>
      </div>

      {/* Horizontal line */}
      <hr />

      <div className="footer-bottom">
        {/* Logo on the left */}
        <div className="footer-logo">
          <h3>Bello & Bella</h3>
        </div>

        {/* 3x3 grid of links in the center */}
        <div className="footer-links">
          <div>
            <a href="#">About</a>
          </div>
          <div>
            <a href="#">FAQ</a>
          </div>
          <div>
            <a href="#">Career</a>
          </div>
          <div>
            <a href="#">Company</a>
          </div>
          <div>
            <a href="#">Policy</a>
          </div>
          <div>
            <a href="#">Contact</a>
          </div>
          <div>
            <a href="#">Blog</a>
          </div>
          <div>
            <a href="#">Support</a>
          </div>
          <div>
            <a href="#">Feedback</a>
          </div>
        </div>

        {/* Email subscription box on the right */}
        <div className="footer-newsletter">
          <input type="email" placeholder="Enter your email" />
          <button>Join</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
