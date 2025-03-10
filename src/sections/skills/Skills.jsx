import React from 'react'
import Styles from "./SkillsStyles.module.css"
import checkMarkIconLight from "../../../public/icons8-check-mark-50.png"
import checkMarkIconDark from "../../../public/icons8-check-mark-dark-50.png"
import SkillList from '../../common/SkillList'
import { useTheme } from '../../common/ThemeContext.jsx'

function Skills() { 
  const { theme, toggleTheme} = useTheme()

  const checkMarkIcon = theme === 'light' ? checkMarkIconLight : checkMarkIconDark;
  return (
    <section id="skills" className={Styles.container}>
        <h1 className={Styles.sectionTitle}>Skills</h1>
        <div className={Styles.skillList}>
            <SkillList src={checkMarkIcon} skill="C"/>
            <SkillList src={checkMarkIcon} skill="C++"/>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
        </div>
        <hr />
        <div className={Styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML/CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="NodeJS"/>
            <SkillList src={checkMarkIcon} skill="ExpressJS"/>
            <SkillList src={checkMarkIcon} skill="ReactJS"/>
        </div>
        <hr />
        <div className={Styles.skillList}>
            <SkillList src={checkMarkIcon} skill="TensorFlow"/>
            <SkillList src={checkMarkIcon} skill="Pytorch"/>
            <SkillList src={checkMarkIcon} skill="Pandas"/>
            <SkillList src={checkMarkIcon} skill="Numpy"/>
            <SkillList src={checkMarkIcon} skill="Seaborn"/>
        </div>
        <hr />
        <div className={Styles.skillList}>
            <SkillList src={checkMarkIcon} skill="MySQL"/>
            <SkillList src={checkMarkIcon} skill="MySQLite"/>
            <SkillList src={checkMarkIcon} skill="MongoDB"/>
        </div>
        <hr />
        <div className={Styles.skillList}>
            <SkillList src={checkMarkIcon} skill="AWS"/>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="GitHub"/>
        </div>
    </section>
  )
}

export default Skills
