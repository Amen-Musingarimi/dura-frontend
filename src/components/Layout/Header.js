import React, { Fragment, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../../redux/navBarSlice';
import HeaderCartButton from './HeaderCartButton';
import mealsImage from '../../assets/grain.jpg';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';

const Header = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.nav.isOpen);

  const handleNav = () => {
    dispatch(toggleNav());
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1024);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
        <nav style={isMobile ? navStyle : {}} className={classes.nav}>
          <NavLink
            to="/"
            exact={true}
            activeClassName={classes.active}
            onClick={handleNav}
          >
            Home
          </NavLink>
          <NavLink
            to="/shop"
            exact={true}
            activeClassName={classes.active}
            onClick={handleNav}
          >
            Shop
          </NavLink>
          <HeaderCartButton
            onClick={() => {
              handleNav();
              props.onShowCart();
            }}
          />
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
