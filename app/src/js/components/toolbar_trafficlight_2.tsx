import React from 'react';
import {Validator} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {toggleButtonStyles, trafficLightStyles} from '../styles/label';
import Grid from '@material-ui/core/Grid';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

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
                    <div className = {classes.buttonName}> {name} </div>
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

export const TrafficLightButton = withStyles(trafficLightStyles)(ToggleButtons);
