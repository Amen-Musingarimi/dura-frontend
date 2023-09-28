import React from 'react';
import grainsImage from '../../assets/Types-of-Grains.webp';
import classes from './ProductsHeader.module.css';

const ProductsHeader = () => {
  return (
    <div className={classes.pageHeader}>
      <img
        src={grainsImage}
        alt="GrainsHeader"
        className={classes.grainsImage}
      />
    </div>
  );
};

export default ProductsHeader;
