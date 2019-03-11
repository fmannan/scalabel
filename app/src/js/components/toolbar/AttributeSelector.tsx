import React from 'react';
import classNames from 'classnames';
import theme from '../styles/theme';

interface Props = {
    index: number,
    subIndex: number,
    color: string,
    value: string,
    action: (a: number, b: number) => any,
}

type State = {
    active: boolean
}

/** Class representing attribute selector components in toolbox */
class AttributeSelector extends React.Component<Props, State> {
    onClick: (e: React.SyntheticEvent<HTMLInputElement>) => any;

    /**
    * Binds props.
    * @param {Object} props - Object mapping names to values
    */
    constructor(props: Props) {
        super(props);
        this.state = {active: false};
        this.onClick = this.onClick.bind(this);
    }

    /**
    * Handles click action.
    * @param {Event} e
    */
    onClick(e: React.SyntheticEvent<HTMLInputElement>) {
        e.preventDefault();
        this.setState({active: !this.state.active});
        this.props.action(this.props.index, this.props.subIndex);
    }

    /**
    * Generates the component
    * @return {ReactComponent}
    */
    render() {
        let active = (this.state.active) ? 'active' : '';
        return (
            <button onClick={ this.onClick }
                id={ 'custom_attributeselector_' +
                this.props.index + '-' + this.props.subIndex }
                className={ 'btn btn-raised btn-attribute btn-' +
                this.props.color + ' ' + active}>
                <input type="radio"/>{ this.props.value }
            </button>
        );
    }
}

export default AttributeSelector;
