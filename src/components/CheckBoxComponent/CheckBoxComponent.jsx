import React, { useMemo, useState } from "react";
import { Checkbox } from "@material-ui/core";
import PropTypes from "prop-types";
import { render } from "@testing-library/react";

/**
 * Primary checkbox UI component for user interaction
 */
export default function CheckBoxComponent({
  color,
  checked,
  size,
  disabled,
  label,
  ...props
}) {

  const [isChecked, setIsChecked] = useState(checked);
  const handleCheck = () => {
    console.log('from check component')
    setIsChecked(!isChecked)
  }

  const renderLabel = (label) => {
    if(isChecked){
      return (label ? <strike>{label}</strike> : <strike>This is a check box</strike>)
    }else{
      return (label ? {label} : 'This is a check box')
    }
  }


  return (
    <>
      <Checkbox
        color={color}
        checked={isChecked}
        onChange={handleCheck}
        size={size}
        disabled={disabled}
        {...props}
      />
      {renderLabel(label)}
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
