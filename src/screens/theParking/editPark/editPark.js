import React, { Component } from 'react';
import {
  Container,
  Content,
  Item,
  Input,
  Icon,
  Form,
  Button,
  Text,
  Footer,
  FooterTab,
  Thumbnail,
  View
} from 'native-base';
import Searchbar from '../../searchbar/searchbar';
import { COLOR } from 'react-native-material-ui';
import validate from '../../validation/validate_wrapper'
import { createNewParkingLot } from '../../../actions/parkingLotAction';
import { StackActions, NavigationActions } from 'react-navigation';

import styles from './styles';

class EditPark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingLot: {},
      nameError: null,
      address: '',
    };
  }

  componentDidMount() {
    const parkingLot = this.props.navigation.getParam('parkingLot', {});
    this.setState({ parkingLot: parkingLot });
  }

  _onEdit = () => {
    if (!this.state.nameError) {
      // createNewParkingLotAttendant(this.state.name, this.state.username, this.state.email, this.state.phoneNumber).then((response) => {
      //   if (response == 200) {
      //     // navigate and remove from stack
      //     const resetAction = StackActions.reset({
      //       index: 0,
      //       actions: [NavigationActions.navigate({ routeName: 'ViewDetail', params: { username: this.state.username } })],
      //     });
      //     this.props.navigation.dispatch(resetAction);
      //   }
      // });
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Searchbar
          sortIncrease={this.sortByNameAZ}
          sortDecrease={this.sortByNameZA}
          title="Edit Parking Lot" />

        <Content padder>
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20
          }}>
            <Thumbnail square source={require('./../../../../assets/parkingLot.png')}
              style={{ width: 150, height: 150 }} />
          </View>

          <Form>
            <Item rounded>
              <Input
                placeholder="Let's update name"
                value={this.state.parkingLot.name}
                onChangeText={text => {
                  this.setState({ ...this.state, parkingLot: { ...this.state.parkingLot, name: text } });
                }}
                onBlur={() => this.setState({
                  nameError: validate('required', this.state.parkingLot.name)
                })}
              />
              {this.state.nameError ? <Text style={{ color: COLOR.red400 }}>{this.state.nameError}</Text> : null}
            </Item>
            <Item rounded>
              <Icon active name="home" style={{ fontSize: 30, color: '#387ef5' }} />
              <Input
                placeholder="Let's update address"
                value={this.state.parkingLot.address}
                onChangeText={text => {
                  this.setState({ ...this.state, parkingLot: { ...this.state.parkingLot, address: text } });
                }}
                />
            </Item>
          </Form>
        </Content>

        <Footer>
          <FooterTab style={styles.footerTab}>
            <Button
              rounded
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={{ fontSize: 16, color: '#fff' }}>cancel</Text>
            </Button>
          </FooterTab>
          <FooterTab style={styles.footerTab}>
            <Button
              rounded
              onPress={this._onEdit}
            >
              <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>submit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default EditPark;
