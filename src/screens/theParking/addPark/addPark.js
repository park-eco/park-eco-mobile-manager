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

class AddPark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameError: false,
            // country: '',
            // countryError: null,
            // province: '',
            // provinceError: null,
            // city: '',
            // cityError: null,
            address: '',
            description: '',
            longitude: '',
            longitudeError: null,
            latitude: '',
            latitudeError: null,
        };
    }

    onCreate = () => {
        if (!this.state.nameError && !this.state.longitudeError && !this.state.latitudeError) {
            //address = this.state.address + ", " + this.state.city + ", " + this.state.province;

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
                                    nameError: validate(true, this.state.name)
                                })}
                            />
                            {this.state.nameError ? <Text style={{ color: COLOR.red400 }}>{this.state.nameError}</Text> : null}
                        </Item>
                        <Item floatingLabel
                            style={!this.state.nameError ? styles.input : styles.inputError}
                        >
                            <Label style={styles.lableInput}>Address</Label>
                            <Input
                                value={this.state.address}
                                onChangeText={text => {
                                    this.setState({ ...this.state, address: text });
                                }}
                            />
                        </Item>
                        <Item floatingLabel
                            style={!this.state.nameError ? styles.input : styles.inputError}
                        >
                            <Label style={styles.lableInput}>Longitude</Label>
                            <Input
                                value={this.state.longitude}
                                onChangeText={text => {
                                    this.setState({ ...this.state, longitude: text });
                                }}
                            />
                        </Item>
                        <Item floatingLabel
                            style={!this.state.nameError ? styles.input : styles.inputError}
                        >
                            <Label style={styles.lableInput}>Lattitude</Label>
                            <Input
                                value={this.state.latitude}
                                onChangeText={text => {
                                    this.setState({ ...this.state, latitude: text });
                                }}
                            />
                        </Item>
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

                <Footer style={styles.footer}>
                    <FooterTab>
                        <Button
                            rounded
                            onPress={() => this.props.navigation.navigate('ListPark')}
                        >
                            <Text style={{ fontSize: 16, color: '#fff' }}>cancel</Text>
                        </Button>
                    </FooterTab>
                    <FooterTab>
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
