import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { COLOR } from 'react-native-material-ui';
import {
  Container,
  Content,
  Icon,

} from "native-base";

import styles from "./styles";

import ItemListView from "./itemListView";
import Searchbar from "./../searchbar/searchbar";
import MapViewMode from "./mapViewMode";

class LiveTracking extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "listViewMode",
      data: [{
        id: "1",
        nameTheParking: "Công viên Hoàng Văn Thụ",
        status: 20,
        idWorkingEmployee: "333",
        nameWorkingEmployee: "Lee Khai",
        phoneNumberWorkingEmployee: "0328372201",
        coordinate: {
          latitude: 10.777956,
          longitude: 106.694605,
        },
      },
      {
        id: "2",
        nameTheParking: "Công viên Văn hoá Đầm Sen",
        status: 95,
        idWorkingEmployee: "334",
        nameWorkingEmployee: "Vo Ngoc",
        phoneNumberWorkingEmployee: "0328372202",
        coordinate: {
          latitude: 10.787401,
          longitude: 106.693692,
        },
      },
      {
        id: "3",
        nameTheParking: "Trường Đại học Công nghệ Thông tin, Đại học Quốc gia Thành phố Hồ Chí Minh",
        status: 20,
        idWorkingEmployee: "335",
        nameWorkingEmployee: "Huynh Kim",
        phoneNumberWorkingEmployee: "0328372203",
        coordinate: {
          latitude: 10.789098,
          longitude: 106.704493,
        },
      },
      {
        id: "4",
        nameTheParking: "Siêu thị Co.opXtra Thủ Đức",
        status: 70,
        idWorkingEmployee: "336",
        nameWorkingEmployee: "Lee Tuan",
        phoneNumberWorkingEmployee: "0328372204",
        coordinate: {
          latitude: 10.789098,
          longitude: 106.714493,
        },
      }]
    };
  }

  sortByStatusIncrease = () => {
    this.setState({ data: this.state.data.sort((a, b) => a.status - b.status) });
  }

  sortByStatusDecrease = () => {
    this.setState({ data: this.state.data.sort((a, b) => b.status - a.status) });
  }

  tabs = [
    {
      key: "listViewMode",
      icon: "list-alt",
      label: "List Mode",
      barColor: COLOR.blue400,
      pressColor: COLOR.lightBlue400
    },
    {
      key: "mapViewMode",
      icon: "map",
      label: "Map Mode",
      barColor: COLOR.blue400,
      pressColor: COLOR.lightBlue400
    }
  ]

  renderIcon = icon => ({ isActive }) => (
    <Icon type="FontAwesome" style={{ color: "white", fontSize: 20 }} name={icon} />
  )

  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}
    />
  )

  render() {
    return (
      <Container style={styles.container}>

        <Searchbar
          sortIncrease={this.sortByStatusIncrease}
          sortDecrease={this.sortByStatusDecrease}
          iconIncrease="trending-up"
          iconDecrease="trending-down"
          title="Live Tracking" />


        {this.state.activeTab == "listViewMode" &&
          <Content>
            {this.state.data.map(data => {
              return (
                <ItemListView key={data.id}
                  nameTheParking={data.nameTheParking}
                  status={data.status}
                  nameWorkingEmployee={data.nameWorkingEmployee}
                  phoneNumberWorkingEmployee={data.phoneNumberWorkingEmployee}>
                </ItemListView>
              );
            })}
          </Content>
        }

        {this.state.activeTab == "mapViewMode" &&
          <Content>
            <MapView style={styles.mapView}
              initialRegion={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}
            />
            <MapViewMode data={this.state.data}></MapViewMode>
          </Content>
        }

        <BottomNavigation
          onTabPress={newTab => {
            this.setState({ activeTab: newTab.key });
          }}
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </Container>
    );
  }
}

export default LiveTracking;
