import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Grid } from "@material-ui/core";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function SetVoice({ voice }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Set Voice
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <SentimentVerySatisfiedOutlinedIcon />
        </Grid>
        <Grid item xs>
          <Slider
            defaultValue={voice}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={2}
            valueLabelDisplay="auto"
          />
        </Grid>
        <Grid item>
          <SentimentSatisfiedOutlinedIcon />
        </Grid>
      </Grid>
    </div>
  );
}
