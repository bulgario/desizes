import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    border: "1px solid #AFA9F2",
    borderRadius: "8px",
    width: 260,
    height: 350,
    marginRight: 30,
  },
  media: {
    height: 140,
  },
  cardContent: {
    margin: "0 auto",
    width: "50%",
    height: "50%",
  },
  price: {
    display: "flex",
    justifyContent: "center",
    color: "#756CD9"
  },
  button: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "10px",
    backgroundColor: "#756CD9",
    color: "#FFFFFF",
    width: "170px"
  },
  buttonPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 70
  },
  subText: {
    display: "flex",
    justifyContent: "center"
  }
});

const CardsPrincing = (props) => {
  const classes = useStyles();
  const { cards } = props;

  return (

    <Card className={classes.root}>
      <CardActionArea>
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h4" component="h2">
            {cards.title}
          </Typography>
          <Typography variant="body2" variant="h4" className={classes.price} component="p">
            {cards.price}
          </Typography>
          <Typography variant="body2" className={classes.subText} component="p">
            {cards.products}
          </Typography>
          <Typography variant="body2" className={classes.subText} component="p">
            {cards.dashboard}
          </Typography>
          { cards.analytics && (
            <Typography variant="body2" className={classes.subText} component="p">
              {cards.analytics}
            </Typography>
          ) }
          <Typography variant="body2" className={classes.subText} component="p">
            {cards.user}
          </Typography>
        </CardContent>
        <div className={classes.buttonPosition}>
          <Button size="small" className={classes.button}>
            TRY IT FOR FREE
          </Button>
        </div>
      </CardActionArea>
    </Card>
  );
};

export default CardsPrincing;
