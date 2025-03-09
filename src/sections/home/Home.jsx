import React from 'react'
import styles from "./homeStyles.module.css"
import Image from "../../assets/varun.png"
import sunThemeIcon from "../../../public/icons8-sun-50.png"
import moonThemeIcon from "../../../public/icons8-moon-50.png"
import linkedinLightIcon from "../../../public/icons8-linkedin-50.png"
import linkedinDarkIcon from "../../../public/icons8-linkedin-dark-50.png"
import githubLightIcon from "../../../public/icons8-github-50.png"
import githubDarkIcon from "../../../public/icons8-github-dark-50.png"
import CV from "../../assets/Resume.pdf"
import { useTheme } from '../../common/ThemeContext.jsx'

function Home() {
    const { theme, toggleTheme} = useTheme()

    const themeIcon = theme === 'light' ? sunThemeIcon : moonThemeIcon
    const githubIcon = theme === 'light' ? githubLightIcon : githubDarkIcon
    const linkedinIcon = theme === 'light' ? linkedinLightIcon : linkedinDarkIcon
    return (
        <section id="home" className={styles.container}>
            {/* IMAGE and THEME ICON */}
            <div className={styles.colorModeContainer}>
                {/* Image */}
                <img className={styles.home} src={Image} alt="Profile picture" width={300} height={300}/>
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
            </div>

            {/* ABOUT */}
            <div className={styles.info}>
                <h1>Varun Reddy Chanda</h1>
                <h2>ML Engineer</h2>
                <span>
                    {/* Linkedin */}
                    <a href="https://www.linkedin.com/in/vchanda/" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin Logo" />
                    </a>
                    {/* GitHub */}
                    <a href="https://github.com/varunreddy-ch" target='_blank'>
                        <img src={githubIcon} alt="GitHub Logo" />
                    </a>
                </span>
                <p className={styles.description}>With a passion for building scalable AI and ML solutions that drive innovation and efficiency.</p>
                {/* Resume */}
                <a href={CV} target="_blank" >
                    <button className='hover'>Resume</button>
                </a>
            </div>

        </section>
    )
}

export default Home; 