import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";
// import Grid from "@material-ui/core/Grid";
import Phone from "@material-ui/icons/Phone";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { contactUs } from "../../utils/request";
import { useNavigate } from "react-router-dom";
import Loader from "../../components/Loader/Loader";
import { offKeys } from "../../store/data";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

export default function contact() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState();
  const [loading, setLoading] = useState(false);
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
    const req = await contactUs(state);
    if (req && req.data) {
      setLoading(false);
      toast.success("We will Get back to you within an hour!");
    } else {
      setLoading(false);
      toast.success("We will Get back to you within an hour!");
    }
  };
  const [subjects] = useState([
    "Subscription Issues",
    "Login Issues",
    "Settings Issues",
    "Indentation Issues",
    "Fonts Issues",
    "Color Issues",
    "Authorization Issues",
    "Password reset Issues",
    "No Mail Information Issues",
    "Others...",
  ]);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <Phone />
        </Avatar>
        <Typography component="h1" variant="h5">
          Contact Us
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="subject"
            label="Subject"
            name="subject"
            onChange={handleInput}
            onMouseLeave={handleSearchClose}
            onFocus={handleSearchOpen}
            select
            SelectProps={{
              native: true,
            }}
          >
            {subjects.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </TextField>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="message"
            label="Message"
            minRows={5}
            multiline
            onChange={handleInput}
            onMouseLeave={handleSearchClose}
            onFocus={handleSearchOpen}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            disabled={loading !== true ? false : true}
          >
            {loading !== true ? "Submit" : <Loader />}
          </Button>
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={3000}
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
