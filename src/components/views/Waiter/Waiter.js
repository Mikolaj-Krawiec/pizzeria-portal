import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import classes from './Waiter.module.scss';

const Waiter = props => {
  return (
    <div className={classes.component}>
      <h2>Waiter view</h2>
      <Link to={process.env.PUBLIC_URL +'/waiter/order/new'}>New Order</Link>
      <Link to={process.env.PUBLIC_URL +'/waiter/order/some_order_id'}>Edit some order</Link>
    </div>
  );
};

Waiter.propTypes = {
  children: PropTypes.any,
};

export default Waiter;
