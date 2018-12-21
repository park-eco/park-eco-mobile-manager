import React, { Component } from "react";
import { Image } from "react-native";
import {
  Content,
  Text,
  List,
  ListItem,
  Icon,
  Container,
  Left,
  Right,
  Badge
} from "native-base";
import { COLOR } from 'react-native-material-ui';
import { getAttendant } from './../../actions/parkingLotAttendant'
import styles from "./style";

const drawerCover = require("../../../assets/background-login1.jpg");
const drawerImage = require("../../../assets/icon-Parking-Systems.jpg");
const datas = [
  {
    name: "LiveTracking",
    route: "LiveTracking",
    icon: "map-marker",
    type: "FontAwesome",
    bg: "#C5F442"
  },
  {
    name: "HumanResource",
    route: "HumanResource",
    icon: "human-greeting",
    type: "MaterialCommunityIcons",
    bg: "#C5F442"
  },
  {
    name: "TheParking",
    route: "TheParking",
    icon: "parking",
    type: "MaterialCommunityIcons",
    bg: "#C5F442"
  },
  // {
  //   name: "Revenue",
  //   route: "Revenue",
  //   icon: "phone-portrait",
  //   bg: "#C5F442"
  // },
  {
    name: "Report",
    route: "Report",
    icon: "chart-areaspline",
    type: "MaterialCommunityIcons",
    bg: "#C5F442"
  },
];

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
  }

  _logout = () => {
    this.props.navigation.navigate('Login');
  }

  componentDidMount() {
    const username = this.props.navigation.getParam('username', 'null');
    
    getAttendant(username).then((response) => {
      this.setState({ user: response[0] });
    });
  }

  render() {
    return (
      <Container>
        <Content
          bounces={false}
          style={{ flex: 1, backgroundColor: "#fff", top: -1 }}
        >
          <Image source={drawerCover} style={styles.drawerCover} />
          <Image square style={styles.drawerImage} source={drawerImage} />

          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                noBorder
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Left>
                  <Icon
                    active
                    name={data.icon}
                    type={data.type}
                    style={{ color: "#777", fontSize: 26, width: 30 }}
                  />
                  <Text style={styles.text}>
                    {data.name}
                  </Text>
                </Left>
                {data.types &&
                  <Right style={{ flex: 1 }}>
                    <Badge
                      style={{
                        borderRadius: 3,
                        height: 25,
                        width: 72,
                        backgroundColor: data.bg
                      }}
                    >
                      <Text
                        style={styles.badgeText}
                      >{`${data.types} Types`}</Text>
                    </Badge>
                  </Right>}
              </ListItem>}
          />

          <ListItem style={{ marginTop: 150 }}>
            <Left>
              <Icon
                active
                name='user-circle-o'
                type='FontAwesome'
                style={{ color: "#777", fontSize: 26, width: 30 }}
              />
              <Text style={styles.text}>
                {this.state.user.name}
              </Text>
            </Left>
            <Right>
              <Icon
                active
                name='logout'
                type='MaterialCommunityIcons'
                style={{ color: "#777", fontSize: 26, width: 30 }}
                onPress={this._logout}
              />
            </Right>
          </ListItem>
          <Text style={{ marginTop: 7, fontSize: 11, color: COLOR.grey600, textAlign: "center" }}>© 2018 ParkEco, Inc.</Text>
        </Content>
      </Container>
    );
  }
}

export default SideBar;
