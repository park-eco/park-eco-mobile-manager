import React, { Component } from "react";
import { Container, View, Button, H3, Text } from "native-base";

import styles from "./styles";

class Login extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<View
					style={{
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}>
					<H3>Login Page</H3>
					<Text>Press Login button to navigate to liveTracking page</Text>
					<Button
						style={{ backgroundColor: "#6FAF98", alignSelf: "center" }}
						onPress={() => this.props.navigation.navigate("Drawer")}
					>
						<Text>Login</Text>
					</Button>
				</View>
			</Container>
		);
	}
}

export default Login;