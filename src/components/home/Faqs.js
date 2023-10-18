import React, { useState } from 'react';
import { FAQsDataArr } from '../helpers/Data';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import classes from './Faqs.module.css';

const Faqs = () => {
  const [openCardIndex, setOpenCardIndex] = useState(-1);

  const toggleDetails = (index) => {
    if (openCardIndex === index) {
      setOpenCardIndex(-1);
    } else {
      setOpenCardIndex(index);
    }
  };

  const sectionHeadingText =
    window.innerWidth > 768 ? 'Frequently asked questions' : 'FAQs';

  return (
    <div className={classes.faqsContainer}>
      <h3 className={classes.sectionHeading}>{sectionHeadingText}</h3>
      <div className={classes.faqCardsContainer}>
        {FAQsDataArr.map((card, index) => (
          <div className={classes.faqCard} key={index}>
            <div
              className={classes.cardHeader}
              onClick={() => toggleDetails(index)}
            >
              <h3 className={classes.cardName}>{card.question}</h3>
              <div className={classes.cardButtons}>
                <button
                  className={classes.toogleDetailsBtn}
                  onClick={() => toggleDetails(index)}
                >
                  {openCardIndex === index ? (
                    <AiOutlineMinus />
                  ) : (
                    <AiOutlinePlus />
                  )}
                </button>
              </div>
            </div>
            {openCardIndex === index && (
              <p className={classes.cardDescription}>{card.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
