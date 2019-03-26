import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {goCreate} from '../common/service';
import CreateIcon from '@material-ui/core/SvgIcon/SvgIcon';

// player-controls
// Get the task
//
/* Sidebar: mainList */
export const ToolBar = (
    <div>
        <ListItem button onClick={goCreate}>
            <ListItemIcon>
                <CreateIcon />
            </ListItemIcon>
            <ListItemText primary='Create new project' />
        </ListItem>
    </div>
);
