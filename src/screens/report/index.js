import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import {
	Container,
	Content,
	Text,
	Button,
	Icon,
} from 'native-base';
import { data, pieChartData, detailTableData, theParkings } from './data';
import Picker from 'react-native-picker';

import AllParkingChart from './allParkingChart';
import WeeklyChart from './weeklyChart';
import DailyChart from './dailyChart';
import MonthlyChart from './monthlyChart';
import TableDetail from './tableDetail';
import Searchbar from './../searchbar/searchbar';

import styles from './styles';

const chartConfig = {
	backgroundColor: '#0091EA',
	backgroundGradientFrom: '#0091EA',
	backgroundGradientTo: '#0091EA',
	color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
}

const parkings = theParkings;
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
			chartType: 0,
			chartLabel: `All Parkings ${types[0]} Chart`
		}

		this._showDatePicker = this._showDatePicker.bind(this);
	}

	_showParkingPicker() {
		Picker.init({
			pickerTitleText: 'Select The Parking',
			pickerData: parkings,
			selectedValue: [0],
			onPickerConfirm: data => {
				this.setState({ selectedParking: data[0] });
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
				this.setState({ selectedType: data[0] });
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

	_viewChart() {
		if (this.state.selectedParking == parkings[0]) {
			// Chart all parking
			this.setState({ chartType: 0, chartLabel: `All Parkings ${this.state.selectedType} Chart` });
		} else {
			// Daily type chart for 1 parking
			if (this.state.selectedType == types[0]) {
				this.setState({ chartType: 1 });
			}

			// Weekly type chart for 1 parking
			if (this.state.selectedType == types[1]) {
				this.setState({ chartType: 2 });
			}

			// Monthly type chart for 1 parking
			if (this.state.selectedType == types[2]) {
				this.setState({ chartType: 3 });
			}
		}
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
				<Searchbar
					title="Report" />

				<View style={{ ...styles.containerFilter, maxHeight: height * 0.25 }}>
					<View style={styles.rowFilter}>
						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.66,
							}}
							onPress={this._showParkingPicker.bind(this)}>
							<Text>{this.state.selectedParking}</Text>
							<Icon name='ios-arrow-down' type='Ionicons' />
						</Button>

						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.3,
							}}
							onPress={this._showTypePicker.bind(this)}>
							<Text>{this.state.selectedType}</Text>
							<Icon name='ios-arrow-down' type='Ionicons' />
						</Button>
					</View>
					<View style={{
						marginTop: 5,
						...styles.rowFilter
					}}>
						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.48,
							}}
							onPress={() => this._showDatePicker('From')}>
							<Text>{this.state.selectedDateFrom}</Text>
							<Icon name='calendar' type='EvilIcons' />
						</Button>

						<Button iconRight
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.48,
							}}
							onPress={() => this._showDatePicker('To')}>
							<Text>{this.state.selectedDateTo}</Text>
							<Icon name='calendar' type='EvilIcons' />
						</Button>
					</View>
					<View style={styles.buttonContainer}>
						<Button iconRight
							onPress={this._viewChart.bind(this)}
							style={{
								backgroundColor: chartConfig.backgroundColor,
								width: width * 0.5,
								...styles.buttonViewChart,
							}}>
							<Text style={{ fontWeight: 'bold' }}>VIEW CHART</Text>
							<Icon name='chart-bar' type='MaterialCommunityIcons' />
						</Button>
					</View>
				</View>

				<Content padder>
					<ScrollView
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}>

						{this.state.chartType === 0 &&
							<AllParkingChart
								data={pieChartData}
								height={heightChart}
								width={widthChart}
								chartConfig={chartConfig}
								style={graphStyle}
								labelStyle={labelStyle}
								labelChart={this.state.chartLabel}>
							</AllParkingChart>
						}

						{this.state.chartType === 1 &&
							<DailyChart
								data={data}
								width={widthChart}
								height={heightChart}
								chartConfig={chartConfig}
								style={graphStyle}
								labelStyle={labelStyle}
								label={'Daily Chart'}>
							</DailyChart>
						}

						{this.state.chartType === 2 &&
							<WeeklyChart
								data={data}
								width={widthChart}
								height={heightChart}
								chartConfig={chartConfig}
								style={graphStyle}
								labelStyle={labelStyle}
								label={'Weekly Chart'}>
							</WeeklyChart>
						}

						{this.state.chartType === 3 &&
							<MonthlyChart
								data={data}
								width={widthChart}
								height={heightChart}
								chartConfig={chartConfig}
								style={graphStyle}
								labelStyle={labelStyle}
								label={'Monthly Chart'}>
							</MonthlyChart>
						}

						<TableDetail
							labelStyle={labelStyle}
							labelTable={'Detailed Statistics Table'}
							theParkings={parkings}
							detailData={detailTableData}>
						</TableDetail>

					</ScrollView>
				</Content>
			</Container>
		);
	}
}

export default Report;