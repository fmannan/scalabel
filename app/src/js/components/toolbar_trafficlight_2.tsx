import React from 'react';
import {Validator} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = () => ({
    root: {
        height: '25px',
        width: '25px',
        fontSize: '12px'
    },
    toggleContainer: {
        height: '25px',
        width: '200px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'rgba(250,250,250,0)',
        fontSize: '12px'
    },
    buttonGroup: {
        height: '25px',
        width: '230px',
        fontSize: '12px'
    }
});

const toggleButtonStyles = () => ({
    root: {
        color: 'rgba(0, 0, 0, 0.38)',
        height: '25px',
        padding: '1px 1px',
        fontSize: '12px',
        minWidth: '25px',
        borderRadius: '2px'
    },
    label: {
        fontSize: '12px'
    }
});

interface Props {
    classes: any;
    name: any;
}

class ToggleButtons extends React.Component<Props> {
    public state = {
        alignment: 'left',
        formats: ['bold']
    };

    public handleAlignment = (event: any, alignment: any) => this.setState({ alignment });
    public static propTypes: { classes: Validator<NonNullable<object>> };

    public render() {
        const { name } = this.props;
        const { classes } = this.props;
        const { alignment} = this.state;
        const ToggleBtn = withStyles(toggleButtonStyles)(ToggleButton);

        return (
            <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                    <div className = {classes.string}> {name} </div>
                    <div className={classes.toggleContainer}>
                        <ToggleButtonGroup
                            className={classes.buttonGroup}
                            value={alignment}
                            exclusive
                            onChange={this.handleAlignment}
                        >
                            <ToggleBtn value = 'left'> N/A </ToggleBtn>
                            <ToggleBtn value = 'green'> G </ToggleBtn>
                            <ToggleBtn value = 'yellow'> Y </ToggleBtn>
                            <ToggleBtn value = 'red'> R </ToggleBtn>
                        </ToggleButtonGroup>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export const TrafficLightButton = withStyles(styles)(ToggleButtons);
