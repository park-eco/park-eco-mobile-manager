import React, { Component } from "react";
import BottomNavigation, { FullTab } from 'react-native-material-bottom-navigation';
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

import styles from "./styles";

import ItemListView from "./itemListView";

class LiveTracking extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: "listViewMode",
    };
    this.arr = ["1", "2", "3"];
  }

  tabs = [
    {
      key: "listViewMode",
      icon: "list-alt",
      label: "List Mode",
      barColor: "#388E3C",
      pressColor: "rgba(255, 255, 255, 0.16)"
    },
    {
      key: "mapViewMode",
      icon: "map",
      label: "Map Mode",
      barColor: "#E64A19",
      pressColor: "rgba(255, 255, 255, 0.16)"
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
            <Title>Live Tracking</Title>
          </Body>
          <Right />
        </Header>

        {this.state.activeTab == "listViewMode" &&
          <Content>
            {this.arr.map( element => {
              return (
                <ItemListView key={element} name="Công viên Lê Thị Riêng" address="12, Cộng Hoà, Tân Bình, Tp.HCM"></ItemListView>
              );
            })}
          </Content>
        }

        {this.state.activeTab == "mapViewMode" &&
          <Content>
           <Text>Content goes mapViewMode</Text>
          </Content>
        }

        <BottomNavigation
          onTabPress={newTab => {
            this.setState({ activeTab: newTab.key });
            console.log(this.state.activeTab);
          } }
          renderTab={this.renderTab}
          tabs={this.tabs}
        />
      </Container>
    );
  }
}

export default LiveTracking;
