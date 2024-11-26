import React, { useRef, useState } from "react";
import "./Contact.css";
import { FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa"; // For icons
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_0r9cdlp", // Replace with your EmailJS service ID
        "template_9jlfelk", // Replace with your EmailJS template ID
        form.current,
        "xUnBp6q7FMSjF_8nA" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSent(true); // Show success message
          form.current.reset(); // Reset form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-container">
      <div className="content-box">
        <div className="contact-header">
          <div className="contact-intro">
            <h1>Contact</h1>
            <p>
              I'm always open to new opportunities and collaborations! Whether
              you're interested in discussing a potential project, internship,
              or simply want to connect, feel free to reach out. I'm so excited to hear from you and please feel free to reach out and talk about anything!
            </p>
          </div>
          <div className="contact-image">
            <img
              src={require("../files/contact.png")} // Replace with the correct image path
              alt="Contact"
            />
          </div>
        </div>
        <div className="contact-form-container">
          <h2>Let's Chat</h2>
          <div className="contact-info">
            <p>
              <strong>Phone:</strong> (469)-619-3990
            </p>
            <p>
              <a href="mailto:aasthatx@gmail.com" target="_blank" rel="noreferrer">
                <FaEnvelope /> aasthatx@gmail.com
              </a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/aastha-sharma-21377b278/" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" />
              </a>{" "}
              <a href="https://www.instagram.com/aasthasharrma/" target="_blank" rel="noreferrer">
                <FaInstagram className="icon" />
              </a>
            </p>
          </div>
          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <input type="text" name="user_name" placeholder="First Name" required />
              <input type="text" name="user_lastname" placeholder="Last Name" required />
            </div>
            <div className="form-group">
              <input type="email" name="user_email" placeholder="Email" required />
            </div>
            <div className="form-group">
              <textarea name="message" placeholder="Message" rows="5" required></textarea>
            </div>
            <button type="submit" className="submit-button">
              Send Message
            </button>
            {isSent && <p className="success-message">Message sent successfully!</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
