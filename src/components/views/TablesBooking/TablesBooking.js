import React from 'react';
import PropTypes from 'prop-types';
import classes from './TablesBooking.module.scss';

const TablesBooking = props => {
  let content = props.match.params.id;
  if(props.match.params.id === 'new') {
    content = 'Book tables';
  }

  return (
    <div className={classes.component}>
      <h2>TablesBooking view</h2>
      <h3>{content}</h3>
    </div>
  );
};

TablesBooking.propTypes = {
  children: PropTypes.any,
  match: PropTypes.object,
};

export default TablesBooking;
