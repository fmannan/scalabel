import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

export const categoryStyles = (theme: { spacing: { unit: any; }; }) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 150,
        maxWidth: 360
    }
});

export const removeButtonStyles = (theme: { spacing: { unit: any; }; }) => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 2
    }
});

export const switchStyles = () => ({
    root: {
        width: '100%',
        maxWidth: 360
    }
});

export const trafficStyles = () => ({
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
