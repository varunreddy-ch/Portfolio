import React from 'react'
import styles from "./SkillsStyles.module.css"
import checkMarkIconLight from "../../../public/icons8-check-mark-50.png"
import checkMarkIconDark from "../../../public/icons8-check-mark-dark-50.png"
import SkillList from '../../common/SkillList'

function Skills() { 
  const checkMarkIcon = checkMarkIconLight;
  return (
    <section id="skills" className={styles.container}>
        <h1 className="secionTitle">Skills</h1>
        <div className={styles.skillList}>

            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="NodeJS"/>
            <SkillList src={checkMarkIcon} skill="ReactJS"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="HTML"/>
        </div>
    </section>
  )
}

export default Skills
