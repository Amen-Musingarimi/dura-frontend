import React from 'react';
import HomeHeader from './HomeHeader';
import HowItWorks from './HowItWorks';
import classes from './Home.module.css';

const Home = () => {
  return (
    <div className={classes.homeContainer}>
      <HomeHeader />
      <HowItWorks />
    </div>
  );
};

export default Home;
