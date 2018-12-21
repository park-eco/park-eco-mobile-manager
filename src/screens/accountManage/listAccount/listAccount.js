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
import ItemListAccount from './itemListAcc';
import Searchbar from "./../../searchbar/searchbar";
import { getAllAttendants } from "./../../../actions/parkingLotAttendant";


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
		getAllAttendants().then((response) => {
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
					title="Human Resource" />

				<Content>
					{this.state.data.map(data => {
						return (
							<ItemListAccount key={data.id}
								username={data.username}
								name={data.name}
								navigate={navigate}
							>
							</ItemListAccount>
						)
					})}
				</Content>

				<Footer style={{ backgroundColor: COLOR.blue400 }}>
					<FooterTab>
						<Button
							rounded
							onPress={() => this.props.navigation.navigate('CreateAccount')}
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
