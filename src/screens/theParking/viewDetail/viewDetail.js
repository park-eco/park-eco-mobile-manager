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
import Searchbar from './../../searchbar/searchbar';
import { COLOR } from 'react-native-material-ui';
import { getParkingLot } from './../../../actions/parkingLotAction';

import styles from './styles';

class ViewDetail extends Component {
	constructor(props) {
		super(props);
		this.state = {
			parkingLot: {}
		};
	}

	componentDidMount() {
		const parking = this.props.navigation.getParam('parking', null);

		if (name != null) {
			this.setState({ parkingLot: parking });
		}

		// have not getparkinglot by name, yet
		// getParkingLot(name).then((response) => {
		// 	this.setState({ parkingLot: response[0] });
		// });
	}

	render() {
		return (
			<Container style={styles.container}>
				<Searchbar
					sortIncrease={this.sortByNameAZ}
					sortDecrease={this.sortByNameZA}
					title={this.state.parkingLot.name} />

				<Content padder>
					<View style={{
						flex: 1,
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: 20
					}}>
						<Thumbnail square source={require('./../../../../assets/parkingLot.png')}
							style={{ width: 150, height: 150 }} />
					</View>

					<Form>
						<Item>
							<Input
								placeholder="Let's update name"
								value={this.state.parkingLot.name}
								disabled
								style={{ color: COLOR.grey700, textAlign: "center" }}
							/>
						</Item>
						<Item>
							<Icon active name="home" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update address"
								value={this.state.parkingLot.address}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
						<Item>
							<Icon active name="md-pin" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update longitude"
								value={this.state.parkingLot.longitude + ''}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
						<Item>
							<Icon active name="md-pin" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update latitude"
								value={this.state.parkingLot.latitude + ''}
								disabled
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
						<Item>
							<Icon active name="md-clipboard" style={{ fontSize: 30, color: '#387ef5' }} />
							<Input
								placeholder="Let's update description"
								value={this.state.parkingLot.description}
								disabled
								multiline={true}
								style={{ color: COLOR.grey700 }}
							/>
						</Item>
					</Form>
				</Content>

				<Footer style={{ backgroundColor: COLOR.blue400 }}>
					<FooterTab>
						<Button
							rounded
							onPress={() => this.props.navigation.navigate('ListPark')}
						>
							<Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>Good!</Text>
						</Button>
					</FooterTab>
					<FooterTab>
						<Button
							rounded
							onPress={() => this.props.navigation.navigate('EditPark', { parkingLot: this.state.parkingLot })}
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