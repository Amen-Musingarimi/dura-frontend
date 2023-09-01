import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../../redux/navBarSlice';
import HeaderCartButton from './HeaderCartButton';
import { getLocalStorage } from '../helpers/localStorage';
import {
  logOutUser,
  // toLogin,
  toRegister,
} from '../../redux/authenticationSlice';
import classes from './Header.module.css';

const Header = (props) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.nav.isOpen);
  const isAuthenticated = useSelector((state) => state.auth.token !== null);

  const user = getLocalStorage('user');

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logOutUser());
    navigate('/');
  };

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
    <div className={classes.headerWrapper}>
      <header className={classes.header}>
        <h3 className={classes.logo}>
          D<span className={classes.logoStling}>U</span>R
          <span className={classes.logoStling}>A</span>
        </h3>
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
            Products
          </NavLink>
          <NavLink
            to="/about"
            exact={true}
            activeClassName={classes.active}
            onClick={handleNav}
          >
            About
          </NavLink>
          <section className={classes.navAuthWrapper}>
            {!isAuthenticated && (
              <div>
                {/* <Link to="/auth">
                  <button
                    className={classes.authButton}
                    type="button"
                    onClick={() => {
                      dispatch(toLogin());
                    }}
                  >
                    Log In
                  </button>
                </Link> */}

                <Link to="/auth">
                  <button
                    className={classes.authButton}
                    type="button"
                    onClick={() => {
                      dispatch(toRegister());
                    }}
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            )}
            {isAuthenticated && user && (
              <div>
                <h4 className={classes.username}>{user.name}</h4>
                <button
                  type="button"
                  className={classes.logoutButton}
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  Log Out
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
      <HeaderCartButton
        onClick={() => {
          props.onShowCart();
        }}
      />
    </div>
  );
};

export default Header;
