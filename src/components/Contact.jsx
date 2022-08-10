import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Contact.css";
const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h1>
          <span className="titleColor">Contact</span>me
        </h1>

        <div className="contactform">
          <form action="">
            <div className="form-grp">
              <input required type="text" placeholder="Your Name" />
            </div>
            <div className="form-grp">
              <input required type="email" placeholder="Your email adress" />
            </div>
            <div className="form-grp">
              <textarea
                required
                placeholder="Write a message"
                name=""
                id=""
                cols="30"
                rows="10"
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
