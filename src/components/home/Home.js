import React from 'react';
import HomeHeader from './HomeHeader';
import HowItWorks from './HowItWorks';
import Catalogue from './Catalogue';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <HomeHeader />
      <HowItWorks />
      <Catalogue />
    </div>
  );
};

export default Home;
