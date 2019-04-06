import React from 'react';
import {removeButtonStyles} from '../styles/2dbox';
import {SwitchBtn} from './toolbar_switchbutton';
import {ToolbarTrafficlight} from './toolbar_trafficlight';
import {Category} from './toolbar_category';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';

interface Props {
    categories: any[];
    attributes: any[];
}

/**
 * This is a Icon Button component that
 * displays the remove.
 * @param {object} props
 * @return {jsx} component
 */
function RemoveButtons(props: { classes: any; }) {
    const {classes} = props;
    return (
        <div>
            <Button size='small' className={classes.button}>
                Remove
                <DeleteIcon fontSize='small' />
            </Button>
        </div>
    );
}
const RemoveButton = withStyles(removeButtonStyles)(RemoveButtons);

/**a
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
                    <SwitchBtn attributes = {attributes}/>
                </ListItem>
                <ListItem>
                    <ToolbarTrafficlight />
                </ListItem>
                <Divider variant='middle' />
                <ListItem>
                    <RemoveButton />
                </ListItem>
            </div>
        );
    }
}
