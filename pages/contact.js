import React, { useState, useRef } from 'react'
import emailjs from 'emailjs-com'
import styles from "../styles/contact.module.css"
// require("dotenv").config();


const Result = () => {
  return <div className={styles.alert}>
    <span className={styles.closebtn} onClick="this.parentElement.style.display='none';">&times;</span>
    Message Received , I will contact you soon .
  </div>
}

const Contact = () => {
  const [result, showResult] = useState(false)
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm( "service_ftbwm8u" , 'template_b45ovgn', form.current, 'user_CvIqJknBdJFcbiVenLmJp')
      .then((result) => {
        console.log("Success");
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    showResult(true)
  };
  setTimeout(() => {
    showResult(false);
  }, 5000)

  return (
    <div className={styles.contactme} id="contact">
      <div className={styles.contactOverlay}>
        <div className={styles.container}>
          <div className={styles.form}>
            <form action="" ref={form} onSubmit={sendEmail}>
              <div className={styles.formWord}>
                <h2>Say Hello!</h2>
                <span>Full Name</span>
                <br />
                <input className={styles.input100} type="text" name="fullName" required />
                <br />
                <span>Phone Number</span>
                <br />
                <input className={styles.input100} type="text" name="phone" required />
                <br />
                <span>Enter Email</span>
                <br />
                <input className={styles.input100} type="text" name="email" required />
                <br />
              </div>
              <div className={styles.formWord}>
                <div className={styles.msg}>
                  <span >Message</span>
                </div>
                <br />
                <textarea name="message" required></textarea>
                <br />
                <button>SUBMIT</button>
                <div className="row">{result ? <Result /> : null}</div>
                
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact