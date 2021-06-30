import React from "react";
import PropTypes from "prop-types";
import CheckGroup from "../CheckGroup/CheckGroup";
import FormControl, { FormLabel } from "@material-ui/core";
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
export default function CheckGroupList({ legend, items, helperText }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <FormControl component="fieldset">
        <FormLabel component="legend">{legend}</FormLabel>
        <FormGroup>
          {items.map((item) => {
            return <CheckGroup label={item.text} id={item.id} />;
          })}
        </FormGroup>
        {helperText ? <FormHelperText>{helperText}</FormHelperText> : <></>}
      </FormControl>
    </div>
  );
}

CheckGroupList.propTypes = {
  legend: PropTypes.string,
  items: PropTypes.array,
};

CheckGroupList.defaultProps = {
  legend: "Select from the following",
  items: [
    { id: 1, text: "You love React" },
    { id: 2, text: "You love Python" },
    { id: 3, text: "You love C++" },
  ],
};
