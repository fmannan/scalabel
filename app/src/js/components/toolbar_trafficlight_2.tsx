import React from 'react';
import {Validator} from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
// @ts-ignore
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

const styles = (theme: { spacing: { unit: number; }; palette: { background: { default: any; }; }; }) => ({
    toggleContainer: {
        height: 56,
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        margin: `${theme.spacing.unit}px 0`,
        background: theme.palette.background.default
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

        const { classes } = this.props;
        const { name } = this.props;
        const { alignment} = this.state;

        return (
            <Grid container spacing={16}>
                <Grid item xs={12} sm={6}>
                    <div> {name} </div>
                    <div className={classes.toggleContainer}>
                        <ToggleButtonGroup
                            value={alignment}
                        exclusive
                        onChange={this.handleAlignment}
                        >
                            <ToggleButton value='left'>N/A</ToggleButton>
                            <ToggleButton value='green'>G</ToggleButton>
                            <ToggleButton value='yellow'>Y</ToggleButton>
                            <ToggleButton value='red'>R</ToggleButton>
                        </ToggleButtonGroup>
                    </div>
                </Grid>
            </Grid>
        );
    }
}

export const TrafficLightButton = withStyles(styles)(ToggleButtons);
