import React from 'react'
import Project from './Project'
import './Projects.css'
import valorant from '../image/valorant.PNG'
import pwaprojct from '../image/pwa.PNG'
import netflix from '../image/netflix.PNG'

function Projects() {
    return (
        <div className='projects' id="projects">
            <h1>Project</h1>
            <div class="projects_container">
                <Project url="https://valorantinf.netlify.app/" pct={valorant} desk="Web valorant adalah web penyedia informasi mengenai game valorant, mulai dari agent, skill agents, senjata, dan map!" title="ValorantInfo" />
                <Project url="https://netflix-clone-ddac7.firebaseapp.com/" pct={netflix} desk="Netflix clone adalah sebuah website yang dibuat menyerupai tampilan netflix original." title="Netflix Clone" />
                <Project url="https://footballfo-f68f6.web.app/" pct={pwaprojct} desk="Pwa Football adalah sebuah website penyedia informasi liga bola inggris, club, standings liga dan menambah daftar klub favorite!" title="Pwa Football" />
            </div>
        </div>
    )
}

export default Projects
