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
import { createNewParkingLot } from '../../../actions/parkingLotAction';
import { StackActions, NavigationActions } from 'react-navigation';

import styles from './styles';

class AddPark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameError: null,
            address: '',
            addressError: null,
            longitude: '',
            longitudeError: null,
            latitude: '',
            latitudeError: null,
            description: '',
        };
    }

    onCreate = () => {
        if (!this.state.nameError && !this.state.addressError && !this.state.longitudeError && !this.state.latitudeError) {
            createNewParkingLot(this.state.name, this.state.address, this.state.description, this.state.longitude, this.state.latitude).then((response) => {
                if (response == 200) {
                    // navigate and remove from stack
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'ViewDetail', params: { name: this.state.name } })],
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
                    title="Add Parking Lot" />

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
                        <Item floatingLabel
                            style={!this.state.nameError ? styles.input : styles.inputError}
                        >
                            <Label style={styles.lableInput}>Parking Lot name</Label>
                            <Input
                                value={this.state.name}
                                onChangeText={text => {
                                    this.setState({ ...this.state, name: text });
                                }}
                                onBlur={() => this.setState({
                                    nameError: validate('required', this.state.name)
                                })}
                            />
                        </Item>
                        {this.state.nameError ? <Text style={{ color: COLOR.red400, textAlign: 'right' }}>{this.state.nameError}</Text> : null}

                        <Item floatingLabel
                            style={!this.state.addressError ? styles.input : styles.inputError}
                        >
                            <Label style={styles.lableInput}>Address</Label>
                            <Input
                                value={this.state.address}
                                onChangeText={text => {
                                    this.setState({ ...this.state, address: text });
                                }}
                                onBlur={() => this.setState({
                                    addressError: validate('required', this.state.address)
                                })}
                            />
                        </Item>
                        {this.state.addressError ? <Text style={{ color: COLOR.red400, textAlign: 'right' }}>{this.state.addressError}</Text> : null}

                        <Item floatingLabel
                            style={!this.state.longitudeError ? styles.input : styles.inputError}
                        >
                            <Label style={styles.lableInput}>Longitude</Label>
                            <Input
                                value={this.state.longitude}
                                onChangeText={text => {
                                    this.setState({ ...this.state, longitude: text });
                                }}
                                onBlur={() => this.setState({
                                    longitudeError: isFloatValue(Number(this.state.longitude)) + validate('required', this.state.longitude)
                                })}
                            />
                        </Item>
                        {this.state.longitudeError ? <Text style={{ color: COLOR.red400, textAlign: 'right' }}>{this.state.longitudeError}</Text> : null}

                        <Item floatingLabel
                            style={!this.state.latitudeError ? styles.input : styles.inputError}
                        >
                            <Label style={styles.lableInput}>Lattitude</Label>
                            <Input
                                value={this.state.latitude}
                                onChangeText={text => {
                                    this.setState({ ...this.state, latitude: text });
                                }}
                                onBlur={() => this.setState({
                                    latitudeError: isFloatValue(Number(this.state.latitude)) + validate('required', this.state.latitude)
                                })}
                            />
                        </Item>
                        {this.state.latitudeError ? <Text style={{ color: COLOR.red400, textAlign: 'right' }}>{this.state.latitudeError}</Text> : null}

                        <Item floatingLabel
                            style={styles.input}
                        >
                            <Label style={styles.lableInput}>Description</Label>
                            <Input
                                value={this.state.description}
                                onChangeText={text => {
                                    this.setState({ ...this.state, description: text });
                                }}
                            />
                        </Item>

                    </Form>
                </Content>

                <Footer >
                    <FooterTab style={styles.footerTab}>
                        <Button
                            rounded
                            onPress={() => this.props.navigation.navigate('ListPark')}
                        >
                            <Text style={{ fontSize: 16, color: '#fff' }}>cancel</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab style={styles.footerTab}>
                        <Button
                            rounded
                            onPress={this.onCreate}
                        >
                            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#fff' }}>submit</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default AddPark;
