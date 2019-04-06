import React from 'react';
import {trafficStyles} from '../styles/2dbox';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import {withStyles} from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';

class CheckboxLabels extends React.Component {
    public state = {
        checkedY: true,
        checkedG: true,
        checkedR: true
    };

    public handleChange = (name: any) => (event: { target: { checked: any; }; }) => {
        this.setState({ [name]: event.target.checked });
    };

    public render() {
        const { classes } = this.props;

        return (
            <FormGroup row>
                <FormControlLabel
                    control={<Checkbox
                        checked={this.state.checkedG}
                        onChange={this.handleChange('checkedG')}
                        value='checkedG'
                        classes={{
                            root: classes.greenstyle, checked: classes.checkedgreen,}}
                    />
                    }
                    label='G'
                />
                <FormControlLabel
                    control={<Checkbox
                        checked={this.state.checkedG}
                        onChange={this.handleChange('checkedY')}
                        value='checkedY'
                        classes={{
                            root: classes.yellowstyle, checked: classes.checkedyellow,}} />
                    }
                    label='Y'
                />

                <FormControlLabel
                    control={<Checkbox
                        checked={this.state.checkedY}
                        onChange={this.handleChange('checkedR')}
                        value='checkedR'
                        classes={{
                            root: classes.redstyle, checked: classes.checkedred,}}
                    />
                    }
                    label='R'
                />
            </FormGroup>
        );
    }
}

export const ToolbarTrafficlight = withStyles(trafficStyles)(CheckboxLabels);
