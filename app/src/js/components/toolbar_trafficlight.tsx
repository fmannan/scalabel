import React from 'react';
import {trafficStyles} from '../styles/label';
import FormGroup from '@material-ui/core/FormGroup';
import {withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import ListItemText from '@material-ui/core/es/ListItemText/ListItemText';

interface Props {
    name: any;
    classes: any;
}

/**
 * This is a trafficLightColor button component that displays
 * all the color attributes of the traffic lights
 * @return {jsx} component
 */
class Trafficlight extends React.Component<Props> {
    public state = {
        selectedValue : 'a'
    };

    public handleChange = (event: { target: { value: any; }; }) => {
        this.setState({ selectedValue: event.target.value });
    };
    public render() {
        const {classes, name} = this.props;

        return (
            <FormGroup row>
                <ListItemText primary={name} />
                <FormControlLabel
                    control={<Radio
                        checked={this.state.selectedValue === 'checkedNA'}
                        onChange={this.handleChange}
                        value='checkedNA'
                        classes={{
                            root: classes.NAstyle, checked: classes.checkedNA, }}
                    />
                    }
                    label='NA'
                />
                <FormControlLabel
                    control={<Radio
                        checked={this.state.selectedValue === 'checkedG'}
                        onChange={this.handleChange}
                        value='checkedG'
                        classes={{
                            root: classes.greenstyle, checked: classes.checkedgreen, }}
                    />
                    }
                    label='G'
                />
                <FormControlLabel
                    control={<Radio
                        checked={this.state.selectedValue === 'checkedY'}
                        onChange={this.handleChange}
                        value='checkedY'
                        classes={{
                            root: classes.yellowstyle, checked: classes.checkedyellow, }} />
                    }
                    label='Y'
                />

                <FormControlLabel
                    control={<Radio
                        checked={this.state.selectedValue === 'checkedR'}
                        onChange={this.handleChange}
                        value='checkedR'
                        classes={{
                            root: classes.redstyle, checked: classes.checkedred, }}
                    />
                    }
                    label='R'
                />
            </FormGroup>
        );
    }
}

export const ToolbarTrafficlight = withStyles(trafficStyles)(Trafficlight);
