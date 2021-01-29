import React, { useEffect } from 'react'
import Skill from './Skill'
import './Skills.css'
import Aos from 'aos'

import react from '../svg/react-2.svg'
import bootstrap from '../svg/bootstrap-5-1.svg'
import jquery from '../svg/jquery.svg'
import materialize from '../svg/materialize-seeklogo.com.svg'
import materialUI from '../svg/material-ui-1.svg'
import js from '../svg/logo-javascript.svg'
import css from '../svg/css3.svg'
import git from '../svg/git.svg'
import github from '../svg/iconmonstr-github-1.svg'
import sassImg from '../svg/sass-1.svg'
import html from '../svg/html5.svg'
import pwa from '../svg/pwa-seeklogo.com.svg'

function Skills() {
    useEffect(() => {
        Aos.init({ duration: 1500 })
    }, [])

    return (
        <div className="skills" id="skills">
            <h1>Skills</h1>
            <div class="skills_container">
                <div className="list-up" data-aos="fade-down">
                    <Skill logo={html} />
                    <Skill logo={css} />
                    <Skill logo={js} />
                    <Skill logo={sassImg} />
                    <Skill logo={jquery} />
                    <Skill logo={pwa} />
                </div>

                <div className="list-down" data-aos="fade-up">
                    <Skill logo={bootstrap} />
                    <Skill logo={materialize} />
                    <Skill logo={materialUI} />
                    <Skill logo={react} />
                    <Skill logo={git} />
                    <Skill logo={github} />
                </div>

            </div>
        </div>
    )
}

export default Skills
