import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import moment from "moment";

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
export default function WeekListMenu({ item, index, route }) {
  const imageIndex = 10;
  const fDate = () => {
    let originalText = item.date;
    return originalText
      .replace("TH ", " ")
      .replace("ST ", " ")
      .replace("ND ", " ")
      .replace("RD ", " ");
  };
  const classes = useStyles();
  return (
    <Link className="cardLink " to={route}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={`/images/bg/hero${imageIndex}.png`}
          title="bg"
        />
        <div className="daysText"> {moment(fDate()).format("dddd")}</div>
        <div className={"details"}>
          <CardContent className={classes.content}>
            <Typography
              variant="button"
              className="text-blue topicText"
              display="block"
              gutterBottom
            >
              {item.topic.slice(0,20)}
            </Typography>
            <Typography
              variant="caption"
              className="text-right dateText "
              display="block"
              gutterBottom
            >
              {moment(fDate()).format("Do MMM, y")}
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}
