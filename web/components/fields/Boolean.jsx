import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { setConfig } from 'react-hot-loader';

class Boolean extends Component {
    constructor(props) {
        super(props);

        this.handleChange = (event) => {
            this.props.onChange(event.target.value);
        };
    }

    render() {
        const config = this.props.config;
        const value = this.props.value || String(config.default) || 'null';

        return <div style={{paddingTop: '10px'}}>
            <FormControl component="fieldset">
                <FormLabel component="legend">{config.label}</FormLabel>
                <RadioGroup
                    value={value}
                    onChange={this.handleChange}
                >
                    <FormControlLabel value="true" control={<Radio />} label={config.trueValue || 'True'} />
                    <FormControlLabel value="false" control={<Radio />} label={config.falseValue || 'False'} />
                </RadioGroup>
            </FormControl>
        </div>;
    }
}
 
export const id = 'boolean';
export default hot(Boolean);
