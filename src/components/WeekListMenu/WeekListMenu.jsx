import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: 8,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "60%",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "40%",
    height: 100,
    marginTop: 4,
    marginBottom: 4,
    marginLeft: 3,
    borderRadius: 4,
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));
// const list=[1,2,3,4,5,6,7,8,9]
export default function WeekListMenu({ item, index,route }) {
 
  const classes = useStyles();
  return (
    <Link className="cradLink" to={route}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={item.img}
          title="bg"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="button" className="text-blue topicText" display="inline" gutterBottom>
              {item.topic}
            </Typography>
            <Typography
              variant="caption"
              className="float-right mt-43 dateText "
              display="block"
              gutterBottom
            >
              {item.date}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
