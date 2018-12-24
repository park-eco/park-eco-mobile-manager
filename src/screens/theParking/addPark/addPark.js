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

class AddPark extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameError: null,
            country: '',
            countryError: null,
            province: '',
            provinceError: null,
            city: '',
            cityError: null,
            address: '',
            zip: '',
            zipError: null,
            maxNumber: '',
            maxNumberError: null,
        };
    }

    onCreate = () => {
        if (!this.state.nameError && !this.state.countryError && !this.state.provinceError && !this.state.cityError && !this.state.zipError && !this.state.maxNumberError) {
            address = this.state.address + ", " + this.state.city + ", " + this.state.province;

            createNewParkingLot(this.state.name, this.state.address, this.state.zip).then((response) => {
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
                    title="Add Park" />

                <Content padder>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        {/* <Thumbnail square source={require('./../../../../assets/avatar.png')}
                            style={{ width: 150, height: 150 }} /> */}
                    </View>

                    <Form>
                        <Item rounded>
                            <Input
                                placeholder="Park's name"
                                value={this.state.name}
                                onChangeText={text => {
                                    this.setState({ ...this.state, name: text });
                                }}
                                onBlur={() => this.setState({
                                    nameError: validate('required', this.state.name)
                                })}
                            />
                            {this.state.nameError ? <Text style={{ color: COLOR.red400 }}>{this.state.nameError}</Text> : null}
                        </Item>
                        <Item rounded>
                            <Input
                                placeholder="Country"
                                value={this.state.country}
                                onChangeText={text => {
                                    this.setState({ ...this.state, country: text });
                                }}
                                onBlur={() => this.setState({
                                    countryError: validate('required', this.state.country)
                                })}
                            />
                            {this.state.countryError ? <Text style={{ color: COLOR.red400 }}>{this.state.countryError}</Text> : null}
                        </Item>
                        <Item rounded>
                            <Input
                                placeholder="Province"
                                value={this.state.province}
                                onChangeText={text =>
                                    this.setState({ ...this.state, province: text })}
                                onBlur={() => this.setState({
                                    provinceError: validate('', this.state.province)
                                })}
                            />
                            {this.state.provinceError ? <Text style={{ color: COLOR.red400 }}>{this.state.provinceError}</Text> : null}
                        </Item>
                        <Item rounded>
                            <Input
                                placeholder="City"
                                value={this.state.city}
                                onChangeText={text => {
                                    this.setState({ ...this.state, city: text })
                                }}
                                onBlur={() => this.setState({
                                    cityError: validate('', this.state.city)
                                })}
                            />
                            {this.state.cityError ? <Text style={{ color: COLOR.red400 }}>{this.state.cityError}</Text> : null}
                        </Item>
                        <Item rounded>
                            <Input
                                placeholder="Street"
                                value={this.state.address}
                                onChangeText={text =>
                                    this.setState({ ...this.state, address: text })}
                            />
                        </Item>                        
                        <Item rounded>
                            <Input
                                placeholder="ZIP"
                                value={this.state.zip}
                                onChangeText={text => {
                                    this.setState({ ...this.state, zip: text })
                                }}
                            />
                        </Item>
                        <Item rounded>
                            <Input
                                placeholder="Max number"
                                value={this.state.maxNumber}
                                onChangeText={text => {
                                    this.setState({ ...this.state, maxNumber: text })
                                }}
                            />
                        </Item>


                    </Form>
                </Content>

                <Footer style={{ backgroundColor: COLOR.blue400 }}>
                    <FooterTab>
                        <Button
                            rounded
                            onPress={()=> this.props.navigation.navigate('ListPark')}
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
