import React from 'react'
import Styles from "../sections/skills/SkillsStyles.module.css"

function SkillList({src, skill}) {
  return (
    <section id="skills" className={Styles.container}>
        <span>
                <img src={src} alt="Checkmark Icon"/>
                <p>{skill}</p>
            </span>
    </section>
  )
}

export default SkillList
