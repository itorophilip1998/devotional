import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction"; 
import {
  LibraryBooksOutlined,
  MenuBookOutlined, 
  PermIdentityOutlined,
  EventNote
} from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    width: "100%", 
    background:"#fff",
    paddingTop: "18px",
    paddingBottom: "18px",
    boxShadow: "inset 0px 2px 0px #E6E6E6",
    
  },
});


const Footer = () => { 
  const classes = useStyles();
  const [value, setValue] = useState("devotional");
      let navigate = useNavigate();

  const handleChange = (event, newValue) => {
      setValue(newValue);
      navigate(newValue);
  };

  return (
    <BottomNavigation
      showLabels
      value={value}
      onChange={handleChange}
      className={classes.root + " fixed-bottom"}
    >
      <BottomNavigationAction
        label="Devotional"
        value="devotional"
        icon={<MenuBookOutlined />}
      />
      <BottomNavigationAction
        label="Manual"
        value="manual"
        icon={<LibraryBooksOutlined />}
      />
      <BottomNavigationAction label="Tips" value="tips" icon={<EventNote />} />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PermIdentityOutlined />}
      />
    </BottomNavigation>
  );
};
export default Footer;
