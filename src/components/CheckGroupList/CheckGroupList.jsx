import React from "react";
import PropTypes from "prop-types";
import CheckGroup from "../CheckGroup/CheckGroup";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  formControl: {
    margin: theme.spacing(3),
  },
}));

/** The list component that is composed with CheckGroup component */
export default function CheckGroupList({ legend, items, helperText="optional" }) {
  const classes = useStyles();

  if(items.length === 0){
      return (
          <div>Loading</div>
      )
  }

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{legend}</FormLabel>
        <FormGroup>
          {items.map((item) => {
            return <CheckGroup label={item.text} id={item.id.toString()} />;
          })}
        </FormGroup>
        {helperText ? <FormHelperText>{helperText}</FormHelperText> : <></>}
      </FormControl>
    </div>
  );
}

CheckGroupList.propTypes = {
  /** The legend text on top of the checkbox list */
  legend: PropTypes.string,
  /** Items that are being rendered */
  items: PropTypes.array,
  /** Hint text(Optional) */
  helperText: PropTypes.string,
};
