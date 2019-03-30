import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state/index';

// player-controls
// Get the task
//
/* Sidebar: mainList */

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

const categoryStyles = (theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
        maxWidth: 300,
    },
});

const Category = withStyles(categoryStyles, {withTheme: true})(MultipleSelect);

// player-controls
// Get the task
const deletButtonStyles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
        fontSize: 3,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

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
const DeletButton = withStyles(deletButtonStyles)(IconLabelButtons);


function TrafficLightColor() {
    return (
        <div>
            <PopupState variant="popover" popupId="demo-popup-menu" size="small">
                {popupState => (
                    <React.Fragment>
                        <Button variant="contained" size="small" fontSize="small" {...bindTrigger(popupState)}>
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
                <ListItem>
                    <TrafficLightColor />
                </ListItem>
                <ListItem>
                    <DeletButton />
                </ListItem>
            </div>
        );
    }
}

