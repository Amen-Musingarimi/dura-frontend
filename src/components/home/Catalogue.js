import React from 'react';
import FoodSlide from './FoodSlide';
import classes from './Catalogue.module.css';

const Catalogue = () => {
  return (
    <div className={classes.homeCatalogueCont}>
      <h2 className={classes.sectionHeading}>From Our Catalogue</h2>
      <FoodSlide />
    </div>
  );
};

export default Catalogue;
