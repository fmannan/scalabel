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

type Props = {
    categories: Object,
    attributes: Object,
}

export class ToolBar extends React.Component<Props> {
    render() {
        return (
            <div>
                <ListItem button onClick={goCreate}>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary='Create new project' />
                </ListItem>
            </div>
        )
    }

}


