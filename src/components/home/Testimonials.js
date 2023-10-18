import React from 'react';
import { TestimonialsDataArr } from '../helpers/Data';
import { ImQuotesRight } from 'react-icons/im';
import classes from './Testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={classes.testimonialContainer}>
      <h3 className={classes.sectionHeading}>Testimonials</h3>
      <div className={classes.cardsContainer}>
        {TestimonialsDataArr.map((testimonial) => (
          <div className={classes.testimonialCard} key={testimonial.id}>
            <span className={classes.reasonIcon}>
              <ImQuotesRight />
            </span>
            <p className={classes.testimonial}>{testimonial.testimonial}</p>
            <div className={classes.userContainer}>
              <img
                src={testimonial.image}
                alt="UserImage"
                className={classes.userImage}
              />
              <div className={classes.userNameCont}>
                <h3 className={classes.reasonName}>{testimonial.name}</h3>
                <p className={classes.role}>Customer</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
