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
			selectedValue: [59],
			onPickerConfirm: data => {
				console.log(data);
			},
			onPickerCancel: data => {
				console.log(data);
			},
			onPickerSelect: data => {
				console.log(data);
			}
		});

		Picker.show();
	}

	_toggle() {
		Picker.toggle();
	}

	_isPickerShow() {
		Picker.isPickerShow(status => {
			alert(status);
		});
	}

	render() {
		const width = Dimensions.get('window').width * 0.94;
		const height = 220;

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

				<Content padder>
					<View style={{ height: Dimensions.get('window').height }}>
						<TouchableOpacity style={{ marginTop: 40, marginLeft: 20 }} onPress={this._showParkingPicker.bind(this)}>
							<Text>ParkingPicker</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginTop: 10, marginLeft: 20 }} onPress={this._toggle.bind(this)}>
							<Text>toggle</Text>
						</TouchableOpacity>
						<TouchableOpacity style={{ marginTop: 10, marginLeft: 20 }} onPress={this._isPickerShow.bind(this)}>
							<Text>isPickerShow</Text>
						</TouchableOpacity>
						<TextInput
							placeholder="test picker with input"
							style={{
								height: 40,
								borderColor: 'gray',
								borderWidth: 1,
								marginLeft: 20,
								marginRight: 20,
								marginTop: 10,
								padding: 5
							}}
						/>
					</View>
					<ScrollView
						showsVerticalScrollIndicator={false}
						showsHorizontalScrollIndicator={false}
					>
						<Text style={labelStyle}>Bezier Line Chart</Text>
						<LineChart
							data={data}
							width={width}
							height={height}
							chartConfig={chartConfig}
							bezier
							style={graphStyle}
						/>
						<Text style={labelStyle}>Bar Graph</Text>
						<BarChart
							width={width}
							height={height}
							data={data}
							chartConfig={chartConfig}
							style={graphStyle}
						/>
						<Text style={labelStyle}>Pie Chart</Text>
						<PieChart
							data={pieChartData}
							height={height}
							width={width}
							chartConfig={chartConfig}
							accessor="population"
							style={graphStyle}
							backgroundColor='#546E7A'
							paddingLeft="15"
						/>
						<Text style={labelStyle}>Line Chart</Text>
						<LineChart
							data={data}
							width={width}
							height={height}
							chartConfig={chartConfig}
							style={graphStyle}
						/>
					</ScrollView>
				</Content>
			</Container>
		);
	}
}

export default Report;