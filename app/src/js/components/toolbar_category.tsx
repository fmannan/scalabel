import React from 'react';
import {categoryStyles} from '../styles/label';
import {withStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import {ListItemText} from '@material-ui/core';
import Radio from '@material-ui/core/Radio/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel/FormControlLabel';

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
                    <ListItemText classes={{primary: classes.primary}} primary={'Label Category'}/>
                    <div>
                        {categories.map((name) => (
                            <FormControlLabel
                                control={<Radio
                                    key={name}
                                    value={name}
                                    classes={{root: classes.checkbox, checked: classes.checked}}
                                />}
                                label={name}
                            />
                        ))}
                    </div>
                </FormControl>
            </div>
        );
    }
}

export const Category = withStyles(categoryStyles, {withTheme: true})(MultipleSelect);
