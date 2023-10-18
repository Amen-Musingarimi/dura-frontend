import React, { useState } from 'react';
import classes from './ContactForm.module.css';
import { AiOutlineMinus } from 'react-icons/ai';

const ContactForm = ({ onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      fetch('https://formspree.io/f/mzbqzrae', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });
      setName('');
      setEmail('');
      setMessage('');
    }

    if (!name) {
      setErrorName('Name is required');
      return;
    }
    setErrorName(' ');

    if (!email) {
      setErrorEmail('Email is required');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrorEmail('Email is not valid');
    } else {
      setErrorEmail(' ');
    }

    if (!message) {
      setErrorMessage('Message is required');
    } else {
      setErrorMessage(' ');
    }
  };

  return (
    <div className={`${classes.overlay} ${classes.slideIn}`}>
      <div className={`${classes.contactForm} ${classes.slideInForm}`}>
        <div className={classes.closeFormCont}>
          Dura
          <button className={classes.closeButton} onClick={onClose}>
            <AiOutlineMinus />
          </button>
        </div>
        <form onSubmit={handleSubmit} className={classes.form}>
          <div className={classes.inputCover}>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              name="full-name"
              placeholder="Full Name"
              className={classes.formInput}
              required
            />
            {errorName && <div className="error">{errorName}</div>}
          </div>
          <div className={classes.inputCover}>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              name="email"
              placeholder="johndoe@gmail.com"
              className={classes.formInput}
              required
            />
            {errorEmail && <div className="error">{errorEmail}</div>}
          </div>
          <div className={classes.inputCover}>
            <textarea
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              placeholder="Write your message here"
              name="message"
              className={classes.messageInput}
              required
            />
            {errorMessage && <div className="error">{errorMessage}</div>}
          </div>
          <button className={classes.formSubmitBtn} type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
