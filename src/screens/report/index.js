import React, { Component } from "react";
import { View, Dimensions, ScrollView } from "react-native";
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

import styles from "./styles";
import { data, pieChartData } from "./data";

const chartConfig = {
	backgroundColor: '#0091EA',
	backgroundGradientFrom: '#0091EA',
	backgroundGradientTo: '#0091EA',
	color: (opacity = 1) => `rgba(${255}, ${255}, ${255}, ${opacity})`
}

class Report extends Component {
	render() {
		const width = Dimensions.get('window').width * 0.93;
		const height = 220;

		const labelStyle = {
			// color: chartConfig.color(),
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
					<ScrollView
						style={{
							// backgroundColor: chartConfig.backgroundColor
						}}
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