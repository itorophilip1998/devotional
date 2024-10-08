import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
import ExitToAppOutlinedIcon from "@material-ui/icons/ExitToAppOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
// import { signIn } from "../../../utils/request";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { offKeys } from "../../../store/data";
import { useDispatch } from "react-redux";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { signIn } from "../../../utils/firebase/functions";

/* eslint-disable */

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
    margin: theme.spacing(3, 0, 1, 0),
  },
}));
export default function SignIn() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState({
    device: navigator.appVersion,
  });
  const [loading, setLoading] = useState(false);
  const [passwordType, setPType] = useState("password");
  const handleInput = (evt) => {
    dispatch(offKeys(false));
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const handleSearchClose = () => {
    dispatch(offKeys(true));
  };
  const handleSearchOpen = () => {
    dispatch(offKeys(false));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await signIn(state.email, state.password);
      setLoading(false);
      if (response.status === "success") {
        toast.success(response.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error(response.message);
      }
    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <ExitToAppOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
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
            onChange={handleInput}
            onMouseLeave={handleSearchClose}
            onFocus={handleSearchOpen}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={passwordType}
            id="password"
            onChange={handleInput}
            onMouseLeave={handleSearchClose}
            onFocus={handleSearchOpen}
          />

          {passwordType === "password" ? (
            <VisibilityOff
              className="d-md-none passwordItem"
              onClick={(e) => setPType("text")}
            />
          ) : (
            <Visibility
              className="d-md-none passwordItem"
              onClick={(e) => setPType("password")}
            />
          )}

          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Keep me loggedIn"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={"shadow-sm my-3 text-unset"}
            disabled={loading !== true ? false : true}
          >
            {loading !== true ? <b>Login</b> : <Loader />}
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="dark"
            size="large"
            className={"mt-0 shadow-sm text-unset bg-transparent"}
            onClick={(e) => navigate("/auth/signup")}
          >
            {"I don't have account, "} <b> Register</b>
          </Button>
          <Grid container>
            <Grid item xs={12} className="text-right   p-3 px-1">
              <Link to="/auth/forgot-password" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            {/* <Grid item xs={12} className={"mt-2"}>
              <Link to="/auth/signup" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid> */}
          </Grid>
        </form>
      </div>
       
    </Container>
  );
}
