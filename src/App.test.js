import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BookingPage from './components/BookingPage';
import Booking from './components/Booking';

describe('BookingPage', () => {
  it('should update the selected date and trigger dispatch with the correct action', () => {
    const dispatchMock = jest.fn();
    const availableTimes = ['10:00 AM', '12:00 PM', '2:00 PM', '4:00 PM', '6:00 PM'];

    const { getByLabelText } = render(
      <BookingPage availableTimes={availableTimes} dispatch={dispatchMock} />
    );

    const dateInput = getByLabelText('Choose date');
    fireEvent.change(dateInput, { target: { value: '2023-05-25' } });

    expect(dateInput.value).toBe('2023-05-25');
    expect(dispatchMock).toHaveBeenCalledTimes(1);
    expect(dispatchMock).toHaveBeenCalledWith({
      type: 'UPDATE_TIMES',
      payload: { date: '2023-05-25' },
    });
  });

  // Add more tests for other form fields and interactions if needed
});

describe('Booking', () => {
  it('should render BookingPage component with initial available times', () => {
    
    const { getByLabelText } = render(<Booking />);
    const timeSelect = getByLabelText('Time:');
    const options = timeSelect.querySelectorAll('option');

    expect(options).toHaveLength(1);
 
  });

  // Add more tests for the behavior of the Booking component if needed
});
describe('Booking', () => {
  it('should render BookingPage component with updated available times', () => {
    const { getByLabelText, rerender } = render(<Booking />); // Render the component
    const dateInput = getByLabelText('Choose date');

    fireEvent.change(dateInput, { target: { value: '2023-05-25' } }); // Change the date to '2023-05-25'

    rerender(<Booking />); // Re-render the component with the updated date

    const timeSelect = getByLabelText('Time:');
    const options = timeSelect.querySelectorAll('option');

    expect(options).toHaveLength(6);
  
  });

  // Other test cases...
});
