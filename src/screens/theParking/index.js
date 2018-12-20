import React, { Component } from "react";
import {
	Container,
	Content,
	Text,
} from "native-base";
import { getAllParkingLots } from "./../../actions/parkingLotAction";
import Searchbar from "./../searchbar/searchbar"

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
				parkingLotInformation: response
			});
		});
	}

	componentDidMount() {
		this.getParkingLotInformation();
	}

	render() {
		return (
			<Container style={styles.container}>
			<Searchbar
					sortIncrease={this.sortByNameAZ}
					sortDecrease={this.sortByNameZA}
					iconIncrease="sort-by-alpha"
					iconDecrease="sort-by-alpha"
					title="Parking Management" />

				<Content padder>
					<Text>Content goes here</Text>
				</Content>
			</Container>
		);
	}
}

export default TheParking;