import ListItem from '@material-ui/core/ListItem/ListItem';
import {SwitchBtn} from '../components/toolbar_switch';
import {genButton} from '../components/general_button';
import {ToolbarTrafficlight} from '../components/toolbar_trafficlight';
import List from '@material-ui/core/List/List';
import React from 'react';

/**
 * This is a Icon Button component that
 * displays the remove.
 * @param {object} props
 * @return {jsx} component
 */

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
                    {genButton({name: 'End Object Trac'})}
                </ListItem>
                <ListItem>
                    {genButton({name: 'Track-Link'})}
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
                            {genButton({name: 'Link'})}
                        </ListItem>
                        <ListItem>
                            {genButton({name: 'Quick-draw'})}
                         </ListItem>
                    </List>
                );
            }
        } else if (labelType === 'lane') {
            // do nothing
        }
    }
}
