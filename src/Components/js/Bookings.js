import React from 'react';
import "../Css/bookings.css";
import DatatableBookings from './DatatableBookings';

const Bookings = () => {
  return (
    <div className='booking'>
      <div className="bookingcont">
        <DatatableBookings/>
      </div>
    </div>
  )
}

export default Bookings