import { useDispatch } from 'react-redux';
import ProductItemForm from './ProductItemForm';
import classes from './ProductItem.module.css';
import { addItem } from '../../../redux/cartSlice';

const ProductItem = (props) => {
  const dispatch = useDispatch();

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    dispatch(
      addItem({
        id: props.id,
        name: props.name,
        amount: amount,
        price: props.price,
      })
    );
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <ProductItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default ProductItem;
