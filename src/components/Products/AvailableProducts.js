import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProductsAsync } from '../../redux/productsSlice';
import ProductItem from './ProductItem/ProductItem';
import classes from './AvailableProducts.module.css';

const AvailableProducts = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  const ProductsList = products.map((prod) => (
    <ProductItem
      key={prod.id}
      id={prod.id}
      name={prod.name}
      englishName={prod.english_name}
      description={prod.description}
      image={prod.image_url}
      price={prod.price}
      quantity={prod.total_units}
      unit={prod.measurement_unit}
    />
  ));

  return (
    <section className={classes.meals}>
      <ul>{ProductsList}</ul>
    </section>
  );
};

export default AvailableProducts;
