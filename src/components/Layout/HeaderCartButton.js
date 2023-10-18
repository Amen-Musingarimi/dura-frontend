import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import classes from './HeaderCartButton.module.css';
import { fetchCart } from '../../redux/cartSlice';

const HeaderCartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const numberOfCartItems = cartItems.reduce((curNumber, item) => {
    return curNumber + item.quantity;
  }, 0);

  return (
    <button className={classes.cartBtnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <AiOutlineShoppingCart />
      </span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;