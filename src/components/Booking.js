import React, { useState, useReducer, useEffect } from 'react';
import BookingPage from "./BookingPage";
import { fetchAPI, submitAPI } from './Api';

const initialState = {
  availableTimes: []
};

const reducer = (state, action) => {


  if (action.type === 'UPDATE_TIMES') {
    const { date } = action.payload;
    const times = fetchAPI(date);
    return ({ availableTimes: times });
  }
  return state;
};

const Booking = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { availableTimes } = state;


  return (
    <BookingPage availableTimes={availableTimes} dispatch={dispatch} />
  );
};

export default Booking;
