import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import './Navbar.css'
import { motion } from 'framer-motion'
import marioIcon from '../image/mario-icon.png'


function Navbar() {
    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const showButton = () => {
        if (window.innnerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    window.addEventListener('resize', showButton)

    useEffect(() => {
        showButton()
    }, [])

    return (
        <div className='navbar'>
            <div class="navbar_container">
                <div className="navbar_logo">
                    <img src={marioIcon} alt="logo-icon" />
                </div>
                <div class="menu_icon" onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={click ? 'nav_menu active' : 'nav_menu'}>
                    <li className='nav_items'>
                        <Link to='hero'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            className='nav-links'
                            onClick={closeMobileMenu}>HOME</Link>
                    </li>
                    <li className='nav_items'>
                        <Link
                            to='about'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            className='nav-links'
                            onClick={closeMobileMenu}>ABOUT</Link>
                    </li>

                    <li className='nav_items'>
                        <Link
                            to='skills'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            className='nav-links'
                            onClick={closeMobileMenu}>SKILLS</Link>
                    </li>

                    <li className='nav_items'>
                        <Link to='projects'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            className='nav-links'
                            onClick={closeMobileMenu}>PROJECT</Link>
                    </li>

                    <li className='nav_items'>
                        <Link to='contact'
                            activeClass="active"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1000}
                            className='nav-links'
                            onClick={closeMobileMenu}>CONTACT</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
