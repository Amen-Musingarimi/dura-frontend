import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { AiOutlineClose } from 'react-icons/ai';
import {
  removeItemAsync,
  updateItemAsync,
  clearCartAsync,
  fetchCart,
} from '../../redux/cartSlice';
import { getProductsAsync } from '../../redux/productsSlice';
import { createPurchaseHistoryAsync } from '../../redux/transactionsSlice';
import { useNavigate } from 'react-router-dom';
import classes from './Cart.module.css';

const Cart = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAsync());
  }, [dispatch]);

  const products = useSelector((state) => state.product.products);

  const cartItems = useSelector((state) => {
    return state.cart.items.map((item) => {
      const product = products.find(
        (product) => product.id === item.product_id
      );
      return {
        ...item,
        name: product.name,
        price: product.price,
      };
    });
  });

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const navigate = useNavigate();

  const orderHandler = () => {
    if (isAuthenticated) {
      dispatch(createPurchaseHistoryAsync());
      dispatch(fetchCart());
      props.onClose();
    } else {
      navigate('/auth');
      props.onClose();
    }
  };

  const totalAmount = cartItems
    .reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0)
    .toFixed(2);

  const hasItems = cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(removeItemAsync(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(
      updateItemAsync({
        id: item.id,
        product_id: item.product_id,
        quantity: item.quantity + 1,
      })
    );
  };

  const clearCartHandler = () => {
    dispatch(clearCartAsync());
    props.onClose();
  };

  return (
    <Modal onClose={props.onClose}>
      <ul className={classes['cart-items']}>
        <div className={classes.closeBtnConntainer}>
          <button className={classes.closeButton} onClick={props.onClose}>
            <AiOutlineClose />
          </button>
        </div>
        {cartItems.map((item) => (
          <CartItem
            key={item.id}
            product_id={item.product_id}
            name={item.name}
            amount={item.quantity}
            price={item.price}
            onRemove={() => cartItemRemoveHandler(item.id)}
            onAdd={() => cartItemAddHandler(item)}
          />
        ))}
      </ul>
      <div className={classes.total}>
        <span className={classes.cartHeadings}>Total Amount</span>
        <span className={classes.totalAmount}>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={clearCartHandler}>
          Cancel
        </button>
        {hasItems && (
          <button className={classes.button} onClick={orderHandler}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
