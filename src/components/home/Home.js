import React from 'react';
import HomeHeader from './HomeHeader';
import HowItWorks from './HowItWorks';
import Catalogue from './Catalogue';
import AboutSummary from './AboutSummary';
import WhyUs from './WhyUs';
import Testimonials from './Testimonials';
import Faqs from './Faqs';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <HomeHeader />
      <AboutSummary />
      <WhyUs />
      <HowItWorks />
      <Catalogue />
      <Testimonials />
      <Faqs />
    </div>
  );
};

export default Home;
