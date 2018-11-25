// Mock data object used for LineChart and BarChart

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [{
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100
    ]
  }]
}

// Mock data object for Pie Chart

const pieChartData = [
  { name: 'Seoul', population: 45, color: '#1565C0', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: 'Toronto', population: 25, color: '#1976D2', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: 'Beijing', population: 15, color: '#2196F3', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: 'New York', population: 10, color: '#64B5F6', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: 'Moscow', population: 5, color: '#90CAF9', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15}
]


export { data, pieChartData }