import React from 'react';
import PropTypes from 'prop-types';
// import classes from './*.module.scss';

import PagNav from '../PagNav/PagNav';

const MainLayout = props => {
  return (
    <div>
      <PagNav/>
      {props.children}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
