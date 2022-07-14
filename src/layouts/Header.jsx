import React, { useState, useEffect } from "react"; 
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'; 
import SearchIcon from "@material-ui/icons/Search";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge"; 
import {  makeStyles } from "@material-ui/core/styles"; 
import Popover from "@material-ui/core/Popover"; 
import {TextField} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 54,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textTransform:"capitalize"
  },
   
}));

export default function Header({page}) {

  const classes = useStyles();  

  //   const handleMenu = (event) => { 
      
  // };
 
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {page}
          </Typography>

          <div>
            <Popover
              id={id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              color="primary"
              anchorOrigin={{
                vertical: "center",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
            >
              <form noValidate autoComplete="off">
                <TextField
                  id="filled-basic"
                  label="Search by topic"
                  variant="filled"
                />
              </form>
            </Popover>
            <IconButton
              aria-label="account of current user"
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            <IconButton aria-label="show 11 new notifications" color="inherit">
              <Badge badgeContent={2} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


 