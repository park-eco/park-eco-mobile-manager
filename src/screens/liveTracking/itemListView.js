import React, { Component } from "react";
import { COLOR } from 'react-native-material-ui';
import {
	Content,
	Card,
	CardItem,
	Text,
	Left,
	Body,
	Right,
	ListItem,
	Icon,
	Button,
} from "native-base";
import call from 'react-native-phone-call'

class ItemListView extends Component {
	constructor(props){
		super(props);
		
		this.onPress = this.onPress.bind(this);
	}

	onPress(phoneNumber) {
		const args = {
			number: phoneNumber,
			prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
		};

		call(args).catch(console.error);
	}

	render() {
		const statusPer = parseFloat(this.props.current / this.props.max);
		return (
			<Card style={this.props.style}>
				<CardItem style={this.props.style}>
					<Content>
						<ListItem icon>
							<Left>
								<Text>Status</Text>
							</Left>
							<Body>
								<Text>{this.props.current}/{this.props.max}</Text>
							</Body>
							<Right>
								<Icon active name="circle" type="FontAwesome" 
											style={{ color: (statusPer < 0.5) ? COLOR.green500 : ( (statusPer < 0.8) ? COLOR.yellow500 : COLOR.red500 ) }} />
							</Right>
						</ListItem>
						<ListItem icon>
							<Left>
								<Text>Working employee</Text>
							</Left>
							<Body>
								<Text>{this.props.nameWorkingEmployee}</Text>
							</Body>
							<Right>
								<Button onPress={ () => this.onPress(this.props.phoneNumberWorkingEmployee) }	
												style={{ backgroundColor: COLOR.blue500, width: 30, height: 30 }}>
									<Icon active name="call" style={{ width: 30, height: 30, marginLeft: 7 }} />
								</Button>
							</Right>
						</ListItem>
					</Content>
				</CardItem>
				<CardItem style={this.props.style} footer>
					<Text>{this.props.nameTheParking}</Text>
				</CardItem>
			</Card>
		);
	}
}

export default ItemListView;
