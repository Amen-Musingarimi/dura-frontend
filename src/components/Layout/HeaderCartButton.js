import { useSelector } from 'react-redux';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import classes from './HeaderCartButton.module.css';

const HeaderCartButton = (props) => {
  const cartItems = useSelector((state) => state.cart.items);

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
