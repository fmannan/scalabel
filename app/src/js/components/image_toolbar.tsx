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
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';
import FormControlLabel from '@material-ui/core/FormControlLabel';

interface Props {
    categories: Object;
    attributes: Object;
}

/**
 * This is a multipleSelect component that displays
 * all the categories as a list.
 */
class MultipleSelect extends React.Component<Props> {
    public state = {
        name: []
    };

    public handleChangeMultiple = (event: { target: { options: any; }; }) => {
        const {options} = event.target;
        const value = [];
        for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
        }
        this.setState({
            name: value
        });
    };

    /**
     * MultipleSelect render function
     * @return {jsx} component
     */
    public render() {
        const {categories} = this.props;
        const {classes} = this.props;

        return (
            <div className={classes.root}>
                <FormControl className={classes.formControl}>
                    <InputLabel shrink htmlFor='select-multiple-native'>
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
function IconLabelButtons(props: { classes: any; }) {
    const {classes} = props;
    return (
        <div>
            <Button size='small' fontSize='small' className={classes.button}>
                Remove
                <DeleteIcon fontSize='small' />
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
    public state = {
        checked: []
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
            <PopupState variant='popover'
                        popupId='demo-popup-menu'
                        size='small'>
                {(popupState) => (
                    <React.Fragment>
                        <Button variant='contained'
                                size='small'
                                fontSize='small' {...bindTrigger(popupState)}>
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

const Trafficstyles = {
    greenstyle: {
        'color': green[600],
        '&$checkedgreen': {
            color: green[500]
        }
    },

    checkedgreen: {},
    redstyle: {
        'color': red[600],
        '&$checkedred': {
            color: red[500]
        }
    },
    checkedred: {},

    yellowstyle: {
        'color': yellow[600],
        '&$checkedyellow': {
            color: yellow[500]
        }
    },
    checkedyellow: {}
};

class CheckboxLabels extends React.Component {
    public state = {
        checkedY: true,
        checkedG: true,
        checkedR: true
    };

    public handleChange = (name: any) => event => {
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

const TrafficlightCheckBox = withStyles(Trafficstyles)(CheckboxLabels);

/**
 * This is ToolBar component that displays
 * all the attributes and categories for the 2D bounding box labeling tool
 */
export class ToolBar extends React.Component<Props> {
    /**
     * ToolBar render function
     * @return {jsx} component
     */
    public render() {
        const {categories} = this.props;
        const {attributes} = this.props;
        return (
            <div>
                <ListItem>
                    <Category categories={categories}/>
                </ListItem>
                <Divider variant='middle' />
                <ListItem>
                    <SwitchBtn name = {attributes}/>
                </ListItem>
                <ListItem>
                    <TrafficLightColor />
                </ListItem>
                <Divider variant='middle' />
                <ListItem>
                    <RemoveButton />
                </ListItem>
            </div>
        );
    }
}
