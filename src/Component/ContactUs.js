import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, push } from 'firebase/database';
import 'bootstrap/dist/css/bootstrap.min.css';
import classes from './ContactUs.module.css';

const firebaseConfig = {
  databaseURL: 'https://ecommerce-web-ba88b-default-rtdb.firebaseio.com/',
};

const firebaseApp = initializeApp(firebaseConfig);

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const db = getDatabase(firebaseApp);
    const dbRef = ref(db, 'contacts');

    push(dbRef, formData).then(() => {
      alert('Data submitted successfully!');

      setFormData({
        name: '',
        email: '',
        phoneNumber: '',
      });

      navigate('/');
    });
  };

  return (
    <div className={classes['contact-us']}>
      <h2 className={classes.contact}>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className={classes['mb-3']}>
          <label htmlFor="name" className={classes['form-label']}>
            Name:
          </label>
          <input
            type="text"
            className={classes['form-control']}
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['mb-3']}>
          <label htmlFor="email" className={classes['form-label']}>
            Email:
          </label>
          <input
            type="email"
            className={classes['form-control']}
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className={classes['mb-3']}>
          <label htmlFor="phoneNumber" className={classes['form-label']}>
         Phone Number:
          </label>
          <input
            type="tel"
            className={classes['form-control']}
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className={classes['btn-primary']}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUs;