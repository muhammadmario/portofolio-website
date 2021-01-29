import React from 'react'
import './Skill.css'

function Skill({ logo }) {
    return (
        <div className="skill">
            <div class="logo">
                <img src={logo} alt="logo" />
            </div>
        </div>
    )
}

export default Skill
