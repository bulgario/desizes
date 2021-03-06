import React from "react";
import { Typography, makeStyles, Grid, Button } from "@material-ui/core";

import bodyShape from "../../assets/bodyShape.png";
import wand from "../../assets/wand.png";
import hassle from "../../assets/hassle.png";
import omni from "../../assets/omni.png";
import visual from "../../assets/visual.png";

import desizesLandingPage from "../../assets/desizesLandingPage.png";

import Header from "../Header";
import CardsGuessing from "../CardsGuessing";
import CardsPrincing from "../CardsPricing";
import Subscribe from "../Subscribe";
import Carousel from "../Carousel";
import FormControl from "../FormControl";


const useStyles = makeStyles(() => ({
  backgroundImage: {
    backgroundImage: `url(${desizesLandingPage})`,
    height: 860
  },
  title: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: '#FFF'
  },
  subtitle: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    paddingTop: 20,
    fontSize: 20,
    color: '#FFF'
  },
  titlePosition: {
    paddingTop: 90
  },
  guessing: {
    fontSize: 50,
    fontWeight: 'bold',
    color: "#ffb259"
  },
  sizeble: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
    marginBottom: 50
  },
  sizebleTitle: {
    fontSize: 50,
    fontWeight: 'bold'
  },
  box: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "85%",
    marginTop: 80,
    height: 10,
    maxWidth: '100%'
  },
  boxPricing: {
    display: "flex",
    flexDirection: "row",
    maxWidth: "85%",
    marginTop: 80,
  },
}));

const Home = () => {
  const classes = useStyles();

  const cards = [
    {
      title: "Interactive",
      subTitle: "Allow your customers to try your products virtually.",
      img: wand
    },
    {
      title: "Informative",
      subTitle: "Unlock key metrics with our dashboard.",
      img: hassle
    },
    {
      title: "Omni Channel",
      subTitle: "Meet your customer wherever they are.",
      img: omni
    },
    {
      title: "Customizable",
      subTitle: "Your store, your rues..",
      img: visual
    },
    {
      title: "Hassle Free",
      subTitle: "Get up and running in [a week.]",
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
    <div className={classes.backgroundImage}>
    <Grid 
      container
      xs={12}
      direction="column"
      alignItems="center"
      justify="center"
    >
     <Header />

     <Grid
      item
      xs={12}
      className={classes.titlePosition}
     >
      <Grid item xs={12}>
      <h3 className={classes.title}>  Open your digital fitting room </h3>
      </Grid>
      <Grid item xs={12}>
        <h3 className={classes.subtitle}> The easiest, most interactive sizing guide for e-comm. </h3>
      </Grid>
    </Grid>
     <Grid
      item
      xs={12}
     >
      <img src={bodyShape} />
      </Grid>

        <Grid
        item
        xs={12}
        >
        <div className={classes.sizeble}>
          <h3 className={classes.sizebleTitle}> A sizable upgrade</h3> <h3 className={classes.guessing}>upgrade</h3>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
        spacing={0}
        direction="column"
        alignItems="center"
        justify="center"
        className={classes.box}
      >
          { cards.map(card => (
            <CardsGuessing cards={card} />
          )) }
      </Grid>

      <Grid
      item
      xs={12}
     >
      <Carousel />
     </Grid>


     <Grid
        item
        xs={12}
        >
        <div className={classes.sizeble}>
          <h3 className={classes.sizebleTitle}> Price that</h3> <span className={classes.guessing}>makes sense</span>
        </div>
      </Grid>


      <Grid item xs={3} className={classes.boxPricing}>
          { cardsPrincing.map(card => (
              <CardsPrincing cards={card} />
          )) }
      </Grid>


      <Grid
        item
        xs={12}
        >
        <div className={classes.sizeble}>
          <h3 className={classes.sizebleTitle}> Want</h3> <span className={classes.guessing}>more details</span> <h3 className={classes.sizebleTitle}>?</h3>
        </div>
      </Grid>

      <Grid
        item
        xs={12}
      >
        <Typography variant="body2" color="textSecondary" component="p">
          Unlock unmeasurable possibilities. Drop us a line and take the first step into making your virtual fitting room a reality.<br></br>
          We usually reply within 24 hrs.
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
      >
        <FormControl />
      </Grid>


      <Grid item xs={12}>
        <h2 className={classes.sizebleTitle}> Subscribe to our</h2> <span className={classes.guessing}>newsletter</span>
      </Grid>

      <Grid item xs={12}>
        <Subscribe />
      </Grid>
    </Grid>
    </div>
    </>
  );
};

export default Home;
