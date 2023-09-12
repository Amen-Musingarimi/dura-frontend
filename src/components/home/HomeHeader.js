import React from 'react';
import { Link } from 'react-router-dom';
import classes from './HomeHeader.module.css';

const HomeHeader = () => {
  return (
    <div className={classes.homeContainer}>
      <div className={classes.welcomeTextContainer}>
        <p className={classes.smallMessage}>Welcome to, </p>
        <h1>Dura | The Zim Flavors Hub.</h1>
        <p className={classes.averageText}>
          Discover and savor the rich essence of Zimbabwean culture through our
          premium selection of raw, traditional foods. Experience the tastes
          that have been cherished for generations.{' '}
        </p>
        <Link to="/about" className={classes.learnMoreLink}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default HomeHeader;
