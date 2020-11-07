import React from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <form></form>
    </Paper>
  );
};

export default Form;
