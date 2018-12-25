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
  View,
  Label
} from 'native-base';
import Searchbar from '../../searchbar/searchbar';
import { COLOR } from 'react-native-material-ui';
import { validate, isFloatValue } from '../../validation/validate_wrapper';
import { updateParkingLot } from '../../../actions/parkingLotAction';
import { StackActions, NavigationActions } from 'react-navigation';

import styles from './styles';

class EditPark extends Component {
  constructor(props) {
    super(props);
    this.state = {
      parkingLot: {},
      nameError: null,
      addressError: null,
      longitudeError: null,
      latitudeError: null,
    };
  }

  componentDidMount() {
    const parkingLot = this.props.navigation.getParam('parkingLot', null);
    if (parkingLot != null) {
      this.setState({ parkingLot: parkingLot });
    }
  }

  _onEdit = () => {
    if (!this.state.nameError && !this.state.addressError && !this.state.longitudeError && !this.state.latitudeError) {
      updateParkingLot(this.state.parkingLot).then((response) => {
        if (response == 200) {
          // navigate and remove from stack
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'ViewDetail', params: { parking: this.state.parkingLot } })],
          });
          this.props.navigation.dispatch(resetAction);
        }
      });
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
            <Item inlineLabel
              style={!this.state.nameError ? styles.input : styles.inputError}
            >
              <Label style={styles.lableInput}>Name</Label>
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
            <Item inlineLabel
              style={styles.input}
            >
              <Icon active name="home" style={{ fontSize: 30, color: '#387ef5' }} />
              <Input
                placeholder="Let's update address"
                value={this.state.parkingLot.address}
                onChangeText={text => {
                  this.setState({ ...this.state, parkingLot: { ...this.state.parkingLot, address: text } });
                }}
                onBlur={() => this.setState({
                  addressError: validate('required', this.state.parkingLot.address)
                })}
              />
              {this.state.addressError ? <Text style={{ color: COLOR.red400 }}>{this.state.addressError}</Text> : null}
            </Item>
            <Item inlineLabel
              style={styles.input}
            >
              <Icon active name="md-pin" style={{ fontSize: 30, color: '#387ef5' }} />
              <Input
                placeholder="Let's update longitude"
                value={this.state.parkingLot.longitude + ''}
                onChangeText={text => {
                  this.setState({ ...this.state, parkingLot: { ...this.state.parkingLot, longitude: text } });
                }}
                onBlur={() => this.setState({
                  longitudeError: isFloatValue(Number(this.state.parkingLot.longitude)) + validate('required', this.state.parkingLot.longitude)
                })}
              />
              {this.state.longitudeError ? <Text style={{ color: COLOR.red400 }}>{this.state.longitudeError}</Text> : null}
            </Item>
            <Item inlineLabel
              style={styles.input}
            >
              <Icon active name="md-pin" style={{ fontSize: 30, color: '#387ef5' }} />
              <Input
                placeholder="Let's update latitude"
                value={this.state.parkingLot.latitude + ''}
                onChangeText={text => {
                  this.setState({ ...this.state, parkingLot: { ...this.state.parkingLot, latitude: text } });
                }}
                onBlur={() => this.setState({
                  longitudeError: isFloatValue(Number(this.state.parkingLot.latitude)) + validate('required', this.state.parkingLot.latitude)
                })}
              />
              {this.state.latitudeError ? <Text style={{ color: COLOR.red400 }}>{this.state.latitudeError}</Text> : null}
            </Item>
            <Item inlineLabel
              style={styles.input}
            >
              <Icon active name="md-clipboard" style={{ fontSize: 30, color: '#387ef5' }} />
              <Input
                placeholder="Let's update description"
                value={this.state.parkingLot.description}
                multiline={true}
                onChangeText={text => {
                  this.setState({ ...this.state, parkingLot: { ...this.state.parkingLot, description: text } });
                }}
              />
            </Item>
          </Form>
        </Content>

        <Footer style={{ backgroundColor: COLOR.blue400 }}>
          <FooterTab>
            <Button
              rounded
              onPress={() => this.props.navigation.goBack()}
            >
              <Text style={{ fontSize: 16, color: '#fff' }}>cancel</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button
              rounded
              onPress={this._onEdit}
            >
              <Text style={{ fontSize: 16, color: '#fff' }}>submit</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default EditPark;
