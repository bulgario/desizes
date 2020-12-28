import React from "react";
import { makeStyles, Button } from "@material-ui/core";

import emailIcon from "../../assets/emailIcon.png";

const useStyles = makeStyles(() => ({
  input: {
    borderRadius: "5px",
    width: "500px",
    height: "70px",
    border: "#fff"
  },
  subscribe: {
    display: "flex",
    alignItems: "center",
    width: "700px",
    height: "100px",
    borderRadius: "7px",
    borderColor: "grey",
    border: "solid",
  },
  button: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "10px",
    backgroundColor: "#756CD9",
    color: "#FFFFFF",
    width: "160px",
    height: "45px",
    marginRight: "20px"
  },
  emailIcon: {
    marginLeft: "20px",
    marginRight: "10px"
  }
}));


const Subscribe = () => {
  const classes = useStyles();

  return (
    <div className={classes.subscribe}>
        <img 
          className={classes.emailIcon} 
          src={emailIcon}
        />
        <input
          type="text"
          placeholder="Drop your email address"
          className={classes.input}
        />
    <Button className={classes.button}>
      SUBSCRIBE
    </Button>
  </div>
  )
};

export default Subscribe;