import React from 'react';
import {Validator} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = (theme: { spacing: { unit: number; }; palette: { background: { default: any; }; }; }) => ({
    root: {
        height: '25px',
        width: '25px',
        fontSize: '12px'
    },
    toggleContainer: {
        height: 40,
        width: 250,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        background: 'rgba(250,250,250,0)'
    },
    buttonGroup: {
        height: '25px',
        width: '200px'
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
                            <ToggleButton  value = 'left'> N/A </ToggleButton>
                            <ToggleButton  value = 'green'> G </ToggleButton>
                            <ToggleButton  value = 'yellow'> Y </ToggleButton>
                            <ToggleButton  value = 'red'> R </ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export const TrafficLightButton = withStyles(styles)(ToggleButtons);
