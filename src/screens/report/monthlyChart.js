import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  BarChart,
} from 'react-native-chart-kit';

class MonthlyChart extends Component {
  render() {
    return (
      <View>
        <BarChart
          width={this.props.width}
          height={this.props.height}
          data={this.props.data}
          chartConfig={this.props.chartConfig}
          style={this.props.style}
        />
        <Text style={this.props.labelStyle}>{this.props.label}</Text>
      </View>
    );
  }
}

export default MonthlyChart;