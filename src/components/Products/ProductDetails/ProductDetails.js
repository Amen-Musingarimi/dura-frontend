import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemAsync } from '../../../redux/cartSlice';
import { getProductsAsync } from '../../../redux/productsSlice';
import ProductItemForm from './ProductItemForm';
import Card from '../../UI/Card';
import classes from './ProductDetails.module.css';

const findProductById = (productArray, id) => {
  return productArray.find((item) => item.id === id);
};

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.product);
  const foundProduct = findProductById(products, parseInt(id));

  const [isLoading, setIsLoading] = useState(!foundProduct);

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [status, dispatch]);

  useEffect(() => {
    if (foundProduct) {
      setIsLoading(false);
    }
  }, [foundProduct]);

  const addToCartHandler = (quantity) => {
    dispatch(
      addItemAsync({
        product_id: id,
        quantity: quantity,
      })
    );
  };

  if (isLoading) {
    return (
      <div className={classes.loadingText}>
        <p>Loading...</p>
      </div>
    );
  }

  if (!foundProduct) {
    return (
      <div className={classes.errorText}>
        <p>Product not found.</p>
      </div>
    );
  }

  const availabilityText =
    foundProduct.total_units > 1 ? 'In Stock' : 'Out Of Stock';

  return (
    <Card>
      <div className={classes.productDetailsContainer}>
        <img src={foundProduct.image_url} alt="ProductImage" />
        <div className={classes.productTextContainer}>
          <div className={classes.productNames}>
            <h3>{foundProduct.name}</h3>
            <span> | </span>
            <h3>{foundProduct.english_name}</h3>
          </div>
          <p className={classes.productPrice}>${foundProduct.price}</p>
          <p className={classes.productAvailability}>
            Availability <span>: {availabilityText}</span>
          </p>
          <div className={classes.border}></div>
          <p className={classes.productDescription}>
            {foundProduct.description}
          </p>
          <div className={classes.cartForm}>
            <ProductItemForm
              id={foundProduct.id}
              totalUnits={foundProduct.total_units}
              onAddToCart={addToCartHandler}
              measurementUnit={foundProduct.measurement_unit}
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProductDetails;
