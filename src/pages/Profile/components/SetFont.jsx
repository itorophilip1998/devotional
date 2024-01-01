import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Grid } from "@material-ui/core";
// import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
// import SentimentSatisfiedOutlinedIcon from "@material-ui/icons/SentimentSatisfiedOutlined";
import { useDispatch } from "react-redux";
import { getSetup } from "../../../store/data";
import { Settings } from "../../../utils/Settings";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function SetFont({ data }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const setUp = (e, voice) => {
    dispatch(getSetup({ ...data, voice }));
    return Settings({ ...data, voice , text: "Testing" });
  };
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Font Size
      </Typography>
      <Grid container spacing={2}>
        <Grid item>a</Grid>
        <Grid item xs>
          <Slider
            defaultValue={data.voice}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={3}
            marks
            min={16}
            max={30}
            valueLabelDisplay="auto"
            onChange={setUp}
            disabled
          />
        </Grid>
        <Grid item>A</Grid>
      </Grid>
    </div>
  );
}
