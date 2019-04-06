import React from 'react';
import {removeButtonStyles} from '../styles/2dbox';
import {SwitchBtn} from './toolbar_switchbutton';
import {ToolbarTrafficlight} from './toolbar_trafficlight';
import {Category} from './toolbar_category';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, {bindTrigger, bindMenu} from 'material-ui-popup-state/index';
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
                {(popupState: { close: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | undefined; }) => (
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
                    <SwitchBtn name = {attributes}/>
                </ListItem>
                <ListItem>
                    <TrafficLightColor />
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
