import AnimatedButton from './AnimatedButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import logo from "../assets/logo/Logo.svg";

const SocialLinks = () => {
  return (
    <div className="SocialLinks" style={{ display: "flex", gap: "20px", fontSize: "24px" }}>
      <a href="mailto:alexchai@xcalex.com" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>

      <a href="https://github.com/alexchai6913" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGithub} />
      </a>

      <a href="https://linkedin.com/in/alecxchai6913" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
    </div>
  );
};

const Navbar = ({ props }) => {
  return (
    <div className="Navbar">
      <div className="container">
        <img src={logo} alt="Logo" style={{ height: "32px" }} />

        <div className="ButtonWrapper">
          <SocialLinks />
          <AnimatedButton icon_before="sms" icon_after="arrow_forward" />
        </div>
      </div>

    </div>
  );
};

export default Navbar;
