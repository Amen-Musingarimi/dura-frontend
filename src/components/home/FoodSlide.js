import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/productsSlice';
import classes from './FoodSlide.module.css';
import { GrNext, GrPrevious } from 'react-icons/gr';

const FoodSlide = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCardIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, [products]);

  const previousCard = () => {
    setCurrentCardIndex(
      (prevIndex) => (prevIndex - 1 + products.length) % products.length
    );
  };

  const nextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const currentCard = products[currentCardIndex];

  if (!currentCard) {
    return (
      <div className={classes.loadingText}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={classes.sliderContainer}>
      <button className={classes.sliderBtn} onClick={previousCard}>
        <GrPrevious className="icon" />
      </button>
      <div className={classes.sliderCard}>
        <div className={classes.imageNameWrapper}>
          <img
            src={currentCard.image_url}
            alt="ProductImage"
            className={classes.productImage}
          />
          <div className={classes.nameCont}>
            <h3 className={classes.clientName}>{currentCard.name}</h3>
            <span className={classes.hide}>|</span>
            <h3 className={`${classes.clientName} ${classes.hide}`}>
              {currentCard.english_name}
            </h3>
          </div>
        </div>
        <div className={classes.textWrapper}>
          <h3 className={classes.heading}>Product Overview</h3>
          <p className={classes.productDescription}>
            {currentCard.description}
          </p>
        </div>
      </div>
      <button className={classes.sliderBtn} onClick={nextCard}>
        <GrNext className="icon" />
      </button>
    </div>
  );
};

export default FoodSlide;
