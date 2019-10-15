import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    backgroundColor: "rgb(153, 151, 151)",
    color: "white",
    padding: "2rem",
    borderRadius: "10px"
  },
  media: {
    height: 0,
    paddingTop: "56.25%",
    borderRadius: "10px"
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.card}>
      <CardHeader title={props.header} />
      <CardMedia
        className={classes.media}
        image={props.gif}
        title="Paella dish"
        style={{ height: "60px" }}
      />
      <CardContent>
        <Typography variant="body2" component="p">
          {props.main_text}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <div className="icons">
          <a href={props.code_link}>
            <i
              style={{ color: "black", fontSize: "1.5rem" }}
              className="fa fa-github"
              id="box"
            />
          </a>
          <a href={props.project_link}>
            <i
              style={{ color: "black", fontSize: "1.5rem" }}
              className="fa fa-internet-explorer"
              id="box"
            />
          </a>
        </div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Tech Stack:</Typography>
          <Typography paragraph>{props.sub_text_one}</Typography>
          <Typography paragraph>Features:</Typography>
          <Typography paragraph>{props.sub_text_two}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
