import React from 'react';
import grainsImage from '../../assets/Types-of-Grains.webp';
import AboutSummary from '../home/AboutSummary';
import WhyUs from '../home/WhyUs';
import Faqs from '../home/Faqs';
import Testimonials from '../home/Testimonials';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.pageHeader}>
        <img
          src={grainsImage}
          alt="GrainsHeader"
          className={classes.grainsImage}
        />
      </div>
      <AboutSummary />
      <WhyUs />
      <Faqs />
      <Testimonials />
    </div>
  );
};

export default About;
