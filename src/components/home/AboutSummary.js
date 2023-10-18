import React, { useState, useEffect } from 'react';
import { AboutUsImagesArr } from '../helpers/Data';
import classes from './AboutSummary.module.css';
import { Link } from 'react-router-dom';

const AboutSummary = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex(
        (prevIndex) => (prevIndex + 1) % AboutUsImagesArr.length
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentImage = AboutUsImagesArr[currentCardIndex];

  return (
    <div className={classes.aboutSummaryCont}>
      <div className={classes.imagesSlideCont}>
        <img
          src={currentImage.image}
          alt="AboutImage"
          className={classes.image}
        />
      </div>
      <div className={classes.textContainer}>
        <h3 className={classes.sectionHeading}>About Us</h3>
        <p className={classes.aboutDescription}>
          Dura is your online marketplace for authentic Zimbabwean traditional
          foods. Designed to cater to every traditional food lover, we are a hub
          of all your traditional foods.
        </p>
        <p className={classes.aboutDescription}>
          To make your culinary journey easy, we ask for a 30% commitment fee
          when you place your order. This allows us to deliver the essence of
          Zimbabwean culture right to your doorstep within Harare. Enjoy the
          convenience and flavors that connect you with your heritage.
        </p>
        <Link to="/about" className={classes.aboutLink}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default AboutSummary;
