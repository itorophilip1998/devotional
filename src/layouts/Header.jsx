import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton'; 
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
      marginBottom:54, 
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function Header() {
  const classes = useStyles();  

    const handleMenu = (event) => { 
      
  };
 
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Devotional
          </Typography>

          <div>
            <IconButton
              aria-label="account of current user" 
              onClick={handleMenu}
              color="inherit"
            >
              <SearchIcon />
            </IconButton>
            
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}


 