// Mock data receive from server
const response = {
  parkings: ['All Parkings', 'Suối Tiên', 'Đầm Sen', 'CV Lê Thị Riêng', 'Coop Extra Linh Trung', 'Phố đi bộ Nguyễn Huệ'],
  data: [
    [5137, 10274, 100],
    [800, 1600, 16],
    [2105, 4210, 41],
    [559, 1108, 10],
    [746, 1492, 14],
    [927, 1854, 19],
  ]
}

// Mock parkings
const theParkings = ['All Parkings', 'Suối Tiên', 'Đầm Sen', 'CV Lê Thị Riêng', 'Coop Extra Linh Trung', 'Phố đi bộ Nguyễn Huệ'];

// Mock data object used for LineChart and BarChart
const data = {
  labels: ['Suối Tiên', 'Đầm Sen', 'CV Lê Thị Riêng', 'Coop Extra Linh Trung', 'Phố đi bộ Nguyễn Huệ'],
  datasets: [{
    data: [
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
      Math.random() * 100,
    ]
  }]
}

// Mock data object for Pie Chart
const pieChartData = [
  { name: response.parkings[1], population: response.data[1][2], color: '#1565C0', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: response.parkings[2], population: response.data[2][2], color: '#1976D2', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: response.parkings[3], population: response.data[3][2], color: '#2196F3', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: response.parkings[4], population: response.data[4][2], color: '#64B5F6', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 },
  { name: response.parkings[5], population: response.data[5][2], color: '#90CAF9', legendFontColor: 'rgba(255, 255, 255, 0.5)', legendFontSize: 15 }
]

// Mock data for table
const detailTableData = response.data;


export { theParkings, data, pieChartData, detailTableData }