import React from "react";
import { Typography, makeStyles, Card, CardContent } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #AFA9F2",
    borderRadius: "8px",
    width: 250,
    height: 230,
    marginRight: 30
  },
  titleCard: {
    fontSize: 14,
    color: "#000"
  },
  posCard: {
    fontSize: 10
  },
  cardContent: {
    margin: "0 auto",
    width: "50%",
    height: "50%"
  },
  img: {
    marginBottom: "30px"
  },
  subTitle: {
    fontSize: 10,
    color: "#000"
  },
}));

const CardsGuessing = (props) => {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
    <CardContent className={classes.cardContent}>
      <img src={props.cards.img} className={classes.img} />
      <Typography className={classes.titleCard} color="textSecondary" gutterBottom>
        {props.cards.title}
      </Typography>
      <Typography className={classes.posCard} color="textSecondary">
        {props.cards.subTitle}
      </Typography>
    </CardContent>
  </Card>
  );
};

export default CardsGuessing;