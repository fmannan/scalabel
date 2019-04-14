import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import grey from '@material-ui/core/colors/grey';
import createStyles from '@material-ui/core/styles/createStyles';
import {Theme} from '@material-ui/core';

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
    label: {
        color: 'rgba(0, 0, 0, 1)',
        fontSize: '12px',
        margin: '1px 15px'
    }
});

export const switchStyles = () => ({
    root: {
        width: '100%',
        maxWidth: 360
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
