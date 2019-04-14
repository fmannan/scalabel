import React from 'react';
import Select from '@material-ui/core/Select';
import {categoryStyles} from '../styles/label';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {ListItemText} from '@material-ui/core';

interface Props {
    categories: any[];
    classes: any;
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
                    <ListItemText className={classes.label} >
                        Label Category
                    </ListItemText>
                    <div>
                        <Select
                            multiple
                            native
                            value={this.state.name}
                            onChange={this.handleChangeMultiple}
                        >
                            {categories.map((name) => (
                                <option key={name} value={name}>
                                    {name}
                                </option>
                            ))}
                        </Select>
                    </div>
                </FormControl>
            </div>
        );
    }
}

export const Category = withStyles(categoryStyles, {withTheme: true})(MultipleSelect);
