export const categoryStyles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
});

export const deletButtonStyles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 2,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

export const switchStyles = (theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
});
