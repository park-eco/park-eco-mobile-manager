import React, { Component } from 'react';
import {
	Container,
	Content,
	Item,
	Input,
	Icon,
	Form,
	Button,
	Text,
	Footer,
	FooterTab,
	Thumbnail,
	View
} from 'native-base';
import { Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import Searchbar from './../../searchbar/searchbar';
import { COLOR } from 'react-native-material-ui';
import { getAttendant } from './../../../actions/parkingLotAttendant';
import call from 'react-native-phone-call'

import styles from './styles';

class ViewDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			user: {}
		};
	}

	componentDidMount() {
		const username = this.props.navigation.getParam('username', 'null');
		this.setState({ title: username + ' Profile' });

		getAttendant(username).then((response) => {
			this.setState({ user: response[0] });
		});
	}

	_onCall = () => {
		const args = {
			number: this.state.user.phoneNumber,
			prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
		};

		call(args).catch(console.error);
	}

	_onMail = () => {
		const url = 'mailto:support@example.com?subject=SendMail&body=Description';
		const urlbrowser = 'https://mail.google.com/mail/u/0/#inbox?compose=new';
		Linking.canOpenURL(url).then(supported => {
			if (!supported) {
				console.log('Can\'t handle url: ' + url);
				return Linking.openURL(urlbrowser);
			} else {
				return Linking.openURL(url);
			}
		}).catch(err => console.error('An error occurred', err));
	}

	render() {
		const width = Dimensions.get('window').width;

		return (
			<Container style={styles.container}>
				<Searchbar
					sortIncrease={this.sortByNameAZ}
					sortDecrease={this.sortByNameZA}
					title={this.state.title} />

				<Content padder>
					<View style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: 20
					}}>
						<Thumbnail square source={require('./../../../../assets/avatar.png')}
							style={{ width: 150, height: 150 }} />
					</View>

					<Form>
						<Item>
							<Icon active name="person" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update fullname"
								value={this.state.user.name}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
						<Item>
							<Icon active name="eye" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update usename"
								value={this.state.user.username}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
						<Item>
							<Icon active name="mail" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update email"
								value={this.state.user.email}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
						<Item>
							<Icon active name="call" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update phone number"
								value={this.state.user.phoneNumber}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
						<Item>
							<Icon active name="home" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update address"
								value={this.state.user.address}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
					</Form>
					<View style={{ flexDirection: 'row', marginLeft: width * 0.1 }}>
						<TouchableOpacity onPress={this._onMail}>
							<Image source={require('./../../../../assets/mail.gif')} style={{ width: width * 0.2, height: width * 0.2, marginTop: 35 }} />
						</TouchableOpacity>

						<TouchableOpacity onPress={this._onCall}>
							<Image source={require('./../../../../assets/call.gif')} style={{ width: width * 0.4, height: width * 0.4, marginLeft: width * 0.25 }} />
						</TouchableOpacity>
					</View>
				</Content>

				<Footer style={{ backgroundColor: COLOR.blue400 }}>
					<FooterTab>
						<Button
							rounded
							onPress={() => this.props.navigation.navigate('ListAccount')}
						>
							<Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Good!</Text>
						</Button>
					</FooterTab>
					<FooterTab>
						<Button
							rounded
							onPress={() => this.props.navigation.navigate('EditAccount', { user: this.state.user })}
						>
							<Text style={{ fontSize: 16, color: '#fff' }}>Edit</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default ViewDetail;