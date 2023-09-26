import classes from './CartItem.module.css';

const CartItem = (props) => {
  const price = parseFloat(props.price);
console.log(props.measurementUnit)

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>${price}</span>
          <span className={classes.amount}>x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={() => props.onRemove(props.id)}>−</button>
        <button
          onClick={() => props.onAdd({ ...props, amount: props.amount + 1 })}
        >
          +
        </button>
      </div>
    </li>
  );
};

export default CartItem;
