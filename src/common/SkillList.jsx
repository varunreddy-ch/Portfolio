import React from 'react'
import styles from "../sections/skills/SkillsStyles.module.css"

function SkillList({src, skill}) {
  return (
    <section id="skills" className={styles.container}>
        <span>
                <img src={src} alt="Checkmark Icon"/>
                <p>{skill}</p>
            </span>
    </section>
  )
}

export default SkillList
