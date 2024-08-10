import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import Close from "@material-ui/icons/Close";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Badge from "@material-ui/core/Badge";
import { makeStyles } from "@material-ui/core/styles";
import FilterList from "@material-ui/icons/FilterListRounded";
import { TextField } from "@material-ui/core";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getSearch, getSearch2, offKeys } from "../../store/data";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: 54,
    padding: 0,
  },
  menuButton: {
    marginRight: theme.spacing(0),
  },
  title: {
    flexGrow: 1,
    textTransform: "capitalize",
    marginLeft: theme.spacing(1),
  },
}));

export default function Header() {
  const page = useLocation() ?? window.location;
  const classes = useStyles();
  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState(null);
  const [search, setSearch] = useState(null);
  const [issearch, setisSearch] = useState(false);

  const handleClose = (e) => {
    handleSearch(e);
    setAnchorEl(null);
    dispatch(offKeys(true));
  };
  const list = ["manual", "devotional", "tips", ""];
  const currentPage =
    page.pathname !== "/" ? page.pathname.slice(1) : "devotional";
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  if (!list.includes(currentPage)) {
    return false;
  }
  const handleSearchClose = (e) => {
    dispatch(offKeys(true));
  };
  const handleSearchOpen = () => {
    dispatch(offKeys(false));
  };

  const handleSearch = (e) => {
    dispatch(offKeys(false));
    setSearch(e);
    if (currentPage === "devotional") dispatch(getSearch(e));
    else if (currentPage === "manual") dispatch(getSearch2(e));
    else if (currentPage === "") dispatch(getSearch(e));
  };

  // Calculate the last Sunday
  const nextSunday = moment().clone().day(14);

  // Calculate this Sunday
  const lastSunday = moment().clone().day(0);

  // Calculate next Sunday
  const thisSunday = moment().clone().day(7);
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        {issearch}
        <Toolbar>
          {!issearch ? (
            <Typography variant="h6" className={classes.title}>
              {currentPage}
            </Typography>
          ) : (
            ""
          )}
          {issearch ? (
            <>
              <button
                onClick={(e) => setAnchorEl(e.currentTarget)}
                aria-controls="fade-menu"
                aria-haspopup="true"
                className="btn text-white shadow-none p-2"
              >
                <FilterList />
              </button>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
              >
                {page.pathname !== "/manual" ? (
                  <>
                    <MenuItem
                      onClick={() =>
                        handleClose(moment().format("dddd Do MMMM, YYYY"))
                      }
                    >
                      Today's Lesson
                      <Badge
                        color="secondary"
                        overlap="circular"
                        badgeContent=" "
                        variant="dot"
                        className="ml-2"
                      ></Badge>
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleClose(
                          moment()
                            .subtract(1, "day")
                            .format("dddd Do MMMM, YYYY")
                        )
                      }
                    >
                      Yesterday's Lesson
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleClose(
                          moment().add(1, "day").format("dddd Do MMMM, YYYY")
                        )
                      }
                    >
                      Tomorrow's Lesson
                    </MenuItem>
                  </>
                ) : (
                  <>
                    <MenuItem
                      onClick={() =>
                        handleClose(thisSunday.format("dddd Do MMMM, YYYY"))
                      }
                    >
                      This Week Lesson
                      <Badge
                        color="secondary"
                        overlap="circular"
                        badgeContent=" "
                        variant="dot"
                        className="ml-2"
                      ></Badge>
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleClose(lastSunday.format("dddd Do MMMM, YYYY"))
                      }
                    >
                      Last Week Lesson
                    </MenuItem>
                    <MenuItem
                      onClick={() =>
                        handleClose(nextSunday.format("dddd Do MMMM, YYYY"))
                      }
                    >
                      Next Week Lesson
                    </MenuItem>
                  </>
                )}
              </Menu>

              <TextField
                id="filled-basic"
                label="Search by topic/date"
                variant="filled"
                value={search}
                onChange={(e) => handleSearch(e.target.value)}
                onMouseLeave={handleSearchClose}
                onBlur={handleSearchClose}
                onFocus={handleSearchOpen}
                autoFocus={true}
                className="bg-white w-100 globalSearch shadow"
                placeholder="Search by topic/date"
                type="search"
              />
              <button
                onClick={() => {
                  handleSearch("");
                  setisSearch(false);
                  dispatch(offKeys(true));
                }}
                className="btn text-white shadow-none "
              >
                <Close />
              </button>
            </>
          ) : (
            <div>
              {["/manual", "/devotional",'/'].includes(page.pathname) ? (
                <IconButton
                  aria-label="account of current user"
                  aria-describedby={id}
                  variant="contained"
                  onClick={() => setisSearch(true)}
                  color="inherit"
                >
                  <SearchIcon />
                </IconButton>
              ) : (
                ""
              )}

              <IconButton
                aria-label="show 11 new notifications"
                color="inherit"
                className="d-none"
              >
                <Badge badgeContent={1} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
