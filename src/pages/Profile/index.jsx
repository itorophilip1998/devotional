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
import { useDispatch } from "react-redux";
import { logout } from "../../store/data";
import SetFont from "./components/SetFont";
import { useAuth } from "../../context/firebaseContext";
import { signInLink, signOutAuth } from "../../utils/firebase/functions";
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
 
  const dispatch = useDispatch();
  const changePassword = () => {
    dispatch(logout());
    navigate("/auth/forgot-password");
  };
 
  const contactUs = () => {
    navigate("/contact-us");
  };
  const signInFn = async () => {
    await signInLink()
    navigate("/auth/signin");
    
  }

  const signOutFn = async () => {
    await signOutAuth();
    navigate("/auth/signin");
  };
  const [speech] = useState(16);
  const { userDetails: user } = useAuth();
  const username = user?.username || "Anonymous";
  // console.debug(user);
  return (
    <div className="container py-4 mb-4 ">
      <div className="header_profile my-2">
        <Avatar className={[classes.large, "shadow "]}>
          {username?.charAt(0)?.toUpperCase()}
        </Avatar>
        <Typography
          variant="h6"
          display="inline"
          gutterBottom
          className="userName text-capitalize"
        >
          {username}
          {/* {user.email} */}
        </Typography>
      </div>
      {!user ? (
        <div className="signout shadow-sm p-3 text-dark" onClick={signInFn}>
          <ExitToAppIcon /> Signin
        </div>
      ) : (
        <div className="signout shadow-sm p-3 text-dark" onClick={signOutFn}>
          <ExitToAppIcon /> Signout
        </div>
      )}

      <div className="settings py-4">
        <span>Settings</span>
        <div
          className="setting_items signout shadow-sm p-3 text-dark"
          onClick={(e) => navigate("/subscribe")}
        >
          <CreditCardIcon /> {"Subscription"}
          {!user?.isSub ? (
            <span className="badge badge-danger float-right">
              No Subscription
            </span>
          ) : (
            <span className="badge badge-success float-right">Active</span>
          )}
          {/* <span className="badge badge-success float-right">
            Free For today
          </span> */}
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
      <small className="version text-muted float-right">v1.2</small>
    </div>
  );
}

export default Profile;
