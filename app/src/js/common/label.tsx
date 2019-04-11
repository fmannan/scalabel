import ListItem from '@material-ui/core/ListItem/ListItem';
import {SwitchBtn} from '../components/toolbar_switch';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {removeButtonStyles} from '../styles/2dbox';
import DeleteIcon from '@material-ui/icons/Delete';
import {ToolbarTrafficlight} from '../components/toolbar_trafficlight';
import List from '@material-ui/core/List/List';
import React from 'react';

/**
 * This is a Icon Button component that
 * displays the remove.
 * @param {object} props
 * @return {jsx} component
 */
function RemoveButtons(props: { classes: any, name: any }) {
    const {classes, name} = props;
    return (
        <div>
            <Button size='small' className={classes.button}>
                {name}
                <DeleteIcon fontSize='small' />
            </Button>
        </div>
    );
}
export const RemoveButton = withStyles(removeButtonStyles)(RemoveButtons);

export function renderTemplate(toolType: any, handeleToogle: any, name: any) {
    if (toolType === 'switch') {
        return (
            <SwitchBtn onChange = {handeleToogle} value = {name} />
    );
    } else if (toolType === 'list') {
        return (
            <ListItem>
                <ToolbarTrafficlight name={name} />
            </ListItem>
        );
    }
}

export function renderButtons(itemType: any, labelType: any) {
    if (itemType === 'video') {
        return (
            <List>
                <ListItem>
                    <RemoveButton name = {'End Object Trac'} />
                </ListItem>
                <ListItem>
                    <RemoveButton name = {'Track-Link'} />
                </ListItem>
            </List>
        );
    }
    if (labelType === 'box2d') {
        // do nothing
    } else if (labelType === 'segmentation' || labelType === 'lane') {
        if (labelType === 'segmentation') {
            if (itemType === 'image') {
                return (
                    <List>
                        <ListItem>
                            <RemoveButton name = {'Link'} />
                        </ListItem>
                        <ListItem>
                            <RemoveButton name = {'Quick-draw'} />
                         </ListItem>
                    </List>
                );
            }
        } else if (labelType === 'lane') {
            // do nothing
        }
    }
}
