import React from 'react';
import { ReasonsDataArr } from '../helpers/Data';
import classes from './WhyUs.module.css';

const WhyUs = () => {
  return (
    <div className={classes.sectionContainer}>
      {ReasonsDataArr.map((reason) => (
        <div className={classes.reasonCard} key={reason.id}>
          <span className={classes.reasonIcon}>{reason.icon}</span>
          <h3 className={classes.reasonName}>{reason.name}</h3>
          <p className={classes.reasonDescription}>{reason.description}</p>
        </div>
      ))}
    </div>
  );
};

export default WhyUs;
