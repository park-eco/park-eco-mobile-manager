import React, { Component } from "react";
import {
	Container,
	Header,
	Title,
	Content,
	Text,
	Button,
	Icon,
	Left,
	Right,
	Body
} from "native-base";

import styles from "./styles";

class TheParking extends Component {
	constructor() {
		super();
		this.state = {
			parkingLotInformation: null
		};
	}

	// Call API to fetch information. When it finishes, it promises to fill the states with parking lot data.
	getParkingLotInformation() {
		getAllParkingLots().then((response) => {
			console.log(response);
			this.setState({
				firstParkingLot: response
			});
		});
	}

	componentDidMount() {
		this.getParkingLotInformation();
	}

	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.openDrawer()}
						>
							<Icon name="ios-menu" />
						</Button>
					</Left>
					<Body>
						<Title>The Parking</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Text>Content goes here</Text>
				</Content>
			</Container>
		);
	}
}

export default TheParking;