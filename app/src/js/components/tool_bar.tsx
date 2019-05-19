import React from 'react';
import {Category} from './toolbar_category';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import {renderTemplate, renderButtons} from '../common/label';
import List from '@material-ui/core/List/List';
import {genButton} from './general_button';

interface Props {
    categories: any[];
    attributes: any[];
    itemType: any;
    labelType: any;
}
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
        const {categories, attributes, itemType, labelType} = this.props;
        return (
            <div>
                <ListItem>
                    <Category categories={categories}/>
                </ListItem>
                <Divider variant='middle' />
                <List>
                    {attributes.map((element: any) => (
                        renderTemplate(element.toolType, this.handleToggle, element.name)
                    ))}
                </List>
                <Divider variant='middle' />
                <List>
                    <List>
                        {genButton({name: 'Remove'})}
                    </List>
                    {renderButtons(itemType, labelType)}
                </List>
            </div>
        );
    }
}
