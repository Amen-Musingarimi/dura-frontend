import React from 'react';
import AboutSummary from '../home/AboutSummary';
import WhyUs from '../home/WhyUs';
import Faqs from '../home/Faqs';
import Testimonials from '../home/Testimonials';
import ProductsSummary from './ProductsSummary';
import classes from './About.module.css';

const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <ProductsSummary />
      <AboutSummary />
      <WhyUs />
      <Faqs />
      <Testimonials />
    </div>
  );
};

export default About;
