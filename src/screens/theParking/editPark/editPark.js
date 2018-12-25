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
                />
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
                />
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
                />
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
