import React, { Component } from 'react';
import {
	Container,
	Text,
	Content,
	Button,
	Footer,
	FooterTab,
} from 'native-base';

import styles from './styles';
import ItemListAcc from './ItemListAcc';
import Searchbar from "./../../searchbar/searchbar";



class ListAccount extends Component {
	constructor() {
		super();
		this.state = {
			data: [{
				Id: "1",
				Name: "A",
				Phone: "0123789320"
			},
			{
				Id: "2",
				Name: "B",
				Phone: "0989787262"
			},
			{
				Id: "3",
				Name: "C",
				Phone: "0982753624"
			}
			]
		}
	}

	sortByNameAZ = () => {
		this.setState({ data: this.state.data.sort((a, b) => a.Name.localeCompare(b.Name)) });
	}

	sortByNameZA = () => {
		this.setState({ data: this.state.data.sort((a, b) => b.Name.localeCompare(a.Name)) });
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
					title="HR" />

				<Content>
					{this.state.data.map(data => {
						return (
							<ItemListAcc key={data.Id}
								Id={data.Id}
								Name={data.Name}
								Phone={data.Phone}
								Navigate={navigate}

							>
							</ItemListAcc>
						)
					})}
				</Content>

				<Footer>
					<FooterTab>
						<Button
							rounded
							onPress={() => navigate('CreateAcc')}
						>
							<Text style={{ fontSize: 20, color: '#fff' }}>+</Text>
						</Button>
					</FooterTab>
				</Footer>

			</Container>
		);
	}
}

export default ListAccount;
