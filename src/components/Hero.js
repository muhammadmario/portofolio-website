import React from 'react'
import './Hero.css'
import hero from '../image/photo.png'
import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

function Hero() {
    const titleVariants = {
        hidden: {
            y: "-100vh",
            opacity: 0
        },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1, ease: [.6, .01, -0.5, .9], delay: .5
            }
        }
    }

    const imageVariants = {
        hidden: {
            x: "100vh",
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1, ease: [.6, .01, -0.5, .9]
            }
        }
    }

    const imageWrapperVariants = {
        hidden: {
            opacity: 0,
            scale: 0.3
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 1.5, ease: [.6, .01, -0.5, .9]
            }
        }
    }


    return (
        <div className="hero" id="hero">
            <div class="hero_container">
                <div class="title_wrapper">
                    <motion.div class="title" variants={titleVariants} initial="hidden" animate="visible">
                        <Tilt options={{ max: 24, speed: 400 }}>
                            <p>Hello, im <br /><span>M</span><span>A</span><span>R</span><span>I</span><span>O.</span><br /> <span className="word-frontend">FRONTEND<br /></span> DEVELOPER</p>
                        </Tilt>
                    </motion.div>
                </div>

                <motion.div class="image_wrapper" variants={imageWrapperVariants} initial="hidden" animate="visible">
                    <motion.div class="image" variants={imageVariants} initial="hidden" animate="visible">
                        <img src={hero} alt="photo" />
                    </motion.div>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero
