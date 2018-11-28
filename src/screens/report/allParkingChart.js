import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';
import {
  PieChart,
} from 'react-native-chart-kit';
import { Table, Row, Col, TableWrapper } from 'react-native-table-component';

class AllParkingChart extends Component {
  render() {
    const tableHead = ['', 'Head1', 'Head2', 'Head3', 'Head4'];
    const widthHeadArr = [120, 60, 60, 80, 100];
    const widthTableArr = [60, 60, 80, 100];
    const tableTitle = ['Title1', 'Title2', 'Title3', 'Title4', 'Title5', 'Title6'];
    const tableData = [
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
      [1, 2, 3, 4],
    ];

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

        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={styles.borderStyle}>
                <Row data={tableHead} widthArr={widthHeadArr} style={styles.header} textStyle={styles.text} />
              </Table>
              <ScrollView style={styles.dataWrapper}>
              <TableWrapper borderStyle={styles.borderStyle} style={styles.wrapper}>
              <Col  data={tableTitle} style={styles.title} textStyle={styles.text}/>
                <Table>
                  {
                    tableData.map((rowData, index) => (
                      <Row
                        key={index}
                        data={rowData}
                        widthArr={widthTableArr}
                        style={[styles.row, index % 2 && { backgroundColor: '#757575' }]}
                        textStyle={styles.text}
                      />
                    ))
                  }
                </Table>
              </TableWrapper>  
              </ScrollView>
            </View>
          </ScrollView>
        </View>
        <Text style={this.props.labelStyle}>{this.props.labelTable}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 30, backgroundColor: 'transparent', borderWidth: 0 },
  wrapper: { flexDirection: 'row' },
  title: { flex: 1, backgroundColor: '#546E7A', borderBottomLeftRadius: 20 },
  header: { height: 50, backgroundColor: '#546E7A', borderTopRightRadius: 20, borderTopLeftRadius: 20 },
  text: { textAlign: 'center', fontWeight: '200', color: '#FAFAFA' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#9E9E9E' },
  borderStyle: { borderWidth: 0.5, borderColor: '#CFD8DC' }
});

export default AllParkingChart;