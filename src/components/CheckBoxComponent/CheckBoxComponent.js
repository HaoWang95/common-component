import React, { useMemo, useState } from 'react';
import { Checkbox } from '@material-ui/core';
import PropTypes from 'prop-types';

export default function CheckBoxComponent({ color, defaultChecked, checked }) {
    const [isChecked, setChecked] = useState(checked);
    const handleOnCheck = () => {
        setChecked(prevChecked => !prevChecked)
    }
    return (
        <>
            <Checkbox
                color={color}
                defaultChecked={defaultChecked ? defaultChecked : false}
                checked={isChecked}
                onChange = {handleOnCheck}
            />
        </>
    )
}

CheckBoxComponent.propTypes = {
    /** Composition of CheckBoxComponent */
    color: PropTypes.string,
    defaultChecked: PropTypes.bool,
    checked: PropTypes.bool
}
