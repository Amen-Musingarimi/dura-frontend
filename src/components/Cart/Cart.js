import { useDispatch, useSelector } from 'react-redux';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { addItem, removeItem, clearCart } from '../../redux/cartSlice';

const Cart = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const totalAmount = cartItems
    .reduce((acc, item) => {
      return acc + item.price * item.amount;
    }, 0)
    .toFixed(2);
  const hasItems = cartItems.length > 0;

  const cartItemRemoveHandler = (id) => {
    dispatch(removeItem(id));
  };

  const cartItemAddHandler = (item) => {
    dispatch(addItem({ ...item, amount: 1 }));
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
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={clearCartHandler}>
          Cancel
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
