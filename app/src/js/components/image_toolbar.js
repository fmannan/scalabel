import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';


// player-controls
// Get the task
//
/* Sidebar: mainList */

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

    handleChange = (event) => {
        this.setState({name: event.target.value});
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
    chips: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    chip: {
        margin: theme.spacing.unit / 4,
    },
    noLabel: {
        marginTop: theme.spacing.unit * 3,
    },
});


const Category = withStyles(categoryStyles, {withTheme: true})(MultipleSelect);

// player-controls
// Get the task
const deletButtonStyles = (theme) => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
});

function IconLabelButtons(props) {
    const {classes} = props;
    return (
        <div>
            <Button variant="contained" className={classes.button}>
                Remove
                <DeleteIcon className={classes.rightIcon} />
            </Button>
        </div>
    );
}
const DeletButton = withStyles(deletButtonStyles)(IconLabelButtons);

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
                <DeletButton />
            </div>
        );
    }
}

