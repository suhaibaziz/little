import React, { useEffect, useState } from 'react';
import '../index.css';
import * as Yup from 'yup';
import { message } from 'antd';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import img from'../images/221..jpeg';
import {motion} from'framer-motion';
import moimg from'../images/reserve.png';
import Roimg from'../images/R.png';
import MotionGraphic from './MotionGraphic';

const BookingPage = ({ availableTimes, dispatch }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('select an occasion');

  const validationSchema = Yup.object().shape({
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    guests: Yup.number()
      .required('Number of guests is required')
      .min(1, 'Number of guests must be at least 1')
      .max(10, 'Number of guests cannot exceed 10'),
    occasion: Yup.string().required('What is your occasion?'),
  });

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: 'UPDATE_TIMES', payload: { date: selectedDate } });
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleGuestsChange = (e) => {
    setGuests(e.target.value);
  };

  const handleOccasionChange = (e) => {
    setOccasion(e.target.value);
  };

  const handleSubmit = (values) => {
    // Perform form submission or further processing here
   
    
    message.success('Form submitted successfully!');
    console.log('Form submitted', values);
  };

  return (<div>
    
    <h1 className='head-booking'>Booking the table </h1>
    <div className="table-details-container">
  
    <MotionGraphic img={moimg}/>
    <MotionGraphic img={Roimg}/>
    <MotionGraphic img={moimg}/>
    
      <div className="table-details">
        <img src={img} alt="Table" className="table-image" />
        <div className="table-info">
          <div className="table-location">Location : <span style={{color:"yellow",textShadow:'1px 1px 1px black'}}>Next the door 5 steps</span></div>
          <div className="table-number">Table Number :<span style={{color:"yellow",textShadow:'1px 1px 1px black'}}> 5</span> </div>
        </div>
      </div>
      </div>
    <Formik
      initialValues={{
        date: '',
        time: '',
        guests: 1,
        occasion: 'select an occasion',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isValid, errors, touched, values }) => (
        <Form className="booking-form">
          <label htmlFor="res-date">Choose date</label>
          <Field
            type="date"
            id="res-date"
            name="date"
            onChange={(e) => {
              handleDateChange(e);
              values.date = e.target.value;
            }}
          />
          <ErrorMessage name="date" component="div" className="error-message" />

          <label htmlFor="time">Time:</label>
          <Field
            as="select"
            name="time"
            id="time"
            className="time-select"
            onChange={(e) => {
              handleTimeChange(e);
              values.time = e.target.value;
            }}
          >
            <option value="">Select a time</option>
            {availableTimes.map((availableTime, index) => (
              <option key={index} value={availableTime}>
                {availableTime}
              </option>
            ))}
          </Field>
          <ErrorMessage name="time" component="div" className="error-message" />

          <label htmlFor="guests">Number of guests</label>
          <Field
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            name="guests"
            onChange={(e) => {
              handleGuestsChange(e);
              values.guests = e.target.value;
            }}
          />
          <ErrorMessage name="guests" component="div" className="error-message" />

          <label htmlFor="occasion">Occasion</label>
          <Field
            as="select"
            name="occasion"
            id="occasion"
            onChange={(e) => {
              handleOccasionChange(e);
              values.occasion = e.target.value;
            }}
          >
            <option value="">Select occasion</option>
            <option>Birthday</option>
            <option>Anniversary</option>
          </Field>
          <ErrorMessage name="occasion" component="div" className="error-message" />

 <motion.button
 whileHover={{
  scale:1.2,
  textShadow:"0px 0px 8px rgb(255,255,255)",
  boxShadow:"0px 0px 8px rgb(255,255,255)",
 }}
            type="submit"
            className="submit-input"
            disabled={!isValid}
          >
            Make Your Reservation
          </motion.button>
         
        </Form>
      )}
    </Formik>
    </div>
  );
};

export default BookingPage;
