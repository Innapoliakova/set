import React, { useState } from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer>
      <div className="footer-section">
      <form
          action="https://codeyourfuture.us14.list-manage.com/subscribe/post?u=e1b6978d5b6510703a76a9a80&amp;id=a97f8e5cb9"
          method="post"
          id=""
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >

        <span className="newsletter">Sign up to our newsletter</span>
        <input
          // type="email"
          // placeholder="email address"
          // className="email-required"
          type="email"
                  value={email}
                  name="EMAIL"
                  placeholder="email address"
                  className={`email-required ${email ? "has-value" : ""}`}
                  id="mce-EMAIL"
                  onChange={handleEmailChange}

        />

        <button className="button">Subscribe</button>
        <a href="https://www.facebook.com/codeyourfuture.io">
        <FacebookRoundedIcon className="fb" />
      </a>
  <a href="https://twitter.com/CodeYourFuture">
          <TwitterIcon className="tw" />
        </a>
        <a href="https://www.linkedin.com/company/codeyourfuture/mycompany/">
          <LinkedInIcon className="link" />
        </a>
        <a href="https://www.instagram.com/codeyourfuture_/">
          <InstagramIcon className="instag" />
        </a>
        <a href="https://github.com/CodeYourFuture">
          <GitHubIcon className="github" />
        </a>
        <a href="mailto:london@codeyourfuture.io">
          <EmailRoundedIcon className="email" />
        </a>
</form>
    <div className="footer-bottom">
          <p>
            © All rights reserved | Registered{" "}
            <a href="https://register-of-charities.charitycommission.gov.uk/charity-details/?regid=1174929&subid=0">
              UK
            </a>
            and{" "}
            <a href="https://www.oscr.org.uk/about-charities/search-the-register/charity-details?number=SC050753">
              Scottish
            </a>{" "}
            charity | <a href="feedback">Send website feedback</a>
          </p>
        </div>


      </div>
    </footer>
  );
};

export default Footer;
