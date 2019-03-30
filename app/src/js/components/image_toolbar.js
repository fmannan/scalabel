import React from 'react';
import {categoryStyles, removeButtonStyles,
    switchStyles} from '../styles/2dbox';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state/index';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Switch from '@material-ui/core/Switch';

const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

function IconLabelButtons(props) {
    const { classes } = props;
    return (
        <div>
            <Button variant="contained" className={classes.button}>
                Remove
            <DeleteIcon className={classes.rightIcon} />
            </Button>
        </div>
    );
}
const DeletButton = withStyles(styles)(IconLabelButtons);

type Props = {
    categories: Object,
    attributes: Object,
}

/**
 * This is a multipleSelect component that displays
 * all the categories as a list.
 */
class MultipleSelect extends React.Component<Props> {
    state = {
        name: [],
    };

    handleChangeMultiple = (event) => {
        const {options} = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({
            name: value,
        });
    };

    /**
     * MultipleSelect render function
     * @return {jsx} component
     */
    render() {
        const {categories} = this.props;
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor="select-multiple-native">
                        Label Category
                    </InputLabel>
                    <Select
                        multiple
                        native
                        value={this.state.name}
                        onChange={this.handleChangeMultiple}
                        inputProps={{
                            id: 'select-multiple-native',
                        }}
                    >
                        {categories.map((name) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            </div>
        );
    }
}

const Category = withStyles(categoryStyles, {withTheme: true})(MultipleSelect);

/**
 * This is a Icon Button component that
 * displays the remove.
 * @param {object} props
 * @return {jsx} component
 */
function IconLabelButtons(props) {
    const {classes} = props;
    return (
        <div>
            <Button size="small" fontSize="small" className={classes.button}>
                Remove
                <DeleteIcon fontSize="small" />
            </Button>
        </div>
    );
}
const RemoveButton = withStyles(removeButtonStyles)(IconLabelButtons);

/**
 * This is a Switch Button component that
 * displays the list of selections.
 * @param {string} value
 * @return {jsx} component
 */
class SwitchButton extends React.Component<Props> {
    state = {
        checked: [],
    };

    handleToggle = (value) => () => {
        const {checked} = this.state;
        const currentIndex = checked.indexOf(value);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(value);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked,
        });
    };

    /**
     * SwitchButton render function
     * @return {jsx} component
     */
    render() {
        const {classes} = this.props;
        const {attributes} = this.props;

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

const SwitchBtn = withStyles(switchStyles)(SwitchButton);

/**
 * This is a trafficLightColor button component that displays
 * all the color attributes of the traffic lights
 * @return {jsx} component
 */
function TrafficLightColor() {
    return (
        <div>
            <PopupState variant="popover"
                        popupId="demo-popup-menu"
                        size="small">
                {(popupState) => (
                    <React.Fragment>
                        <Button variant="contained"
                                size="small"
                                fontSize="small" {...bindTrigger(popupState)}>
                         Traffic Light Color
                        </Button>
                        <Menu {...bindMenu(popupState)}>
                            <MenuItem onClick={popupState.close}>NA</MenuItem>
                            <MenuItem onClick={popupState.close}>G</MenuItem>
                            <MenuItem onClick={popupState.close}>Y</MenuItem>
                            <MenuItem onClick={popupState.close}>R</MenuItem>
                        </Menu>
                    </React.Fragment>
                )}
            </PopupState>
        </div>
    );
}

/**
 * This is ToolBar component that displays
 * all the attributes and categories for the 2D bounding box labeling tool
 */
export class ToolBar extends React.Component<Props> {
    /**
     * ToolBar render function
     * @return {jsx} component
     */
    render() {
        const {categories} = this.props;
        const {attributes} = this.props;
        return (
            <div>
                <ListItem>
                    <Category categories={categories}/>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <SwitchBtn name = {attributes}/>
                </ListItem>
                <ListItem>
                    <TrafficLightColor />
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <RemoveButton />
                </ListItem>
            </div>
        );
    }
}
