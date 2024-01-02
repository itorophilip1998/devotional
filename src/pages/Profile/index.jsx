import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import Phone from "@material-ui/icons/Email";
// import SetVolume from "./components/SetVolume";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/data";
import SetFont from "./components/SetFont";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(6),
    height: theme.spacing(6),
  },
}));
function Profile() {
  let navigate = useNavigate();
  const classes = useStyles();

  const { token, user, isSub } = useSelector((state) => state.data);
  const dispatch = useDispatch();
  const changePassword = () => {
    dispatch(logout());
    navigate("/auth/forgot-password");
  };
  const signOut = () => {
    dispatch(logout());
    navigate("/auth/signin");
  };
  const contactUs = () => {
    navigate("/contact-us");
  };
  const [speech] = useState(16);
  return (
    <div className="container py-4 mb-4 ">
      <div className="header_profile my-2">
        <Avatar className={[classes.large, "shadow "]}>
          {" "}
          {user?.username?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography
          variant="h6"
          display="inline"
          gutterBottom
          className="userName text-capitalize"
        >
          {user.username}
        </Typography>
      </div>
      {!token ? (
        <div
          className="signout shadow-sm p-3 text-dark"
          onClick={(e) => navigate("/auth/signin")}
        >
          <ExitToAppIcon /> Signin
        </div>
      ) : (
        <div className="signout shadow-sm p-3 text-dark" onClick={signOut}>
          <ExitToAppIcon /> Signout
        </div>
      )}

      <div className="settings py-4">
        <span>Settings</span>
        <div
          className="setting_items signout shadow-sm p-3 text-dark"
          onClick={(e) => navigate("/subscribe")}
        >
          <CreditCardIcon /> Subscription
          {!isSub && (
            <span className="badge badge-danger float-right">expired</span>
          )}
        </div>
        <div
          className="setting_items signout shadow-sm p-3 text-dark"
          onClick={changePassword}
        >
          <VpnKeyIcon /> Change Password
        </div>
        <div
          className="setting_items signout shadow-sm p-3 text-dark"
          onClick={contactUs}
        >
          <Phone /> Contact Us
        </div>

        {/* <div className="setting_items signout shadow-sm p-3 text-dark">
          <SetVolume data={speech} />
        </div> */}

        <div className="setting_items signout shadow-sm p-3 text-dark">
          <SetFont data={speech} />
        </div>
        <div className="setting_items signout shadow-sm d-none p-3 text-dark">
          {navigator.appVersion}
        </div>
      </div>
      <small className="version text-muted float-right">v1.0</small>
    </div>
  );
}

export default Profile;
