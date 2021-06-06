import React from "react";
import "./Footer.css";
import mario from "../image/mario.jpg";

function Footer() {
  return (
    <div className="footer">
      <div class="footer_container">
        <div class="footer-logo">
          <img src={mario} alt="mario-icon" />
        </div>

        <div class="footer-social">
          <span>Connect with us</span>
          <a href="https://github.com/muhammadmario">
            <i class="fab fa-github-square"></i>
          </a>
          <a href="https://www.facebook.com/mario.baron.520">
            <i class="fab fa-facebook-square"></i>
          </a>
          <a href="https://www.instagram.com/mariobaron_/">
            <i class="fab fa-instagram-square"></i>
          </a>
        </div>

        <div class="footer-copyright">
          <p>
            <i class="far fa-copyright"></i>Mario 2020, Build with ❤
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
