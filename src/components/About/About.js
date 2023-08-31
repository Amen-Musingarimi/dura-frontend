import React, { useState } from 'react';
import classes from './About.module.css';
import truck from '../../assets/services1.svg';
import securePayment from '../../assets/services2.svg';
import moneyBack from '../../assets/services3.svg';
import avaibility from '../../assets/services4.svg';

const About = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  const toggleFullStory = () => {
    setShowFullStory(!showFullStory);
  };

  return (
    <div className={classes.aboutContainer}>
      <div className={classes.aboutImageContainer}>
        <div className={classes.aboutImageWrapper}>
          <h3 className={classes.aboutUsHeading}>About Us</h3>
        </div>
      </div>
      <div className={classes.ourStoryContainer}>
        <h3 className={classes.ourStoryHeading}>Our Story</h3>
        <div className={classes.ourStoryDescription}>
          <p>
            Dura came to life from a shared yearning for the tastes that truly
            define our Zimbabwean identity. It all started with a simple desire:
            to find and savor the traditional foods that we grew up cherishing.
          </p>
          <p>
            It was during this journey, in the midst of the hassle and the
            heartache of longing for a taste of home, that we encountered
            something truly special. Along the way, we met fellow Zimbabwean
            food enthusiasts who were on the same journey of seeking
            authenticity, tradition, and connection through the foods we hold
            dear.
          </p>
          {showFullStory ? (
            <>
              <p>
                Through shared stories of wandering markets, reminiscing about
                family gatherings, and swapping recipes passed down through
                generations, we realized that we were part of a larger community
                — a community that shared the same fervor for our culinary
                heritage. This serendipitous connection gave birth to Dura, a
                platform dedicated to making the flavors of our culture
                accessible to all.
              </p>
              <p>
                As we forged ahead, we were fueled by a dual purpose: to ensure
                that the traditional foods we remember remain accessible, and to
                create a space where our fellow food lovers can come together to
                celebrate, savor, and share in the vibrant tapestry of
                Zimbabwean cuisine.
              </p>
              <p>
                Dura isn't just an app; it's a tribute to the journey we've all
                embarked upon, a journey that's as much about preserving the
                past as it is about embracing the future. We invite you to be a
                part of our collective tale, to savor the tastes that connect
                us, and to honor the culinary mosaic that is uniquely
                Zimbabwean.
              </p>
              <p>With gratitude for every step of the journey,</p>
              <p>The Dura Team</p>
              <button
                className={classes.seeMoreButton}
                onClick={toggleFullStory}
              >
                See Less
              </button>
            </>
          ) : (
            <>
              <button
                className={classes.seeMoreButton}
                onClick={toggleFullStory}
              >
                Continue Reading
              </button>
            </>
          )}
        </div>
      </div>
      <div className={classes.servicesDiv}>
        <div className={classes.serviceContainer}>
          <img src={truck} alt="TruckIcon" />
          <h4 className={classes.serviceHeading}>Fast & Free Delivery</h4>
          <p className={classes.serviceDescription}>Free CBD delivery</p>
        </div>
        <div className={classes.freeDelivery}>
          <img src={securePayment} alt="PaymentIcon" />
          <h4 className={classes.serviceHeading}>Secure Payment</h4>
          <p className={classes.serviceDescription}>Pay on delivery</p>
        </div>
        <div className={classes.freeDelivery}>
          <img src={moneyBack} alt="MoneyIcon" />
          <h4 className={classes.serviceHeading}>Money Back Guarantee</h4>
          <p className={classes.serviceDescription}>Commitment fee returned </p>
        </div>
        <div className={classes.freeDelivery}>
          <img src={avaibility} alt="AvailableIcon" />
          <h4 className={classes.serviceHeading}>Online Support</h4>
          <p className={classes.serviceDescription}>
            Availbe 24/7 to assist you
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
