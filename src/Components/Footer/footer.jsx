// Footer.jsx
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <h2>"Adopt, don't shop. Give a pet a second chance at life."</h2>
        <div className="social-icons">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6c/Facebook_Logo_2023.png"
            alt="Facebook"
          />
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
            alt="Instagram"
          />
          <img
            src="https://images.vexels.com/content/137419/preview/twitter-icon-logo-25db10.png"
            alt="Twitter"
          />
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contact">Contact Us</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/pets">Adop A pet</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Contact</h4>
          <img src="https://pngimg.com/d/phone_PNG48933.png" alt="Contact" />
          <span>(+91)9345632123</span>
          <br></br>
          <img src="https://pngimg.com/d/gmail_logo_PNG6.png" alt="Email" />
          <span>pawfinds@adoppet.org</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
