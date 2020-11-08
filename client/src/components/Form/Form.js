import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import useStyles from './styles';

const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const classes = useStyles();

  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete='off'
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant='h6'>Creating a Memory</Typography>
        <TextField
          name='creator'
          variant='outlined'
          label='Creator'
          fullWidth
          value={postData.creator}
          onChange={(event) =>
            setPostData({ ...postData, creator: event.target.value })
          }
        />
        <TextField
          name='title'
          variant='outlined'
          label='Title'
          fullWidth
          value={postData.title}
          onChange={(event) =>
            setPostData({ ...postData, title: event.target.value })
          }
        />
        <TextField
          name='message'
          variant='outlined'
          label='Message'
          fullWidth
          value={postData.message}
          onChange={(event) =>
            setPostData({ ...postData, message: event.target.value })
          }
        />
        <TextField
          name='tags'
          variant='outlined'
          label='Tags'
          fullWidth
          value={postData.tags}
          onChange={(event) =>
            setPostData({ ...postData, tags: event.target.value })
          }
        />
      </form>
    </Paper>
  );
};

export default Form;
