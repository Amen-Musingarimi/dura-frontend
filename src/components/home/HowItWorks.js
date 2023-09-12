import React from 'react';
import { HowItWorksArr } from '../helpers/Data';
import classes from './HowItWorks.module.css';
import { Link } from 'react-router-dom';

const HowItWorks = () => {
  return (
    <div className={classes.sectionContainer}>
      <h2 className={classes.sectionHeading}>How It Works</h2>
      <div className={classes.instructionCont}>
        {HowItWorksArr.map((instruction) => (
          <div className={classes.instructionCard} key={instruction.id}>
            <span className={classes.stepNumber}>{instruction.id}. </span>
            <div className={classes.cardDetails}>
              <div className={classes.icon}>{instruction.icon}</div>
              <p className={classes.cardInstruction}>
                {instruction.instruction}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link to="/auth" className={classes.signInRedirectBtn}>
        Sign In Now
      </Link>
    </div>
  );
};

export default HowItWorks;
