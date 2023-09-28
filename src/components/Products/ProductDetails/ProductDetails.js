import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItemAsync } from '../../../redux/cartSlice';
import { getProductsAsync } from '../../../redux/productsSlice';
import ProductItemForm from './ProductItemForm';
import Card from '../../UI/Card';
import classes from './ProductDetails.module.css';

const findFoodById = (foodArray, id) => {
  return foodArray.find((item) => item.id === id);
};

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products, status } = useSelector((state) => state.product);
  const foundProduct = findFoodById(products, parseInt(id));

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getProductsAsync());
    }
  }, [status, dispatch]);

  const addToCartHandler = (quantity) => {
    dispatch(
      addItemAsync({
        product_id: id,
        quantity: quantity,
      })
    );
  };

  const availabilityText =
    foundProduct.total_units > 1 ? 'In Stock' : 'Out Of Stock';

  if (!foundProduct) {
    return (
      <div className={classes.loadingText}>
        <p>Loading...</p>
      </div>
    );
  }

  if (foundProduct) {
    const imageUrl = foundProduct.image
      ? `data:${foundProduct.image.content_type};base64,${foundProduct.image.data}`
      : '';

    return (
      <Card>
        <div className={classes.productDetailsContainer}>
          <img src={imageUrl} alt="ProductImage" />
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
                onAddToCart={addToCartHandler}
              />
            </div>
          </div>
        </div>
      </Card>
    );
  }

  return <div>Product not found</div>;
};

export default ProductDetails;
