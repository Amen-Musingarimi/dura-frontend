import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import { toggleNav } from '../../redux/navBarSlice';
import { getLocalStorage } from '../helpers/localStorage';
import HeaderCartButton from './HeaderCartButton';
import { logOutUser, toRegister } from '../../redux/authenticationSlice';
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
    <header className={classes.header}>
      <div className={classes.logoCont}>
        <h3 className={classes.logo}>
          D<span className={classes.logoStling}>U</span>R
          <span className={classes.logoStling}>A</span>
        </h3>
        <HeaderCartButton onClick={props.onClick} />
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
        <NavLink
          to="/contact"
          exact={true.toString()}
          className={classes.navLinks}
          onClick={handleNav}
        >
          CONTACT US
        </NavLink>
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
          {isAuthenticated && user && (
            <div>
              <h4 className={classes.username}>{user}</h4>
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
