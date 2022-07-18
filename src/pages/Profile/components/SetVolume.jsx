import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import VolumeDown from "@material-ui/icons/VolumeDown";
import VolumeUp from "@material-ui/icons/VolumeUp";

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
});

export default function SetVolume() {
  const classes = useStyles();
  const [value, setValue] = React.useState(30);
  const handleChange = (event, newValue) => {
    setValue(newValue); 
    // var msg = new SpeechSynthesisUtterance()
    //   var voices = window.speechSynthesis.getVoices()
    //   msg.voice = voices[6]
    //   msg.volume = 1 // From 0 to 1
    //   msg.rate = 1 // From 0.1 to 10
    //   msg.pitch = 0 // From 0 to 2
    //   msg.lang = 'en-US'
    //   msg.text = data.alphabet
    //   speechSynthesis.speak(msg)

  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={value}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
}
