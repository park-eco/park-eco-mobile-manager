import React, { Component } from "react";
import { Dimensions, ScrollView, View } from "react-native";
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

const parkings = ['Suối Tiên', 'Đầm Sen', 'CV Lê Thị Riêng', 'Coop Extra Linh Trung'];
const types = ['Daily', 'Weekly', 'Monthly'];

const date = new Date();
const currentDate = date.getDate();
const currentMonth = date.getMonth() + 1;
const currentYear = date.getFullYear();

class Report extends Component {
	constructor(props, context) {
		super(props, context);
		this.state = {
			selectedParking: parkings[0],
			selectedType: types[0],
			selectedDateFrom: `${currentYear}-${currentMonth}-${currentDate - 1}`,
			selectedDateTo: `${currentYear}-${currentMonth}-${currentDate}`,
		}

		this._showDatePicker = this._showDatePicker.bind(this);
	}

	_showParkingPicker() {
		Picker.init({
			pickerTitleText: 'Select The Parking',
			pickerData: parkings,
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

	_showTypePicker() {
		Picker.init({
			pickerTitleText: 'Select Report Type',
			pickerData: types,
			selectedValue: [0],
			onPickerConfirm: data => {
				this.setState({ selectedType: data });
			},
			onPickerCancel: data => {
			},
			onPickerSelect: data => {
			}
		});

		Picker.show();
	}

	_createDateData() {
		let date = [];
		for (let i = 2015; i < 2099; i++) {
			let month = [];
			for (let j = 1; j < 13; j++) {
				let day = [];
				if (j === 2) {
					for (let k = 1; k < 29; k++) {
						day.push(k);
					}
					//Leap day for years that are divisible by 4, such as 2000, 2004
					if (i % 4 === 0) {
						day.push(29);
					}
				}
				else if (j in { 1: 1, 3: 1, 5: 1, 7: 1, 8: 1, 10: 1, 12: 1 }) {
					for (let k = 1; k < 32; k++) {
						day.push(k);
					}
				}
				else {
					for (let k = 1; k < 31; k++) {
						day.push(k);
					}
				}

				let _month = {};
				_month[j] = day;

				month.push(_month);
			}

			let _date = {};
			_date[i] = month;

			date.push(_date);
		}

		return date;
	}

	_showDatePicker(forWhat) {
		Picker.init({
			pickerTitleText: 'Select Date ' + forWhat,
			pickerData: this._createDateData(),
			onPickerConfirm: (pickedValue, pickedIndex) => {
				if (forWhat === 'From') {
					this.setState({ selectedDateFrom: `${pickedValue[0]}-${pickedValue[1]}-${pickedValue[2]}` });
				} else if (forWhat === 'To') {
					this.setState({ selectedDateTo: `${pickedValue[0]}-${pickedValue[1]}-${pickedValue[2]}` });
				}
			},
			onPickerCancel: (pickedValue, pickedIndex) => {
			},
			onPickerSelect: (pickedValue, pickedIndex) => {
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
							onPress={this._showTypePicker.bind(this)}>
							<Text>{this.state.selectedType}</Text>
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
							onPress={() => this._showDatePicker('From')}>
							<Text>{this.state.selectedDateFrom}</Text>
							<Icon name='arrow-down' />
						</Button>

						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.48,
							}}
							onPress={() => this._showDatePicker('To')}>
							<Text>{this.state.selectedDateTo}</Text>
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