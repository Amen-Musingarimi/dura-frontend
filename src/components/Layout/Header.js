import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../../redux/navBarSlice';
import { getLocalStorage } from '../helpers/localStorage';
import { fetchCart } from '../../redux/cartSlice';
import HeaderCartButton from './HeaderCartButton';
import { logOutUser, toRegister } from '../../redux/authenticationSlice';
import classes from './Header.module.css';

const Header = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.nav.isOpen);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);

  const user = getLocalStorage('user');
  const userEmail = user && user.email;

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutUser());
    dispatch(fetchCart());
    navigate('/');
  };

  const handleNav = () => {
    dispatch(toggleNav());
    setIsBackdropVisible(!isBackdropVisible);
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
      {isBackdropVisible && (
        <div className={classes.backdrop} onClick={handleNav} />
      )}
      <div className={classes.logoCont}>
        <h3 className={classes.logo}>
          D<span className={classes.logoStling}>U</span>R
          <span className={classes.logoStling}>A</span>
        </h3>
        {isAuthenticated && user && (
          <HeaderCartButton onClick={props.onClick} />
        )}
      </div>
      <nav style={isMobile ? navStyle : {}} className={classes.nav}>
        <NavLink
          to="/"
          exact={true.toString()}
          className={classes.navLinks}
          onClick={handleNav}
        >
          HOME
        </NavLink>

        <NavLink
          to="/products"
          exact={true.toString()}
          className={classes.navLinks}
          onClick={handleNav}
        >
          PRODUCTS
        </NavLink>
        <NavLink
          to="/about"
          exact={true.toString()}
          className={classes.navLinks}
          onClick={handleNav}
        >
          ABOUT
        </NavLink>
        {isAuthenticated && (
          <NavLink
            to="/transactions"
            exact={true.toString()}
            className={classes.navLinks}
            onClick={handleNav}
          >
            TRANSACTIONS
          </NavLink>
        )}
        {isAuthenticated && userEmail === 'takudzwamusinga@gmail.com' && (
          <NavLink
            to="/admin"
            exact={true.toString()}
            className={classes.navLinks}
            onClick={handleNav}
          >
            ADMIN
          </NavLink>
        )}
        <section className={classes.navAuthWrapper}>
          {!isAuthenticated && (
            <Link to="/auth">
              <button
                className={classes.authButton}
                type="button"
                onClick={() => {
                  handleNav();
                  dispatch(toRegister());
                }}
              >
                SIGN UP
              </button>
            </Link>
          )}
          {isAuthenticated && (
            <div className={classes.userLogoutCont}>
              <h4 className={classes.username}>{user.username}</h4>
              <button
                type="button"
                className={classes.logoutButton}
                onClick={() => {
                  handleNav();
                  handleLogout();
                }}
              >
                LOG OUT
              </button>
            </div>
          )}
        </section>
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
