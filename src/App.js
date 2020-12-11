import React from 'react';
import { makeStyles } from '@material-ui/core';
import './App.css';

import Home from './components/Home';

const useStyles = makeStyles(() => ({
  home: {
     backgroundColor: "#E5E5E5",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Home className={classes.home}/>
  );
}

export default App;
