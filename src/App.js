import React from 'react';
import { makeStyles } from '@material-ui/core';
import './App.css';

import Home from './components/Home';

const useStyles = makeStyles(() => ({
  home: {
    margin: 0,
    padding: 0,
    border: 'none',
    outline: 'none',
  }
}));

function App() {
  const classes = useStyles();

  return (
    <Home className={classes.home}/>
  );
}

export default App;
