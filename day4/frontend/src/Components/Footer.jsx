import { BsTwitter } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-section-one">
        <div className="footer-logo-container">
          <h2>YogaZen</h2>
        </div>
        <div className="footer-icons">
        
          <BsTwitter />
          <SiLinkedin />
          <BsYoutube />
          <FaFacebookF />
        </div>
      </div>
      <div className="footer-section-two">
        <div className="footer-section-columns">
          <span><Link className="mobile-links" to={'/'}>Home</Link></span>
          <span><Link className="mobile-links" to={'/about'}>About</Link></span>
          <span><Link className="mobile-links" to={'/contact'}>Contact</Link></span>
        </div>
        <div className="footer-section-columns">
          <span>244-5333-7783</span>
          <span>press@yogazen.com</span>
          <span>contact@yogazen.com</span>
        </div>
        <div className="footer-section-columns">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
