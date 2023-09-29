import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchCart } from '../../../redux/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../UI/Input';
import classes from './ProductItemForm.module.css';

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    // Check if entered quantity is greater than total_units
    if (enteredAmountNumber > props.totalUnits) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    dispatch(fetchCart());
    navigate('/products');
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.inputsContainer}>
        <label>
          How many kgs do you want today? <br />
        </label>
        <Input
          ref={amountInputRef}
          input={{
            id: 'quantity_' + props.id,
            type: 'number',
            min: '1',
            max: '1000',
            step: '1',
            defaultValue: '1',
          }}
        />
      </div>
      {!amountIsValid && (
        <p className={classes.outOfStockMessage}>
          Sorry we're only left with {props.totalUnits}
          {props.measurementUnit} in stock. Choose a quantity less than or equal
          to that.
        </p>
      )}
      {!isAuthenticated && <Link to="/auth">Log In To Start Buying</Link>}
      {isAuthenticated && (
        <button className={classes.addToCartBtn}>+ Add To Cart</button>
      )}
    </form>
  );
};

export default ProductItemForm;
