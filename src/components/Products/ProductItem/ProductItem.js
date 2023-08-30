import { Link } from 'react-router-dom';
import classes from './ProductItem.module.css';

const ProductItem = (props) => {
  return (
    <li>
      <Link to={`/details/${props.id}`} className={classes.meal}>
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
      </Link>
    </li>
  );
};

export default ProductItem;
