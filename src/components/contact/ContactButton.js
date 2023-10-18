import React, { useState } from 'react';
import ContactForm from './ContactForm';
import classes from './ContactButton.module.css';

const ContactButton = () => {
  const [showForm, setShowForm] = useState(false);

  const openForm = () => {
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
  };

  return (
    <>
      <button className={classes.contactButton} onClick={openForm}>
        Contact Us
      </button>
      {showForm && <ContactForm onClose={closeForm} />}
    </>
  );
};

export default ContactButton;
