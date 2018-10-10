import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container } from "native-base";

import styles from "./styles";

class Background extends Component {
	render() {
		return (
			<Container style={styles.containerBackground}>
				<Image source={this.props.source} style={styles.background} />
			</Container>
		);
	}
}

export default Background;