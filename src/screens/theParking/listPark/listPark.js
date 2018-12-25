import React, { Component } from 'react';
import {
	Container,
	Text,
	Content,
	Button,
	Footer,
	FooterTab,
} from 'native-base';
import { COLOR } from 'react-native-material-ui';
import styles from './styles';
import ItemListPark from './ItemListPark';
import Searchbar from "../../searchbar/searchbar";
import { getAllParkingLots } from "../../../actions/parkingLotAction";


class ListAccount extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	sortByNameAZ = () => {
		this.setState({ data: this.state.data.sort((a, b) => a.name.localeCompare(b.name)) });
	}

	sortByNameZA = () => {
		this.setState({ data: this.state.data.sort((a, b) => b.name.localeCompare(a.name)) });
	}

	componentDidMount() {
		getAllParkingLots().then((response) => {
			this.setState({ data: response });
		});
	}


	render() {
		const { navigate } = this.props.navigation;

		return (
			<Container style={styles.container}>
				<Searchbar
					sortIncrease={this.sortByNameAZ}
					sortDecrease={this.sortByNameZA}
					iconIncrease="sort-by-alpha"
					iconDecrease="sort-by-alpha"
					title="Parking Lot" />

				<Content>
					{this.state.data.map(data => {
						return (
							<ItemListPark key={data.name}
								name={data.name}
								location={data.address}
								navigate={navigate}
							>
							</ItemListPark>
						)
					})}
				</Content>

				<Footer>
					<FooterTab style={styles.footerTab}>
						<Button
							rounded
							onPress={() => this.props.navigation.navigate('AddPark')}
						>
							<Text style={{ fontSize: 20, fontWeight: 'bold', color: '#fff' }}>+</Text>
						</Button>
					</FooterTab>
				</Footer>

			</Container>
		);
	}
}

export default ListAccount;
