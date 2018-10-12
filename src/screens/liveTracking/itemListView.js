import React, { Component } from "react";
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
		console.log(phoneNumber);
		const args = {
			number: phoneNumber,
			prompt: false // Optional boolean property. Determines if the user should be prompt prior to the call 
		};

		call(args).catch(console.error);
	}

	render() {
		return (
			<Card>
				<CardItem>
					<Content>
						<ListItem icon>
							<Left>
								<Text>Status</Text>
							</Left>
							<Body>
								<Text>{this.props.status}%</Text>
							</Body>
							<Right>
								<Icon active name="circle" type="FontAwesome" 
											style={{ color: (this.props.status < 50) ? "green" : ( (this.props.status < 80) ? "yellow" : "red" ) }} />
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
												style={{ backgroundColor: "blue", width: 30, height: 30 }}>
									<Icon active name="call" style={{ width: 30, height: 30, marginLeft: 7 }} />
								</Button>
							</Right>
						</ListItem>
					</Content>
				</CardItem>
				<CardItem footer>
					<Text>{this.props.nameTheParking}</Text>
				</CardItem>
			</Card>
		);
	}
}

export default ItemListView;
