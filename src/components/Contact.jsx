import emailjs from "@emailjs/browser";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import swal from "sweetalert";

import "../styles/Contact.css";
import { useState } from "react";
const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm("gmail", "molaraichemail", e.target, "wSBTaHlmVvLcwkP0O");
    swal(
      "Good job!",
      "Your message has been sent i will reply in average of 24h!",
      "success"
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact">
      <div className="container">
        <h1>
          <span className="titleColor">Contact</span>me
        </h1>

        <div className="contactform">
          <form onSubmit={sendEmail}>
            <div className="form-grp">
              <input
                required
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="form-grp">
              <input
                required
                type="email"
                name="email"
                id="email"
                value={email}
                placeholder="Your email adress"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-grp">
              <textarea
                required
                placeholder="Write a message"
                name="message"
                id="message"
                value={message}
                cols="30"
                rows="10"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <div className="form-btn">
              <input type="submit" value="Send" />
            </div>
          </form>

          <div className="sociale">
            <div className="socialHolder">
              <a
                href="https://www.linkedin.com/in/molaraiche/"
                rel="noreferrer"
                target="_blank"
              >
                <LinkedInIcon />
              </a>

              <a
                href="https://www.twitter.com/molaraiche/"
                rel="noreferrer"
                target="_blank"
              >
                <TwitterIcon />
              </a>

              <a
                href="https://github.com/molaraiche"
                rel="noreferrer"
                target="_blank"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
