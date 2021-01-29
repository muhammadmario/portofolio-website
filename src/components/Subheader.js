import React, { useEffect } from 'react'
import './Subheader.css'
import codingImage from '../image/coding-image.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { motion } from 'framer-motion'

function Subheader() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    const infinityAnimation = {
        visible: {
            scale: 1.1,
            textShadow: "0px 0px 8px rgb(255, 255, 255)",
            transition: {
                duration: 0.3,
                yoyo: Infinity
            }
        }
    }

    return (
        <div className="subheader">
            <div className="subheader_container">
                <div className="title-1">
                    <p data-aos="fade-down">WEL<span className="word-white">COME TO</span><br /><motion.span data-aos="fade-up" className="word-yellow" variants={infinityAnimation} animate="visible">MY WEB</motion.span>SITE.</p>
                </div>
                <div className="image-coding">
                    <img data-aos="zoom-in" src={codingImage} alt="image" />
                </div>
                <div data-aos="fade-right" class="title-2">
                    <p>BUILD WITH <span className="word-love">LOVE</span>,<br />NO I MEAN BUILD WITH <br /><motion.span variants={infinityAnimation} animate="visible" className="word-react" data-aos="zoom-in"> REACT JS</motion.span></p>
                </div>
            </div>
        </div>

    )
}

export default Subheader
