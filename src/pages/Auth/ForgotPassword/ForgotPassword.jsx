import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField"; 
import LockOpenOutlinedIcon from "@material-ui/icons/LockOpenOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signIn } from "../../../utils/request";
import {  useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function ForgotPassword() {
  const classes = useStyles();
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const handleInput = (evt) => {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const req = await signIn(state);
    if (req || req === undefined) {
      console.log(state);
      setLoading(false);
    }
    setLoading(false);
    console.log(state);
  };
  const navigate = useNavigate();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOpenOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Forgot Password
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleInput}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading !== true ? false : true}
            size="large"
          >
            {loading !== true ? "Verify" : <Loader />}
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="dark"
            size="large"
            className={"mt-0 shadow-sm text-unset bg-transparent"}
            onClick={(e) => navigate("/auth/signin")}
          >
            {"I have an account already, "} <b> Login</b>
          </Button>
          {/* <Grid container>
            <Grid item xs={12}>
              <Link to="/auth/signin" variant="body2">
                {"I have an account? Sign In"}
              </Link>
            </Grid>
          </Grid> */}
        </form>
      </div>
    </Container>
  );
}
