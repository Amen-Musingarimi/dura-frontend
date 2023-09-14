import { Link } from 'react-router-dom';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <li className={classes.mealWrapper}>
      <Link to={`/products/${props.id}`} className={classes.meal}>
        <img
          src={props.image}
          alt="ProductImage"
          className={classes.productImage}
        />
        <div className={classes.productText}>
          <h3>{props.name}</h3>
          <span> | </span>
          <h3>{props.englishName}</h3>
        </div>
        <p className={classes.price}>
          ${props.price} / <span>{props.unit}</span>
        </p>
      </Link>
    </li>
  );
};

export default ProductItem;
