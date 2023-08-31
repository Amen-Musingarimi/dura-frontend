import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/productsSlice';
import FoodSlide from './FoodSlide';
import classes from './Home.module.css';

const Home = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

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
      </div>
      <FoodSlide foods={products} />
    </div>
  );
};

export default Home;
