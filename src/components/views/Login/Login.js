import React from 'react';
import PropTypes from 'prop-types';
import classes from './Login.module.scss';

import {
  TextField,
  Button,
  Card,
  CardContent,
  CardActions,
} from '@material-ui/core';

const Login = (props) => {
  return (
    <div className={classes.component}>
      <form className={classes.root} noValidate autoComplete="off">
        <Card className={classes.card}>
          <CardContent>
            <TextField className={classes.input} size="small" label="Login" variant="outlined" />
            <TextField className={classes.input} size="small" label="password" variant="outlined" />
          </CardContent>
          <CardActions>
            <Button size="large">Log in</Button>
          </CardActions>
        </Card>
      </form>
    </div>
  );
};

Login.propTypes = {
  children: PropTypes.any,
};

export default Login;
