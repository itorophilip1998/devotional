import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import { Grid } from "@material-ui/core";
import { VolumeDown, VolumeUp } from "@material-ui/icons";
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

export default function SetVolume({data}) {
  const dispatch = useDispatch();

  const classes = useStyles();
   
const setUp = (e, volume) => {
  dispatch(getSetup({ ...data ,volume}));
 return Settings({ ...data, volume, text: "Testing" });
};
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
            defaultValue={data.volume}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider-small-steps"
            step={1}
            marks
            min={0}
            max={1}
            valueLabelDisplay="auto"
            onChange={setUp}
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}
