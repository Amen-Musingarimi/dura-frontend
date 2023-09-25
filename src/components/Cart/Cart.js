import { useDispatch, useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import { AiOutlineClose } from 'react-icons/ai';
import {
  removeItemAsync,
  updateItemAsync,
  clearCart,
} from '../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';
import { getLocalStorage } from '../helpers/localStorage';
import classes from './Cart.module.css';

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const user = getLocalStorage('user');
  const navigate = useNavigate();
  console.log(isAuthenticated, user);

  const orderHandler = () => {
    if (isAuthenticated) {
      console.log('User is authenticated. Implement the order logic here.');
    } else {
      navigate('/auth');
      props.onClose();
    }
  };

  const totalAmount = cartItems
    .reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0)
    .toFixed(2);

  const hasItems = cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(removeItemAsync(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(updateItemAsync(item));
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
            name={item.name}
            amount={item.amount}
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
