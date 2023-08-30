import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../../redux/navBarSlice';
import HeaderCartButton from './HeaderCartButton';
import logo from '../../assets/dura.jpg';
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
    <header className={classes.header}>
      <Link to="/" exact={true}>
        <img src={logo} alt="logoImage" className={classes.logo} />
      </Link>
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
          to="/products"
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
  );
};

export default Header;
