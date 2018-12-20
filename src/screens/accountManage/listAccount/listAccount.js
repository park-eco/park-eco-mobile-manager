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
import ItemListAcc from './ItemListAcc';
import Searchbar from "./../../searchbar/searchbar";
import { getAllParkingLotAttendants } from "./../../../actions/parkingLotAttendant";
import { StackActions, NavigationActions } from 'react-navigation';


class ListAccount extends Component {
	constructor() {
		super();
		this.state = {
			data: []
		}
	}

	sortByNameAZ = () => {
		this.setState({ data: this.state.data.sort((a, b) => a.Name.localeCompare(b.Name)) });
	}

	sortByNameZA = () => {
		this.setState({ data: this.state.data.sort((a, b) => b.Name.localeCompare(a.Name)) });
	}

	componentDidMount() {
		getAllParkingLotAttendants().then((response) => {
			this.setState({ data: response });
		});
	}

	create = () => {
		// navigate and remove from stack
		const resetAction = StackActions.reset({
			index: 0,
			actions: [NavigationActions.navigate({ routeName: 'CreateAcc' })],
		});
		this.props.navigation.dispatch(resetAction);
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
					title="Human Resource" />

				<Content>
					{this.state.data.map(data => {
						return (
							<ItemListAcc key={data.id}
								username={data.username}
								name={data.name}
								email={data.email}
								phoneNumber={data.phoneNumber}
								navigate={navigate}
							>
							</ItemListAcc>
						)
					})}
				</Content>

				<Footer style={{ backgroundColor: COLOR.blue400 }}>
					<FooterTab>
						<Button
							rounded
							onPress={this.create}
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
