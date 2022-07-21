import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Grid } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";
import { Settings } from "../../../utils/Settings";

const useStyles = makeStyles({
  root: {
    width: "100%",
},
});

function valuetext(value) {
  Settings(1,1,6)
  return `${value}`;
}
const setUp = () => {
  console.log("hello world")
}
export default function SetVolume({ volume }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Set Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            defaultValue={volume}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={1}
            valueLabelDisplay="auto"
            onClick={e=>setUp}
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}
