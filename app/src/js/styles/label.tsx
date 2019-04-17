import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';
import createStyles from '@material-ui/core/styles/createStyles';
import {Theme, withStyles} from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import {blue} from '@material-ui/core/es/colors';

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
        'fontSize': '15px'
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
    }
});

export const trafficStyles = () => ({
    NAstyle: {
        'color': grey[600],
        '&$checkedNA': {
            color: grey[500]
        }
    },
    checkedNA: {},

    greenstyle: {
        'color': green[600],
        '&$checkedgreen': {
            color: green[500]
        }
    },
    checkedgreen: {},

    redstyle: {
        'color': red[600],
        '&$checkedred': {
            color: red[500]
        }
    },
    checkedred: {},

    yellowstyle: {
        'color': yellow[600],
        '&$checkedyellow': {
            color: yellow[500]
        }
    },
    checkedyellow: {}
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
        padding: '1px 1px',
        fontSize: '15px',
        minWidth: '28px',
        borderRadius: '2px'
    },
    label: {
        fontSize: '15px'
    }
});

export const trafficLightStyles = () => ({
    root: {
        height: '28px',
        width: '28px'
    },
    toggleContainer: {
        height: '28px',
        width: '115px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'rgba(250,250,250,0)'
    },
    buttonGroup: {
        height: '28px',
        width: '230px'
    },
    buttonName: {
        fontSize: '15px'
    }
});
