import grey from '@material-ui/core/colors/grey';
import createStyles from '@material-ui/core/styles/createStyles';
import {Theme, withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import {blue} from '@material-ui/core/es/colors';
import {red} from '@material-ui/core/colors';

export const categoryStyles = (theme: Theme) => createStyles({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150,
        maxWidth: 360
    },
    primary: {
        fontSize: '15px'
    },
    checkbox: {
        'color': grey[600],
        '&$checked': {
            color: blue[500]
        },
        'fontSize': '15px',
        'margin' : '-10px'
    },
    checked: {}
});

export const switchStyles = () => ({
    root: {
        width: '100%',
        maxWidth: 360
    },
    primary: {
        fontSize: '15px'
    },
    switch: {
        'color': grey[600],
        '&$checked': {
            color: red[500]
        },
        '& + $bar': {
            backgroundColor: red[500]
        }
    }
});

export const StyledButton = withStyles({
    root: {
        borderRadius: 0,
        border: 0,
        color: 'black',
        height: '80%',
        width : '80%',
        padding: '5px 15px',
        boxShadow: '0 1px 0px 5px rgba(250, 250, 250, 1)',
        fontSize: '15px',
        background: 'white',
        margin: '0px 20px'
    },
    label: {
        textTransform: 'uppercase',
        fontSize: '15px'
    },
    itemText: {
        fontSize: 10,
        fontWeight: 500
    }
})(Button);

export const toggleButtonStyles = () => ({
    root: {
        color: 'rgba(0, 0, 0, 0.38)',
        height: '28px',
        padding: '1px 2px',
        fontSize: '15px',
        minWidth: '28px',
        borderRadius: '2px'
    },
    label: {
        fontSize: '11px'
    }
});

export const listButtonStyles = () => ({
    root: {
        height: '28px'
    },
    toggleContainer: {
        height: '28px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'rgba(250,250,250,0)'
    },
    buttonGroup: {
        height: '28px',
        width: '100%'
    },
    primary: {
        fontSize: '15px'
    }
});

export const toolBarStyles = () => ({
    root: {
        textAlign: 'center',
        padding: '10px 5px'
    }
});
