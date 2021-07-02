import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";


const useStyles = makeStyles((theme) => ({
    button:{
        margin: theme.spacing(1.5)
    }
}))

/** 
 * UI common button
*/
export default function SimpleButton({variant, size ,color, buttonLabel, handleClick, ...props}){
    const classes = useStyles();
    return (
        <Button
            className={classes.button}
            variant={variant}
            size={size ? size : 'medium'}
            color={color}
            onClick={handleClick}
            {...props}
        >
            {buttonLabel}
        </Button>
    )
}

SimpleButton.propTypes = {
    /** 
     * The button variant prop
     */
    variant: PropTypes.oneOf(['outlined', 'contained','text']),
    /**
     * The button size prop
     */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** 
     * The button default color prop
     */
    color: PropTypes.oneOf(['primary', 'secondary', 'default']),
    /** 
     * The button text prop
     */
    buttonLabel: PropTypes.string,
    /** 
     * The handleClick is the onClick event handler passed in as a prop
     */
    handleClick: PropTypes.func,
}

SimpleButton.defaultProps = {
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    buttonLabel: 'button',
    handleClick: () => {alert('button clicked')}
}