import React, { Component } from "react";
import { Dimensions, ScrollView, View, TextInput, TouchableOpacity } from "react-native";
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
	Body,
} from "native-base";
import {
	LineChart,
	BarChart,
	PieChart,
} from "react-native-chart-kit";
import { data, pieChartData } from "./data";
import Picker from 'react-native-picker';
import styles from "./styles";

const chartConfig = {
	backgroundColor: '#0091EA',
	backgroundGradientFrom: '#0091EA',
	backgroundGradientTo: '#0091EA',
	color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
}

class Report extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			selectedParking: this._createParkingData()[0],
		}
	}

	_createParkingData() {
		let data = [];
		for (var i = 0; i < 100; i++) {
			data.push(i);
		}

		return data;
	}

	_showParkingPicker() {
		Picker.init({
			pickerData: this._createParkingData(),
			selectedValue: [0],
			onPickerConfirm: data => {
				this.setState({ selectedParking: data });
			},
			onPickerCancel: data => {
			},
			onPickerSelect: data => {
			}
		});

		Picker.show();
	}
	

	render() {
		const width = Dimensions.get('window').width
		const height = Dimensions.get('window').height

		const widthChart = width * 0.94
		const heightChart = 220

		const labelStyle = {
			marginVertical: 10,
			textAlign: 'center',
			fontSize: 16
		}
		const graphStyle = {
			marginVertical: 8,
			borderRadius: 16,
			...chartConfig.style
		}

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
						<Title>Report</Title>
					</Body>
					<Right />
				</Header>

				<View style={{ margin: 5, flex: 1, maxHeight: height * 0.25 }}>
					<View style={{
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.66,
								marginRight: 0
							}}
							onPress={this._showParkingPicker.bind(this)}>
							<Text>{this.state.selectedParking}</Text>
							<Icon name='arrow-down' />
						</Button>

						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.3,
							}}
							onPress={this._showParkingPicker.bind(this)}>
							<Text>{this.state.selectedParking}</Text>
							<Icon name='arrow-down' />
						</Button>
					</View>
					<View style={{
						marginTop: 5,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'space-between',
					}}>
						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.48,
							}}
							onPress={this._showParkingPicker.bind(this)}>
							<Text>{this.state.selectedParking}</Text>
							<Icon name='arrow-down' />
						</Button>

						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.48,
							}}
							onPress={this._showParkingPicker.bind(this)}>
							<Text>{this.state.selectedParking}</Text>
							<Icon name='arrow-down' />
						</Button>
					</View>
					<View style={{
						marginTop: 5,
						flexDirection: 'row',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.5,
								marginRight: 2,
								alignItems: 'center',
								justifyContent: 'center',
							}}
							onPress={this._showParkingPicker.bind(this)}>
							<Text style={{ fontWeight: 'bold' }}>VIEW CHART</Text>
							<Icon name='chart-bar' type='MaterialCommunityIcons' />
						</Button>
					</View>
				</View>

				<Content padder>
					<ScrollView
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
					>
						<LineChart
							data={data}
							width={widthChart}
							height={heightChart}
							chartConfig={chartConfig}
							bezier
							style={graphStyle}
						/>
						<Text style={labelStyle}>Bezier Line Chart</Text>

						<BarChart
							width={widthChart}
							height={heightChart}
							data={data}
							chartConfig={chartConfig}
							style={graphStyle}
						/>
						<Text style={labelStyle}>Bar Graph</Text>

						<PieChart
							data={pieChartData}
							height={heightChart}
							width={widthChart}
							chartConfig={chartConfig}
							accessor="population"
							style={graphStyle}
							backgroundColor='#546E7A'
							paddingLeft="15"
						/>
						<Text style={labelStyle}>Pie Chart</Text>

						<LineChart
							data={data}
							width={widthChart}
							height={heightChart}
							chartConfig={chartConfig}
							style={graphStyle}
						/>
						<Text style={labelStyle}>Line Chart</Text>
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

export default Report;