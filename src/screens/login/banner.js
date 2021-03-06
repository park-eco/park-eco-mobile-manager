import React, { Component } from "react";
import { View, Label } from "native-base";
import { Image } from "react-native";

import styles from "./styles";

class Banner extends Component {
    render() {
        return (
            <View style={this.props.style}>
				<Image source={this.props.source} 
						style={styles.logoCircle}
						resizeMode="stretch"/>
            </View>
        );
    }
}

export default Banner;