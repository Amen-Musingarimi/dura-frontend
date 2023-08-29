import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/grain.jpg';
import logo from '../../assets/logo.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../../redux/navBarSlice';
import classes from './Header.module.css';

const Header = (props) => {
  const dispatch = useDispatch();

  const isOpen = useSelector((state) => state.nav.isOpen);

  const handleNav = () => {
    dispatch(toggleNav());
  };

  const navStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    height: '100%',
    width: '60%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    gap: '2rem',
    backgroundColor: '#fff',
    transition: '1s',
    transform: isOpen ? 'none' : 'translate(-100vh)',
  };

  return (
    <Fragment>
      <header className={classes.header}>
        <img src={logo} alt="logoImage" className={classes.logo} />
        <nav style={navStyle}>
          <NavLink
            to="/"
            exact="true"
            activeclassname="active"
            onClick={handleNav}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            exact="true"
            activeclassname="active"
            onClick={handleNav}
          >
            Shop
          </NavLink>
          <HeaderCartButton onClick={props.onShowCart} />
          <button className={classes.closeMobileNav} onClick={handleNav}>
            <FaTimes />
          </button>
        </nav>
        <button className={classes.openMobileNav} onClick={handleNav}>
          <FaBars />
        </button>
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
