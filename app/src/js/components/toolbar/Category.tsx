import React from 'react';
import AttributeSelector from './AttributeSelector';
import AttributeSwitch from './AttributeSwitch';
import classNames from 'classnames';
import theme from '../styles/theme';

interface Props = {
    attribute: any,
    index: number,
    action: () => any,
}

/** Class representing a category within the toolbox */
class Category extends React.Component<Props, {}> {
    name: string;

    /**
    * Binds props.
    * @param {Object} props - Object mapping names to values
    */
    constructor(props: Props) {
        super(props);
        this.name = this.props.attribute.name;
    }

    /**
    * Generates the component
    * @return {ReactComponent}
    */
    render() {
        if (this.props.attribute.toolType === 'switch') {
            return (
                <AttributeSwitch name={ this.name }
                    action={ this.props.action }
                    index={ this.props.index }/>
            );
        } else if (this.props.attribute.toolType === 'list') {
            let buttons = [];
            for (let i = 0; i < this.props.attribute.values.length; i++) {
                buttons.push(
                    <AttributeSelector index={ this.props.index }
                        color={ this.props.attribute.buttonColors[i] }
                        value={ this.props.attribute.values[i] }
                        action={ this.props.action }
                        subIndex={ i }/>
                );
            }
            return (
                <div className="form-group"
                     id={ 'custom_attribute_' + this.name + '_div' }>
                    <span>{ this.name }</span>
                    <div id="radios" className="btn-group attribute-btns"
                        data-toggle="buttons">
                        { buttons }
                    </div>
                </div>
            );
        } else {
            return (<div></div>);
        }
    }
}

export default Category;
