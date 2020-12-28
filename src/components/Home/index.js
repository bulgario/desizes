import React from "react";
import { Typography, makeStyles, Grid, Button } from "@material-ui/core";

import videoPreview from "../../assets/video-preview.png";
import wand from "../../assets/wand.png";
import hassle from "../../assets/hassle.png";
import omni from "../../assets/omni.png";
import visual from "../../assets/visual.png";
import dataDrivenDashboard from "../../assets/dataDrivenDashboard.png";
import returningCustomers from "../../assets/returningCustomers.png";

import Header from "../Header";
import CardsGuessing from "../CardsGuessing";
import CardsPrincing from "../CardsPricing";
import Subscribe from "../Subscribe";

const useStyles = makeStyles(() => ({
  title: {
    font: "bold",
    maxWidth: "100%",
  },
  subtitle: {
    maxWidth: "100%",
    marginBottom: 50
  },
  tryItForFreeButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "10px",
    marginLeft: "38px",
    backgroundColor: "#756CD9",
    color: "#FFFFFF",
    width: "250px",
    height: "50px"
  },
  watchVideo: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 600,
    size: "10px",
    marginLeft: "38px",
    color: "#FFFFFF",
    width: "250px",
    height: "50px",
    color: "#AFA9F2"
  },
  videoPreview: {
    display: "flex",
    justifyContent: "center"
  },
  dataDrivenDashboard: {
    display: "flex",
    justifyContent: "center",
    marginTop: 80
  },
  button: {
    display: "flex",
    justifyContent: "center",
    marginRight: 10,
    marginBottom: 80
  },
  header: {
    marginBottom: 50
  },
  guessing: {
    color: "#ffb259"
  },
  box: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "85%"
  },
  boxPricing: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "85%"
  },
  newsletter: {
    color: "#343066"
  }
}));

const Home = () => {
  const classes = useStyles();

  const cards = [
    {
      title: "Customizable",
      subTitle: "Make your sizing guide as unique as your brand.",
      img: wand
    },
    {
      title: "Hassle Free",
      subTitle: "We integrate with the most used e-commerce platforms.",
      img: hassle
    },
    {
      title: "Omni Channel",
      subTitle: "Simplify size choice wherever your customers are buying.",
      img: omni
    },
    {
      title: "Visual",
      subTitle: "Allow customers to see and interact with your products.",
      img: visual
    }
  ];

  const cardsPrincing = [
    {
      title: "Basic",
      price: "$15",
      products: "100 Products",
      dashboard: "No Dashboard Reports",
      user: "100 Users Database"
    },
    {
      title: "Advanced",
      price: "$45",
      products: "300 Products",
      dashboard: "Dashboard Reports",
      analytics: "Analytics",
      user: "1000 Users Database"
    },
    {
      title: "Premium",
      price: "$95",
      products: "3 Projects",
      dashboard: "Team Collaboration",
      analytics: "Analytics & Reports",
      user: "100k Users Database"
    },
  ];

  return (
    <>
      <Header className={classes.header} />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '100vh', maxWidth: '100%' }}
      >
        <Grid item className={classes.title} xs={3}>
          <Typography variant="h3" className={classes.title} gutterBottom>
            The easist, most accurate, and interactive
          </Typography>
          <Typography variant="h3" gutterBottom>
            sizing guide for e-comm.
          </Typography>
        </Grid>
          <Typography variant="h6" className={classes.subtitle} gutterBottom>
            Enable your customers to shop with cofidence by eliminating the guessing work from your store.
          </Typography>

        <Grid item xs={3} align="center" className={classes.button}>
          <Button className={classes.tryItForFreeButton}>
            TRY IT FOR FREE
          </Button>
          <Button className={classes.watchVideo}>
            WATCH VIDEO
          </Button>
        </Grid>

        <Grid item xs={3} align="center" className={classes.videoPreview} >
          <img src={videoPreview} />
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh', maxWidth: '100%' }}
      >
        <Grid item xs={3}>
        <Typography variant="h4" className={classes.subtitle} gutterBottom>
          No more <span className={classes.guessing}>guessing</span>
        </Typography>
        </Grid>
        <Grid item xs={3} className={classes.box}>
          { cards.map(card => (
            <CardsGuessing cards={card} />
          )) }
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh', maxWidth: '100%' }}
      >
        <Grid item xs={3} align="center" className={classes.dataDrivenDashboard}>
          <img style={{ width: '970px' }} src={dataDrivenDashboard} />
        </Grid>
      </Grid>


      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh', maxWidth: '100%' }}
      >
        <Grid item xs={3} align="center" className={classes.dataDrivenDashboard}>
          <img style={{ width: '970px' }} src={returningCustomers} />
        </Grid>
      </Grid>

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh', maxWidth: '100%' }}
      >
        <Typography variant="h4" className={classes.subtitle} gutterBottom>
          Price that <span className={classes.guessing}>makes sense</span>
        </Typography>
        <Grid item xs={3} className={classes.boxPricing}>
          { cardsPrincing.map(card => (
              <CardsPrincing cards={card} />
          )) }
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        style={{ minHeight: '50vh', maxWidth: '100%' }}
      >
        <Grid item xs={3} align="center" className={classes.dataDrivenDashboard}>
          <Typography variant="h4" className={classes.subtitle} gutterBottom>
            Subscribe to our <span className={classes.newsletter}>newsletter</span>
          </Typography>
        </Grid>
        <Subscribe />
      </Grid>
    
        
    </>
  );
};

export default Home;
