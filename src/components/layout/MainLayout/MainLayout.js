import React from 'react';
import PropTypes from 'prop-types';
// import classes from './*.module.scss';

import PagNav from '../PagNav/PagNav';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Container from '@material-ui/core/Container';

const MainLayout = (props) => {
  return (
    <div>
      <AppBar>
        <Container maxWidth='lg'>
          <Toolbar disableGutters>
            <PagNav />
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth='lg'>
        <Toolbar/>
        {props.children}
      </Container>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.any,
};

export default MainLayout;
