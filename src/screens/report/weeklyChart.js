import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {
  LineChart,
} from 'react-native-chart-kit';

class WeeklyChart extends Component {
  render() {
    return (
      <View>
        <LineChart
          data={this.props.data}
          width={this.props.width}
          height={this.props.height}
          chartConfig={this.props.chartConfig}
          bezier
          style={this.props.style}
        />
        <Text style={this.props.labelStyle}>{this.props.label}</Text>
      </View>
    );
  }
}

export default WeeklyChart;