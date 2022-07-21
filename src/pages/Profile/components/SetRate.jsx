import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Grid } from "@material-ui/core"; 
import MicOffSharpIcon from "@material-ui/icons/MicOffSharp";
import MicNoneSharpIcon from "@material-ui/icons/MicNoneSharp";
import { Settings } from "../../../utils/Settings";
import { useDispatch } from "react-redux";
import { getSetup } from "../../../store/data";
const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

function valuetext(value) {
  return `${value}`;
}

export default function SetRate({data}) {
  const classes = useStyles();
  const dispatch = useDispatch();
const setUp = (e, rate) => {
  dispatch(getSetup({ ...data, rate }));
  Settings({ ...data, rate });
};
  return (
    <div className={classes.root}>
      <Typography id="discrete-slider-small-steps" gutterBottom>
        Set Speech Rate
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <MicOffSharpIcon />
        </Grid>
        <Grid item xs>
          <Slider
            defaultValue={data.rate}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0.1}
            max={10}
            valueLabelDisplay="auto"
            onChange={setUp}
          />
        </Grid>
        <Grid item>
          <MicNoneSharpIcon />
        </Grid>
      </Grid>
    </div>
  );
}
