import React from 'react'
import './About.css'
import mario from '../image/dsc2066.png'
import Tilt from 'react-tilt'

function About() {
    return (
        <div className='about' id="about">
            <h1>About</h1>
            <div class="about_container">
                <div class="card">
                    <div class="photo">
                        <img src={mario} alt="mario" />
                    </div>
                    <div class="deskripsi">
                        <Tilt options={{ max: 24, speed: 400 }} >
                            <p>Welcome! I'm Muhammad Mario Wijatmika. I'm passionate about frontend developer. Maybe fullstack developer soon! 🐱‍🏍✨ <br /> I'm an ingenious web developer oriented to the frontend, i rely on the most outstanding open source libraries React JS being these my tools to be able to solve any challenge posed in my work life. This page is an example of my skills as frontend developer.🔥</p>
                        </Tilt>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default About
