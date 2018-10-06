import React, { Component } from "react";
import { Container, View, Form, Text } from "native-base";
import { TouchableOpacity } from "react-native";

import styles from "./styles";
import Background from "./background";
import LoginButton from "./loginButton";
import KInput from "./input";
import Banner from "./banner";
import ServerInput from "./serverInput";

const background = require("../../../assets/background-login1.jpg");
const logo = require("../../../assets/icon-Parking-Systems.jpg");

class Login extends Component {
	constructor() {
		super();
	}

	onPress = () => {
		if (this.username.state.value == "1" && this.password.state.value == "1") {
			this.loginButton.btn.success();
		} else {
			this.loginButton.btn.error();
			this.clearAllInputs();
		}
	}

	clearAllInputs = () => {
		this.username.clearInput();
		this.password.clearInput();
	}

	forgotPassword = () => {

	}

	render() {
		return (
			<Container style={styles.container}>
				<Background source={background}/>
				<Banner source={logo}/>
				<ServerInput/>

				<View  style={{ alignItems: "center" }}>
					<Form>
						<KInput ref={ (ref) => this.username = ref }
								placeholder="Username" icon="user"
									/>
						<KInput ref={ (ref) => this.password = ref }
								placeholder="Password" icon="lock-open" secureTextEntry/>
					</Form>

					<LoginButton
						onRef={ (ref) => this.loginButton = ref }
						onPress={this.onPress}
					/>	

					<TouchableOpacity 	onPress={this.forgotPassword} 
										activeOpacity={0.4} 
										style={{ alignItems: 'center' }}>
						<Text style={{ 	color: "white", 
										fontSize: 14, 
										backgroundColor: "transparent",
										textDecorationLine: "underline" }}>Forgot your password?</Text>
					</TouchableOpacity>
				</View>

			</Container>
		);
	}
}

export default Login;
