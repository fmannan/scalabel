import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import classNames from 'classnames';
import theme from '../styles/theme';

interface Props = {
    name: string,
}

interface State = {
    checked: boolean,
}

/** Class representing attribute selector components in toolbox */
class AttributeSwitch extends React.Component<Props, State> {
    onChange: (e: React.SyntheticEvent<HTMLInputElement> => any;

    /**
    * Binds props.
    * @param {Object} props - Object mapping names to values
    */
    constructor(props: Props) {
        super(props);
        this.state = {checked: false};
        this.onChange = this.onChange.bind(this);
    }

    /**
    * Handles switch state change.
    * @param {Event} e
    */
    onChange(e: React.SyntheticEvent<HTMLInputElement>) {
        this.setState({checked: e.target.checked});
    }

    /**
    * Generates the component
    * @return {ReactComponent}
    */
    render() {
        return (
            <div className="form-group"
                 id={ 'custom_attribute_' + this.props.name + '_div' }>
                <FormControlLabel
                    control={
                        <Switch
                            checked={this.state.checked}
                            onChange={this.onChange}
                            value={this.props.name}
                        />
                    }
                    label={this.props.name}
                />
            </div>
        );
    }
}

export default AttributeSwitch;
