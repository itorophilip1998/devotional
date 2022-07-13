import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import {
  LibraryBooksOutlined,
  MenuBookOutlined,
  FavoriteBorderOutlined,
  PermIdentityOutlined,
} from "@material-ui/icons";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: 50,
    background:"#F2F4F5",
    paddingTop: "15px",
    paddingBottom: "15px",
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
      <BottomNavigationAction
        label="saved"
        value="saved"
        icon={<FavoriteBorderOutlined />}
      />
      <BottomNavigationAction
        label="Profile"
        value="profile"
        icon={<PermIdentityOutlined />}
      />
    </BottomNavigation>
  );
};
export default Footer;
