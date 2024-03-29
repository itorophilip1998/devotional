import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signUp } from "../../../utils/request";
// import { Link } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser, offKeys } from "../../../store/data";
import { useDispatch } from "react-redux";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { Link, useNavigate } from "react-router-dom";
import { Checkbox, FormControlLabel } from "@material-ui/core";
// import { Checkbox, FormControlLabel } from "@material-ui/core";
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
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
  const [passwordType, setPType] = useState("password");
  const [error, setError] = useState({
    device: navigator.appVersion,
  });
  const handleInput = (evt) => {
    dispatch(offKeys(false));

    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  };
  const handleSearchClose = (e) => {
    dispatch(offKeys(true));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError({});

    const req = await signUp(state);
    if (req && req.data) {
      setLoading(false);
      dispatch(getUser(req.data));
      // navigate("/auth/devotional");
      window.location.href = "/devotional";
    } else {
      setLoading(false);
      let err = JSON.parse(req.response.data);
      setError(err);
      toast.error("Opps invalid details!");
    }
  };
  const handleSearchOpen = (e) => {
    dispatch(offKeys(false));
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Create an Account
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            error={error?.username ? true : false}
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            onChange={handleInput}
            type="text"
            onMouseLeave={handleSearchClose}
            helperText={error?.username && error?.username[0]}
            onFocus={handleSearchOpen}
            className="d-none"
          />
          <TextField
            variant="outlined"
            error={error?.email ? true : false}
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address "
            name="email"
            onChange={handleInput}
            type="email"
            onMouseLeave={handleSearchClose}
            helperText={error?.email && error?.email[0]}
            onFocus={handleSearchOpen}
          />
          <TextField
            error={error?.password ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            id="password"
            onChange={handleInput}
            onMouseLeave={handleSearchClose}
            helperText={error?.password && error?.password[0]}
            type={passwordType}
            onFocus={handleSearchOpen}
          />
          {passwordType === "password" ? (
            <VisibilityOff
              className=" passwordItem d-md-none"
              onClick={(e) => setPType("text")}
            />
          ) : (
            <Visibility
              className=" passwordItem d-md-none"
              onClick={(e) => setPType("password")}
            />
          )}
          <FormControlLabel className="py-3"
            control={<Checkbox value="remember" color="primary" />}
            label={
              <>
                I agree to Fulga Devotionals {" "}
                <Link to="/terms">Terms and Conditions</Link>.
              </>
            }
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
            {loading !== true ? <b>Register</b> : <Loader />}
          </Button>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="dark"
            size="large"
            className={"mt-0 shadow-sm text-unset"}
            onClick={(e) => navigate("/auth/signin")}
          >
            {"I have an account already, "} <b> Login</b>
          </Button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}
