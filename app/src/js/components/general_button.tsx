import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const StyledButton = withStyles({
    root: {
        borderRadius: 0,
        border: 0,
        color: 'black',
        height: '80%',
        width : '80%',
        padding: '5px 15px',
        boxShadow: '0 1px 0px 5px rgba(250, 250, 250, 1)',
        fontSize: '12px',
        background: 'white',
        margin: '0px 20px'
    },
    label: {
        textTransform: 'uppercase',
        fontSize: '12px'
    },
    itemText: {
        fontSize: 10,
        fontWeight: 500
    }
})(Button);

export function genButton(props: {name: any}) {
    const {name} = props;
    return(
        <StyledButton>{name}</StyledButton>
    );
}
