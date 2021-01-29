import React from 'react'
import './Footer.css'
import mario from '../image/mario.png'

function Footer() {
    return (
        <div className="footer">
            <div class="footer_container">
                <div class="footer-logo">
                    <img src={mario} alt="mario-icon" />
                </div>

                <div class="footer-social">
                    <span>Connect with us</span>
                    <i class="fab fa-github-square"></i>
                    <i class="fab fa-facebook-square"></i>
                    <i class="fab fa-instagram-square"></i>
                </div>

                <div class="footer-copyright">
                    <p><i class="far fa-copyright"></i>Mario 2020, Build with ❤ </p>
                </div>

            </div>
        </div>
    )
}

export default Footer
