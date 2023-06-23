import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";

const Footer = () => {
	return (
		<footer>
			<div className="footer-section">
				 <span className="newsletter">Sign up to our newsletter</span>
        <input
          type="email"
          placeholder="Enter your email"
          className="email-required"
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

        

			</div>
		</footer>
	);
};

export default Footer;
