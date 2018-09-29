import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container } from "native-base";

import styles from "./styles";

const background = require("../../../assets/backgroundLogin2.jpg");

class Background extends Component {
	render() {
		return (
			<Container style={styles.containerBackground}>
				<Image source={background} style={styles.background} />
			</Container>
		);
	}
}

export default Background;