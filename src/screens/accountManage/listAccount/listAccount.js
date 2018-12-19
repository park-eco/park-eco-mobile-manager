import React, { Component } from 'react';
import {
	Container,
	Header,
	Body,
	Left,
	Right,
	Title,
	Icon,
	Text,
	Content,
	Button,
	Footer,
	FooterTab,
	Item
} from 'native-base';

import styles from './styles';
import { Table, Row, Rows } from 'react-native-table-component';
import ItemListAcc from './ItemListAcc';



class ListAccount extends Component {
	constructor() {
		super();
		this.state = {
			data: [{
				Id: "1",
				Name: "Nguyen Van A",
				Phone: "0123789320"
			},
			{
				Id: "2",
				Name: "Vu Thi Anh",
				Phone: "0989787262"
			},
			{
				Id: "3",
				Name: "Tran Thanh Tuan",
				Phone: "0982753624"
			}
			]
		}
		// this.state = {
		// 	tableHead: ['Id', 'Name', 'Phone', 'Email'],
		// 	tableData: [
		// 		['1', '2', '3', '4'],
		// 		['a', 'b', 'c', 'd'],
		// 		['1', '2', '3', '456\n789'],
		// 		['a', 'b', 'c', 'd']
		// 	]
		// }
	}
	render() {
		const { navigate } = this.props.navigation;

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
						<Title>Create Account</Title>
					</Body>
					<Right />
				</Header>

				<Content>
					<Container>
						<Content>
							{this.state.data.map(data => {
								return (
									<ItemListAcc Id={data.Id}
										Name={data.Name}
										Phone={data.Phone}
										Navigate = {navigate}
							
									>
									</ItemListAcc>
								)
							})}
						</Content>
					</Container>
					{/* <Container style={styles.container}>
						<Table borderStyle={{ borderWidth: 2, borderColor: '#6495ed' }}>
							<Row data={this.state.tableHead} style={styles.head} textStyle={styles.text} />
							<Rows data={this.state.tableData} textStyle={styles.text} />
						</Table>
					</Container> */}
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
