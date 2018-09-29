import React, { Component } from "react";
import { Container } from "native-base";

import styles from "./styles";
import Background from "./background";

class Login extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Background/>	

			</Container>
		);
	}
}

export default Login;
  