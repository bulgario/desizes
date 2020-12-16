import React from 'react';

import { 
  AppBar,
  Toolbar,
  makeStyles,
  Button
} from '@material-ui/core';

import desizesLogo from '../../assets/desizesLogo.png';

const useStyles = makeStyles(() => ({
  header: {
     backgroundColor: "#FFFFFF",
     paddingRight: "79px",
     paddingLeft: "100px",
     boxShadow: "none",
     position: "static"
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "18px",
    marginLeft: "38px",
    textTransform: "none"
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between"
  },
  tryItForFreeButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "10px",
    marginLeft: "38px",
    backgroundColor: "#756CD9",
    color: "#FFFFFF",
    width: "170px"
  }
}));

const Header = () => {
  const classes = useStyles();

  const buttonList = () => (
    <>
      <Button className={classes.menuButton}>
        How it works
      </Button>
      <Button className={classes.menuButton}>
        Clients
      </Button>
      <Button className={classes.menuButton}>
        About
      </Button>
      <Button className={classes.tryItForFreeButton}>
        TRY IT FOR FREE
      </Button>
    </>
  );

  const displayBar = () => (
    <Toolbar className={classes.toolbar}>
      <img  src={desizesLogo} />
      <div>
        {buttonList()}
      </div>
    </Toolbar>
  );


  return (
    <header>
      <AppBar className={classes.header}>
        {displayBar()}
      </AppBar>
    </header>
  )
}

export default Header;