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
    minWidth: 275,
    margin: 30,
    border: "1px solid #AFA9F2",
    borderRadius: "8px",
  },
  advanced: {
    minWidth: 275,
    margin: 30,
    border: "1px solid #AFA9F2",
    borderRadius: "8px",
    backgroundColor: "#756CD9",
    color: "#FFF"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 38,
  },
  products: {
    marginBottom: 12,
  },
  price: {
    fontSize: 48,
    color: "#756CD9"
  },
  buttonPosition: {
    display: "flex",
    alignItems: "center",
    justifyContent: "bottom",
    
  },
  button: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "10px",
    backgroundColor: "#756CD9",
    color: "#FFFFFF",
    width: "170px"
  },
  buttonAdvanced: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "10px",
    backgroundColor: "#AAF2CC",
    color: "#1F4D34",
    width: "170px"
  },
  priceWhite: {
    fontSize: 48,
    color: "#FFF"
  },
});

const CardsPrincing = (props) => {
  const classes = useStyles();
  const { cards } = props;

  return (
    <Card className={cards.title === "Advanced" ? classes.advanced   : classes.root}>
    <CardContent>
      <Typography className={classes.title} gutterBottom>
        {cards.title}
      </Typography>
      
      <Typography className={cards.title === "Advanced" ? classes.priceWhite   : classes.price}>
      {cards.price}
      </Typography>

      <Typography variant="body2" className={classes.products}>
      {cards.products}
      </Typography>

      
      <Typography variant="body2" className={classes.products}>
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
    <CardActions>
    <div className={classes.buttonPosition}>
          <Button size="small" className={cards.title === "Advanced" ? classes.buttonAdvanced   : classes.button}>
            TRY IT FOR FREE
          </Button>
        </div>
    </CardActions>
  </Card>
  );
};

export default CardsPrincing;



// root: {
//   border: "1px solid #AFA9F2",
//   borderRadius: "8px",
//   marginRight: 30,
// },
// media: {
//   height: 140,
// },
// cardContent: {
//   display: "flex",
//   flexDirection: "column"
// },
// price: {
//   display: "flex",
//   justifyContent: "center",
//   color: "#756CD9"
// },
// button: {
//   fontFamily: "Open Sans, sans-serif",
//   fontWeight: 600,
//   size: "10px",
//   backgroundColor: "#756CD9",
//   color: "#FFFFFF",
//   width: "170px"
// },
// buttonPosition: {
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   marginTop: 70
// },
// subText: {
//   display: "flex",
//   justifyContent: "center"
// },
// title: {
//   fontSize: 36
// },