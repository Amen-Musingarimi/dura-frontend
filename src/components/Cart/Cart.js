import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { getLocalStorage } from '../helpers/localStorage';
import { AiOutlineClose } from 'react-icons/ai';
import {
  removeItemAsync,
  updateItemAsync,
  clearCart,
  fetchCart,
} from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import classes from './Cart.module.css';

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => {
    const products = state.product.products;
    const cartItems = state.cart.items;
  
    const groupedItems = cartItems.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.product_id === item.product_id);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        const product = products.find((p) => p.id === item.product_id);
        acc.push({
          ...item,
          name: product.name,
          price: product.price,
        });
      }
      return acc;
    }, []);
  
    return groupedItems;
  });

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const user = getLocalStorage('user');
  const navigate = useNavigate();

  const orderHandler = () => {
    if (isAuthenticated & user) {
      console.log('User is authenticated. Implement the order logic here.');
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
    dispatch(clearCart());
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
