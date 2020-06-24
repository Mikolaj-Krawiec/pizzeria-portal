import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Tables.module.scss';

const Tables = props => {
  return (
    <div className={classes.component}>
      <h2>Tables view</h2>
      <Link to={process.env.PUBLIC_URL +'/tables/booking/new'}>Book table</Link>
      <Link to={process.env.PUBLIC_URL +'/tables/booking/some_booking_id'}>Edit some booking</Link>
      <Link to={process.env.PUBLIC_URL +'/tables/events/new'}>Add event</Link>
      <Link to={process.env.PUBLIC_URL +'/tables/events/some_event_id'}>Edit some event</Link>
    </div>
  );
};

Tables.propTypes = {
  children: PropTypes.any,
};

export default Tables;
