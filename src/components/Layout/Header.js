import { Fragment } from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/grain.jpg';
import classes from './Header.module.css';
import logo from '../../assets/logo.png';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} alt="logoImage" className={classes.logo} />
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
