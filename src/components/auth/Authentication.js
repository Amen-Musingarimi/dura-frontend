import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  handleUpdate,
  logInUser,
  registerUser,
  toggleFormAuth,
  clearErrors,
} from '../../redux/authenticationSlice';
import classes from './Authentication.module.css';

const Authentication = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    token,
    errors,
    tempUser: { name, password, confirmPassword },
  } = useSelector((state) => state.auth);

  const formAuth = useSelector((state) => state.auth.formAuth);

  useEffect(() => {
    dispatch(clearErrors());
  }, [dispatch, formAuth]);

  const handleLogIn = (e) => {
    e.preventDefault();

    dispatch(logInUser({ name, password }));
  };

  const handleRegister = () => {
    dispatch(registerUser({ user: { name, password } }));
    dispatch(toggleFormAuth());
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(handleUpdate({ name, value }));
  };

  useEffect(() => {
    if (token) {
      navigate('/home');
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formAuth === 'login') {
      handleLogIn(e);
    } else {
      handleRegister(e);
    }
  };

  return (
    <div className={classes.authFormsContainter}>
      <div className={classes.authFormCallToActionText}>
        <h3 className={classes.authAppName}>Dura | The Zim Flavors Hub</h3>
        <p className={classes.welcomeMessage}>
          Discover the Essence of Tradition in Every Bite! Sign up or log in now
          to access a world of authentic Zimbabwean flavors. Shop our collection
          of premium traditional raw foods and bring home the taste of heritage.
          Your journey to unique nourishment begins here!
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h3 className="auth-title">
          {formAuth === 'login' ? 'Log In' : 'Register'}
        </h3>
        {errors && <p className={classes.authErrorMessage}>{errors}</p>}
        <input
          type="text"
          placeholder="name"
          id="name"
          name="name"
          value={name}
          onChange={(e) => handleChange(e)}
          className={classes.authFormInput}
          required
        />

        <input
          type="password"
          placeholder="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => handleChange(e)}
          className={classes.authFormInput}
          required
        />

        {formAuth === 'register' && (
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => handleChange(e)}
            className={classes.authFormInput}
            required
          />
        )}
        <div className={classes.authButtonsContainer}>
          <button type="submit" className={classes.registerBtn}>
            {formAuth === 'login' ? 'Log In' : 'Register'}
          </button>
          {formAuth === 'login' ? (
            <>
              <p className={classes.promptMessage}>
                Don&apos;t have an account?
              </p>
              <button
                type="button"
                className={classes.navigateBtn}
                onClick={() => dispatch(toggleFormAuth())}
              >
                Register
              </button>
            </>
          ) : (
            <>
              <p className={classes.promptMessage}>Already have an account?</p>
              <button
                type="button"
                className={classes.navigateBtn}
                onClick={() => dispatch(toggleFormAuth())}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default Authentication;
