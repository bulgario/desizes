import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    width: 130
  },
  input: {
    backgroundColor: "#AFA9F2",
    border: "none",
    borderRadius: 6,
    width: 330,
    height: 40
  }
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  placeholder="Full name"
                  className={classes.input}
                />

            </Grid>

            <Grid item xs={12} sm={6}>
                <input
                  type="text"
                  placeholder="Full name"
                  className={classes.input}
                />

            </Grid>
            















            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="job title"
                label="Job Title"
                name="jobtitle"
                autoComplete="jobtitle"
                className={classes.textField}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="role"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="role"
                label="Role"
                autoFocus
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="company name"
                label="Company name"
                name="company name"
                autoComplete="companyname"
                className={classes.textField}
              />
            </Grid>



            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Annual online sales"
                name="anualsales"
                variant="outlined"
                required
                fullWidth
                id="anual sales"
                label="Annual online sales"
                autoFocus
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                name="phone"
                autoComplete="phone"
                className={classes.textField}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="country"
                name="country"
                variant="outlined"
                required
                fullWidth
                id="country"
                label="Country"
                autoFocus
                className={classes.textField}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="work email"
                label="Work email"
                name="work email"
                autoComplete="workemail"
                className={classes.textField}
              />
            </Grid>
 
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive new and updates on upcoming Desizes developments."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Send
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
