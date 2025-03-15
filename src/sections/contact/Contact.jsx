import React from 'react'
import styles from "./ContactSyles.module.css"
import linkedinLightIcon from "../../../public/icons8-linkedin-50.png"
import linkedinDarkIcon from "../../../public/icons8-linkedin-dark-50.png"
import { useTheme } from '../../common/ThemeContext.jsx'
function Contact() {
  const { theme, toggleTheme} = useTheme()
  const linkedinIcon = theme === 'light' ? linkedinLightIcon : linkedinDarkIcon
  
  function copyPhoneNo() {
    navigator.clipboard.writeText(8638882030);
    alert("Copied the Contact :)")
  }
  
  function copyEmailId() {
    navigator.clipboard.writeText(8638882030);
    alert("Copied the Contact :)")
  }

  let email = document.getElementById("EmailId")
  // email.onclick = copyEmailId()
  let phone = document.getElementById("PhoneNo")
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <p id='EmailId'>Email me at <b>vchanda1006@gmail.com</b></p>
      <p id="PhoneNo">Text me at <b>+(863)888-2030</b></p>
      <div className={styles.linkedinDiv}>
        <p id="Linkedin"> Connect me at</p>
        <a href="https://www.linkedin.com/in/vchanda/" target='_blank'>
              <img className={styles.linkedinImg} src={linkedinIcon} alt="Linkedin Logo"/>
          </a>
      </div>
    </section>
    // <section id="contact" className={styles.container}>

    //     <h1 className="sectionTitle">Contact</h1>
    //     {/* FORM */}
    //     <form action="https://formspree.io/f/xblgjggl" method='POST'></form>

    //     <div className="formGroup">
    //         {/* NAME */}
    //         <label htmlFor="name" className="name" hidden>Name</label>
    //         <input type="text" name="name" id="name" placeholder="Name" required/>
    //     </div>
    //     <div className="formGroup">
    //         {/* EMAIL */}
    //         <label htmlFor="email" className="email" hidden>Email</label>
    //         <input type="text" name="email" id="email" placeholder="email" required/>
    //     </div>
    //     <div className="formGroup">
    //         {/* MESSAGE */}
    //         <label htmlFor="message" className="message" hidden>Message</label>
    //         <textarea name="message" id="message" placeholder='Message' required></textarea>
    //     </div>
    //     <button className="hover btn" name="submit" type='submit' value="Submit"/>
    // </section>
  )
}

export default Contact
