import React, { useState } from "react";
import { FormControlLabel } from "@material-ui/core";
import CheckBoxComponent from "../CheckBoxComponent/CheckBoxComponent";
import PropTypes from "prop-types";

/** A basic check item that combines check box and label text */
export default function CheckGroup({ label, color }) {
  const [checked, setChecked] = useState(false);
  const handleChange = (event) => {
    console.log('handleChange from CheckGroup');
    setChecked(!checked);
  }
  return (
    <FormControlLabel
      control={
        <CheckBoxComponent
          checked={checked}
          color={color !== "" ? color : "primary"}
          label={label}
        />
      }
    />
  );
}

CheckGroup.propTypes = {
  /** Set the label text of the selection item */
  label: PropTypes.string.isRequired,
  /** Set the color for the check box, which is a prop of CheckBoxComponent */
  color: PropTypes.string,
};

CheckGroup.defaultProps = {
  label: "check default",
  color: "primary",
};
