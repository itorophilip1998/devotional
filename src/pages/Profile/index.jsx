import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";
import "./profile.scss";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import VpnKeyIcon from "@material-ui/icons/VpnKey";
import SetVolume from "./components/SetVolume";
import SetFont from "./components/SetFont";
import { useNavigate } from "react-router-dom";
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
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));
function Profile() {
  let navigate = useNavigate();
  const classes = useStyles();
  

  return (
    <div className="container py-4 ">
      <div className="header_profile my-2">
        <Avatar
          src="/broken-image.jpg"
          className={[classes.large, "shadow "]}
        />
        <Typography
          variant="h6"
          display="inline"
          gutterBottom
          className="userName"
        >
          Itoro Philip
        </Typography>
      </div>
      <div
        className="signout shadow-sm p-3 text-dark"
        onClick={(e) => navigate("/signin")}
      >
        <ExitToAppIcon /> signin
      </div>

      <div className="settings py-4">
        <span>Settings</span>
        <div className="setting_items signout shadow-sm p-3 text-dark">
          <CreditCardIcon /> Subscription
          <span class="badge badge-danger float-right">expired</span>
        </div>
        <div className="setting_items signout shadow-sm p-3 text-dark">
          <VpnKeyIcon /> Change Password
        </div>

        <div className="setting_items signout shadow-sm p-3 text-dark">
          <SetVolume />
        </div>

        <div className="setting_items signout shadow-sm p-3 text-dark">
          <SetFont />
        </div>
      </div>
      <small className="version text-muted float-right">v0.1</small>
    </div>
  );
}

export default Profile;
