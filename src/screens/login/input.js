import React, { Component } from "react";
import { Item, Input, Icon } from "native-base";

import styles from "./styles";

class KInput extends Component {
    constructor() {
        super();
        this.state = {
            value: ''
        };
    }

    onChangeText = (value) => {
        this.state.value = value;
    }

    clearInput = () => {
        this.input.setNativeProps({ text: '' }); // eslint-disable-line
        this.setState({ value: '' });
    };

    render() {
        return (
            <Item style={styles.kinput} rounded>
                <Icon style={{ color: "white" }} type="SimpleLineIcons" name={this.props.icon} />
                <Input  style={{ color: "white" }} 
                        placeholder={this.props.placeholder} 
                        secureTextEntry={this.props.secureTextEntry} 
                        placeholderTextColor="rgba(255, 255, 255, .7)"
                        onChangeText={this.onChangeText}
                        ref={ (ref) => this.input = ref }
                        />  
            </Item>
        );
    }
}

export default KInput;