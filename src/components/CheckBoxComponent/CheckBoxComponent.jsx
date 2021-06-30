import React, { useMemo, useState } from "react";
import { Checkbox } from "@material-ui/core";
import PropTypes from "prop-types";

/**
 * Primary checkbox UI component for user interaction
 */
export default function CheckBoxComponent({
  color,
  checked,
  size,
  disabled,
  ...props
}) {
  const [isChecked, setChecked] = useState(checked);
  const handleOnCheck = () => {
    setChecked((prevChecked) => !prevChecked);
  };
  return (
    <>
      <Checkbox
        color={color}
        checked={isChecked}
        onChange={handleOnCheck}
        size={size}
        disabled={disabled}
        {...props}
      />
    </>
  );
}

/** CheckBox props composition */
CheckBoxComponent.propTypes = {
  /** 
   * Select the main color of the checkbox 
   **/
  color: PropTypes.oneOf(["primary", "default", "secondary"]),
  /** 
   * Set whether the checkbox is clicked 
   */
  checked: PropTypes.bool,
  /** 
   * The size of the checkbox
   **/
  size: PropTypes.oneOf(["small", "medium"]),
  /** 
   * Set whether the checkbox is disabled 
   */
  disabled: PropTypes.bool,
};

CheckBoxComponent.defaultProps = {
    /**
     * Set the default color to primary, for full details, check material ui checkbox documentation
     */
  color: "primary",
  /**
   * Set the init state to unchecked
   */
  checked: false,
  /**
   * Set the init size to small
   */
  size: "small",
  /**
   * Set the init disabled status to false
   */
  disabled: false,
};
