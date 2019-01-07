import React, { Component } from "react";
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
import { COLOR } from 'react-native-material-ui';
import {
  Container,
  Content,
  Icon,

} from "native-base";
import { getAllParkingLots } from '../../actions/parkingLotAction';

import styles from "./styles";

import ItemListView from "./itemListView";
import Searchbar from "../searchbar/searchbar";
import MapViewMode from "./mapViewMode";

const names = ['Yoda', 'Harry', 'Captain Kirk', 'Spock', 'Arnold', 'Gandalf', 'Magneto', 'Tony Stark', 'Bilbo', 'Obi Wan'];


class LiveTracking extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "listViewMode",
      data: []
    };
  }

  random() {
    return parseFloat((Math.random() * (-0.05 - 0.05) + 0.05).toFixed(5));
  }

  async componentDidMount() {
    getAllParkingLots().then((response) => {
      response.forEach((parking, index) => {
        parking.attendantAssignments = index;
        parking.nameWorkingEmployee = names[index];
        parking.phoneNumberWorkingEmployee = "0328372204";
        parking.coordinate = {
          latitude: parseFloat((10.789098 + this.random()).toFixed(5)),
          longitude: parseFloat((106.714493 + this.random()).toFixed(5)),
        }
      });

      this.setState({ data: response });
    });

    try {
      setInterval(async () => {
        getAllParkingLots().then((response) => {
          response.forEach((parking, index) => {
            parking.attendantAssignments = index;
            parking.nameWorkingEmployee = names[index];
            parking.phoneNumberWorkingEmployee = "0328372204";
            parking.coordinate = {
              latitude: parseFloat((10.789098 + this.random()).toFixed(5)),
              longitude: parseFloat((106.714493 + this.random()).toFixed(5)),
            }
          });

          this.setState({ data: response });
        });
      }, 5000);
    } catch (e) {
      console.log(e);
    }
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
                  nameTheParking={data.name}
                  current={data.currentCount}
                  max={data.maximumCapacity}
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
