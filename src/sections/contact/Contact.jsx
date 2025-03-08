import React from 'react'
import styles from "./ContactSyles.module.css"

function Contact() {
  return (
    <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        {/* FORM */}
        <form action=""></form>
        <div className="formGroup">
            {/* NAME */}
            <label htmlFor="name" className="name" hidden>Name</label>
            <input type="text" name="name" id="name" placeholder="Name" required/>
        </div>
        <div className="formGroup">
            {/* EMAIL */}
            <label htmlFor="email" className="email" hidden>Email</label>
            <input type="text" name="email" id="email" placeholder="email" required/>
        </div>
        <div className="formGroup">
            {/* MESSAGE */}
            <label htmlFor="message" className="message" hidden>Message</label>
            <textarea name="message" id="message" placeholder='Message' required></textarea>
        </div>
        <input className="hover btn" name="submit" type='submit' value="Submit"/>
    </section>
  )
}

export default Contact
