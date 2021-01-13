import React from 'react';

import { 
  AppBar,
  Toolbar,
  makeStyles,
  Button
} from '@material-ui/core';

import desizesLogo from '../../assets/desizesLogo.png';
import desizesLandingPage from "../../assets/desizesLandingPage.png";

const useStyles = makeStyles(() => ({
  header: {
     backgroundImage: `url(${desizesLandingPage})`,
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
    textTransform: "none",
    color: "#FFF"
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
    backgroundColor: "#AAF2CC",
    color: "#1F4D34",
    width: 125
  }
}));

const Header = () => {
  const classes = useStyles();

  const buttonList = () => (
    <>
      <Button className={classes.menuButton}>
        FEATURES
      </Button>
      <Button className={classes.menuButton}>
        BENEFITS
      </Button>
      <Button className={classes.menuButton}>
        PRICING
      </Button>
      <Button className={classes.menuButton}>
        LET'S TALK
      </Button>
      <Button className={classes.tryItForFreeButton}>
        TRY IT OUT
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
      <AppBar className={classes.header}>
        {displayBar()}
      </AppBar>
  )
}

export default Header;