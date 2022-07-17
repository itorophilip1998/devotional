import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { signUp } from "../../../utils/request";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../../components/Loader/Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getUser } from "../../../store/data";
import { useDispatch } from "react-redux";

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
  const [error, setError] = useState({});
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
    setError({});
    const req = await signUp(state);
    if (req && req.data) {
      setLoading(false);
      dispatch(getUser(req.data));

      navigate("/devotional");
    } else {
      setLoading(false);
      let err = JSON.parse(req.response.data);
      setError(err);
      toast.error("Opps invalid details!");
    }
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
            autoComplete="username"
            autoFocus
            onChange={handleInput}
            type="text"
            helperText={error?.username && error?.username[0]}
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
            autoComplete="email"
            autoFocus
            onChange={handleInput}
            type="email"
            helperText={error?.email && error?.email[0]}
          />
          <TextField
            error={error?.password ? true : false}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleInput}
            helperText={error?.password && error?.password[0]}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="I accept the terms and condition"
          /> */}

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
            disabled={loading !== true ? false : true}
            size="medium"
          >
            {loading !== true ? "Sign Up" : <Loader />}
          </Button>
          <Grid container>
            <Grid item xs={12}>
              <Link to="/signin" variant="body2">
                {"I have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
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
