import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// The `withStyles()` higher-order component is injecting a `classes`
// property that is used by the `Button` component.
const StyledButton = withStyles({
    root: {
        borderRadius: 3,
        border: 0,
        color: 'black',
        height: 40,
        width : '80%',
        padding: '0 30px',
        boxShadow: '0 1px 1px 1px rgba(0, 0, 0, 0)',
        fontSize: '80%'
    },
    label: {
        textTransform: 'capitalize',
        fontSize: '80%'
    },
    itemText: {
        fontSize: 10,
        fontWeight: 500
    }
})(Button);

export default function ClassesShorthand() {
    return(  <StyledButton>Classes Shorthand</StyledButton> );
}
