import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  PieChart,
} from 'react-native-chart-kit';

class AllParkingChart extends Component {
  render() {
    return (
      <View>
        <PieChart
          data={this.props.data}
          height={this.props.height}
          width={this.props.width}
          chartConfig={this.props.chartConfig}
          accessor='population'
          style={this.props.style}
          backgroundColor='#546E7A'
          paddingLeft='15'
        />
        <Text style={this.props.labelStyle}>{this.props.labelChart}</Text>
      </View>
    );
  }
}

export default AllParkingChart;