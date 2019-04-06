import React from 'react';
import List from '@material-ui/core/List';
import {switchStyles} from '../styles/2dbox';
import Switch from '@material-ui/core/Switch';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

interface Props {
    categories: any[];
    attributes: any[];
}

/**
 * This is a Switch Button component that
 * displays the list of selections.
 * @param {string} value
 * @return {jsx} component
 */
class SwitchButton extends React.Component<Props> {
    public state = {
        checked: [' ']
    };

    public handleToggle = (value: any) => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        });
    };

    /**
     * SwitchButton render function
     * @return {jsx} component
     */
    public render() {
        const {classes} = this.props;
        /* const {attributes} = this.props;*/

        return (
            <List className={classes.root}>
                <ListItem>
                    <ListItemText primary='Occluded'/>
                    <ListItemSecondaryAction>
                        <Switch
                            onChange={this.handleToggle('Occluded')}
                            checked={this.state.checked.indexOf(
                                'Occluded') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
                <ListItem>
                    <ListItemText primary='Truncated'/>
                    <ListItemSecondaryAction>
                        <Switch
                            onChange={this.handleToggle('Truncated')}
                            checked={this.state.checked.indexOf(
                                'Truncated') !== -1}
                        />
                    </ListItemSecondaryAction>
                </ListItem>
            </List>
        );
    }
}

export const SwitchBtn = withStyles(switchStyles)(SwitchButton);
