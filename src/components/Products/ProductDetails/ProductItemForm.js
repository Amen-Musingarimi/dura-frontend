import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../../UI/Input';
import classes from './ProductItemForm.module.css';

const ProductItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const navigate = useNavigate()

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
    navigate('/products')
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
      <button className={classes.addToCartBtn}>+ Add To Cart</button>
      {!amountIsValid && <p>Please enter a valid amount.</p>}
    </form>
  );
};

export default ProductItemForm;
