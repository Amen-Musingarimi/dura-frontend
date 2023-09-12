import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaYoutube, FaLinkedin } from 'react-icons/fa';
import classes from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <h2 className={classes.sectionHeading}>Dura</h2>
      <p className={classes.sectionDescription}>
        Unlock the Rich Tastes of Zimbabwean Tradition.
      </p>
      <div className={classes.detailsContainer}>
        <div className={classes.firstDiv}>
          <h3 className={classes.heading}>
            Traditional Healthy Food in Your Budget
          </h3>
          <Link to="/products" className={classes.orderLink}>
            Order Now
          </Link>
        </div>
        <div className={classes.addressDiv}>
          <div className={classes.physicalAddress}>
            <h3 className={classes.heading}>Our Office</h3>
            <p className={classes.street}>1015, 21st Street</p>
            <p className={classes.street}>Harare, Zimbabwe</p>
          </div>
          <div className={classes.physicalAddress}>
            <h3 className={classes.heading}>Contact</h3>
            <a
              href="mailto: takudzwamusinga@gmail.com"
              className={classes.street}
            >
              takudzwamusinga@gmail.com
            </a>
            <p className={classes.street}>+263 71-253-9755</p>
          </div>
        </div>
        <div className={classes.physicalAddress}>
          <h3 className={classes.heading}>Explore</h3>
          <Link to="/" className={classes.street}>
            Home
          </Link>
          <Link to="/about" className={classes.street}>
            About
          </Link>
          <Link to="/contact" className={classes.street}>
            Contact
          </Link>
          <Link to="/about" className={classes.street}>
            FAQS
          </Link>
        </div>
        <div className={classes.physicalAddress}>
          <h3 className={classes.heading}>Follow Us</h3>
          <div className={classes.socialLinks}>
            <a
              href="https://www.facebook.com/profile.php?id=100008430154593"
              target="_blank"
              rel="noreferrer"
              className={classes.street}
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com/tunchi_a"
              target="_blank"
              rel="noreferrer"
              className={classes.street}
            >
              <FaTwitter />
            </a>
            <a
              href="#home"
              target="_blank"
              rel="noreferrer"
              className={classes.street}
            >
              <FaYoutube />
            </a>
            <a
              href="https://www.linkedin.com/in/atmusingarimi/"
              target="_blank"
              rel="noreferrer"
              className={classes.street}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
