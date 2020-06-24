import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import classes from './PagNav.module.scss';

import Button from '@material-ui/core/Button';

const PagNav = props => {
  return (
    <nav className={classes.component}>
      <Button className={classes.link} component={NavLink} exact to={`${process.env.PUBLIC_URL}/`} activeClassName='active'>Home</Button>
      <Button className={classes.link} component={NavLink} to={`${process.env.PUBLIC_URL}/login`} activeClassName='active'>Login</Button>
      <Button className={classes.link} component={NavLink} to={`${process.env.PUBLIC_URL}/tables`} activeClassName='active'>Tables</Button>
      <Button className={classes.link} component={NavLink} to={`${process.env.PUBLIC_URL}/kitchen`} activeClassName='active'>Kitchen</Button>
      <Button className={classes.link} component={NavLink} to={`${process.env.PUBLIC_URL}/waiter`} activeClassName='active'>Waiter</Button>
    </nav>
  );
};

PagNav.propTypes = {
  children: PropTypes.any,
};

export default PagNav;
