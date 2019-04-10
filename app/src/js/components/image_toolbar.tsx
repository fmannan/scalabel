import React from 'react';
import {removeButtonStyles} from '../styles/2dbox';
import {SwitchBtn} from './toolbar_switch';
import {ToolbarTrafficlight} from './toolbar_trafficlight';
import {Category} from './toolbar_category';
import ListItem from '@material-ui/core/ListItem';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List/List';

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

/**
 * This is ToolBar component that displays
 * all the attributes and categories for the 2D bounding box labeling tool
 */
export class ToolBar extends React.Component<Props> {
    constructor(Props: Readonly<Props>) {
        super(Props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
                checked: []
            };
    }
    /**
     * This function updates the checked list of switch buttons.
     * @param {array} checked
     * @param {string} switchName
     */
    private handleToggle = (switchName: any) => () => {
        // @ts-ignore
        const {checked} = this.state;
        const currentIndex = checked.indexOf(switchName);
        const newChecked = [...checked];

        if (currentIndex === -1) {
            newChecked.push(switchName);
        } else {
            newChecked.splice(currentIndex, 1);
        }

        this.setState({
            checked: newChecked
        });
    };
    /**
     * ToolBar render function
     * @return {jsx} component
     */
    public render() {
        const {categories, attributes} = this.props;
        return (
            <div>
                <ListItem>
                    <Category categories={categories}/>
                </ListItem>
                <Divider variant='middle' />
                <List>
                    {attributes.map((element: any) => (
                        renderSwitches(element.toolType, this.handleToggle(, name))
                    ))}
                </List>
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

function renderSwitches(toolType: any, handeleToogle: any, name: any) {
    if toolType === 'switch' {
        return (
            <SwitchBtn onChange = {handeleToogle} value = {name} />
        );
    }
}
