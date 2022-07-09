import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia'; 
import Typography from '@material-ui/core/Typography'; 
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
        display: "flex",
        marginTop:8
  },
  details: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width:"60%"
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: '40%',
    height: 100,
    marginTop: 4,
    marginBottom: 4,
      marginLeft: 3,
    borderRadius:4
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
}));

export default function WeekListMenu({item}) { 
  const classes = useStyles(); 
  return (
    <Link className="cradLink" to={"/devotional"}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image="/images/bg/hero1.png"
          title="bg"
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography variant="button" display="" gutterBottom>
              {item.topic}
            </Typography>
            <Typography
              variant="caption"
              className="float-right mt-4"
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
 