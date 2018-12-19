import React, { Component } from 'react';
import { StatusBar } from 'react-native';

// withNavigation is a function to provide the navigation prop automatically (through React context, if you're curious)
import { withNavigation, StackActions, NavigationActions } from 'react-navigation';

import Btn from 'react-native-micro-animated-button';

StatusBar.setHidden(true, 'fade');

class LoginButton extends Component {
	constructor() {
		super();
		this.state = {
			username: ''
		}
	}

	componentDidMount() {
		this.props.onRef(this)
	}

	componentWillUnmount() {
		this.props.onRef(undefined)
	}

	onSuccess = () => {
		// navigate and remove from stack
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'Drawer', params: { username: this.state.username } })],
		});
		this.props.navigation.dispatch(resetAction);
	}

	onError = () => {
		this.btn.reset();
	}

	render() {
		return (
			<Btn
				foregroundColor="orange"
				successBackgroundColor="#4cd964"
				errorBackgroundColor="#ff3b30"
				labelStyle={{ fontWeight: "bold" }}
				label="Login"
				onPress={this.props.onPress}
				onSuccess={this.onSuccess}
				onError={this.onError}
				ref={(ref) => this.btn = ref}
				shakeOnError
			/>
		);
	}
}

export default withNavigation(LoginButton);