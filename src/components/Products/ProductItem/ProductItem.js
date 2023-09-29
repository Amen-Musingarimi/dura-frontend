import { Link } from 'react-router-dom';
import classes from './ProductItem.module.css';
import { useSelector } from 'react-redux';
import { getLocalStorage } from '../../helpers/localStorage';

const ProductItem = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const user = getLocalStorage('user');
  const userEmail = user && user.email;

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
        {isAuthenticated && userEmail === 'takudzwamusinga@gmail.com' && (
          <p className={classes.remainingUnits}>
            {props.quantity} {props.unit} Remaining
          </p>
        )}
      </Link>
    </li>
  );
};

export default ProductItem;
