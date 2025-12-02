import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import phone_icon from '../Assets/phone_icon.png'; // Import phone icon
import mail_icon from '../Assets/mail_icon.png'; // Import mail icon
import location_icon from '../Assets/location_icon.png'; // Import location icon

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-column">
        <h3>Contacts</h3>
        <div className="contact-item">
          <img src={phone_icon} alt="Phone" />
          <span>+1 234 5678</span>
        </div>
        <div className="contact-item">
          <img src={phone_icon} alt="Phone" />
          <span>+1 987 6543</span>
        </div>
        <div className="contact-item">
          <img src={mail_icon} alt="Mail" />
          <span>info@example.com</span>
        </div>
        <div className="contact-item">
          <img src={mail_icon} alt="Mail" />
          <span>info@support.com</span>
        </div>
        <div className="contact-item">
          <img src={location_icon} alt="Location" />
          <span>123 Street, City, Country</span>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-center">
          <img src={footer_logo} alt="Logo" />
          <p>Where Pet Love Comes Home: <br/>Discover Your Perfect Companion Today!</p>
        </div>
      </div>
      <div className="footer-column">
        <div className="footer-links">
          
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>Products</li>
            <li>Offices</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="footer-social">
          <img src={instagram_icon} alt="Instagram" />
          <img src={pintester_icon} alt="Pinterest" />
          <img src={whatsapp_icon} alt="WhatsApp" />
        </div>
      </div>
      <div className="footer-bottom">
        <span className="copyright">
          &copy; 2023 - All Right Reserved.
        </span>
        <span className="website">
          www.Purrpal.com
        </span>
        <span className="terms">
          <span className="terms-text">PRIVACY POLICY</span>
          <span className="terms-text">TERMS & CONDITIONS</span>
          <span className="terms-text">SERVICES</span>
          <span className="terms-text">HELP</span>
        </span>
        
      </div>
    </div>
  );
}

export default Footer;