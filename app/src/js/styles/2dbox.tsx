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
