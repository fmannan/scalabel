import React from 'react';
import Category from './Category';
import classNames from 'classnames';
import theme from '../styles/theme';

interface Props = {
    current: any,
    config: any,
    action: () => any,
}

/** Class representing a React Toolbox component */
class Toolbar extends React.Component<Props, {}> {
    attributes: any;
    currItem: number;

    /**
    * Binds props
    * @param {Object} props - Object mapping names to values
    */
    constructor(props: Props) {
        super(props);
        this.attributes = this.props.config.attributes;
        this.currItem = this.props.current.item;
    }

    /**
    * Generates the component
    * @return {ReactComponent}
    */
    render() {
        let categories = [];
        this.attributes.map((attribute, index) => {
            categories.push(
                <Category attribute={ attribute }
                    action={ this.props.action }
                    index={ index }/>
            );
        });
        return (
            <div id="custom_attributes">
                { categories }
            </div>
        );
    }
}

export default Toolbar;
