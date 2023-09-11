import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './FoodSlide.module.css';

const FoodSlide = ({ foods }) => {
  const [currentFoodIndex, setCurrentFoodIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFoodIndex((prevIndex) => (prevIndex + 1) % foods.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [foods]);

  return (
    <div className={classes.foodSlide}>
      <div className={classes.headerContainer}>
        <img
          src={foods[currentFoodIndex]?.image}
          alt="FoodImage"
          className={classes.foodImage}
        />
        <div className={classes.fooDetails}>
          <h2 className={classes.foodName}>
            {foods[currentFoodIndex]?.name} |{' '}
            {foods[currentFoodIndex]?.englishName}
          </h2>
          <p className={classes.foodDescription}>
            {foods[currentFoodIndex]?.description}
          </p>
          <Link to="/products" className={classes.navigateLink}>
            DISCOVER MORE
          </Link>
        </div>
      </div>
      <div className={classes.callToActionSticker}>
        <div className={classes.whiteBorder}>
          <span className={classes.from}>From</span>
          <span className={classes.lowestPrice}>
            ${foods[currentFoodIndex]?.price}
          </span>
          <p>Shop Now</p>
        </div>
      </div>
    </div>
  );
};

export default FoodSlide;
