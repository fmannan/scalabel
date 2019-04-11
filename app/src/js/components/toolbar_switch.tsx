import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {switchStyles} from '../styles/label';
import Switch from '@material-ui/core/Switch';
import {withStyles} from '@material-ui/core/styles';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

interface Props {
    onChange: any;
    value: any;
    classes: any;
}

/**
 * This is a Switch Button component that
 * displays the list of selections.
 * @param {object} Props
 * @return {jsx} component
 */
class SwitchButton extends React.Component<Props> {
    /**
     * SwitchButton render function
     * @return {jsx} component
     */
    public render() {
        const {onChange, value} = this.props;

        return (
            <ListItem>
                <ListItemText primary={value} />
                <ListItemSecondaryAction>
                    <Switch
                        onChange={onChange(value)}
                    />
                </ListItemSecondaryAction>
            </ListItem>
        );
    }
}

export const SwitchBtn = withStyles(switchStyles)(SwitchButton);
