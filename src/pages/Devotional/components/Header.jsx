import { Typography } from "@material-ui/core";
import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useNavigate } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const options = [
  "None",
  "Atria",
  "Callisto",
  "Dione",
  "Ganymede",
  "Hangouts Call",
  "Luna",
  "Oberon",
  "Phobos",
  "Pyxis",
  "Sedna",
  "Titania",
  "Triton",
  "Umbriel",
];

const ITEM_HEIGHT = 48;
function Header({ item }) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const MenuPops = () => (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
        className="text-white"
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "15ch",
            right:'1rem',
            left:'unset',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={handleClose}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
  return (
    <div>
      <div className=" p-0 pt-1 bg-back  ">
        <button className="btn btn-lg pl-2">
          <ArrowBackIcon className="text-white " onClick={() => navigate(-1)} />
        </button>

       
      </div>
      <div className="devotional_header shadow">
        {/* start topic */}
        <Typography
          variant="h6"
          display="block"
          className="text-center d-block mb-5 container topic"
          gutterBottom
        >
          {item.topic}
        </Typography>
        {/* end topic */}

        {/* start text */}
        <div className="container">
          <span className="text">Text: </span>
          <span className="text-letter text-white font-italic ">
            {item.text}
          </span>
        </div>
        {/* end text */}
      </div>
    </div>
  );
}

export default Header;
