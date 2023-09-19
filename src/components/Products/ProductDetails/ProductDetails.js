import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addItem } from '../../../redux/cartSlice';
import ProductItemForm from './ProductItemForm';
import Card from '../../UI/Card';
import classes from './ProductDetails.module.css';

const findFoodById = (foodArray, id) => {
  return foodArray.find((item) => item.id === id);
};

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.product);
  const foundProduct = findFoodById(products, parseInt(id));

  const addToCartHandler = (quantity) => {
    dispatch(
      addItem({
        id: id,
        name: foundProduct.name,
        amount: quantity,
        price: foundProduct.price,
      })
    );
  };

  return (
    <Card>
      <div className={classes.productDetailsContainer}>
        <img src={foundProduct.image} alt="ProductImage" />
        <div className={classes.productTextContainer}>
          <div className={classes.productNames}>
            <h3>{foundProduct.name}</h3>
            <span> | </span>
            <h3>{foundProduct.englishName}</h3>
          </div>
          <p className={classes.productPrice}>${foundProduct.price}</p>
          <p className={classes.productAvailability}>
            Availability <span>: In Stock</span>
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
};

export default ProductDetails;
