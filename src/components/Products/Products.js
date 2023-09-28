import React from 'react';
import AvailableProducts from './AvailableProducts';
import ProductsHeader from './ProductsHeader';
import classes from './Products.module.css';

const Products = () => {
  return (
    <div className={classes.sectionContainer}>
      <ProductsHeader />
      <AvailableProducts />
    </div>
  );
};

export default Products;
