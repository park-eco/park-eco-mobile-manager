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
import Searchbar from './../../searchbar/searchbar';
import { COLOR } from 'react-native-material-ui';
import validate from './../../validation/validate_wrapper'
import styles from './styles';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            nameError: null,
            username: '',
            usernameError: null,
            email: '',
            emailError: null,
            phoneNumber: '',
            phoneNumberError: null,
            address: '',
        };
    }

    onCreate = () => {
        console.log(this.state);
    }

    render() {
        return (
            <Container style={styles.container}>
                <Searchbar
                    sortIncrease={this.sortByNameAZ}
                    sortDecrease={this.sortByNameZA}
                    title="Create User" />

                <Content padder>
                    <View style={{
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: 20
                    }}>
                        <Thumbnail square source={require('./../../../../assets/avatar.png')}
                            style={{ width: 150, height: 150 }} />
                    </View>

                    <Form>
                        <Item>
                            <Icon active name="person" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter fullname"
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
                        <Item>
                            <Icon active name="eye" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter usename"
                                value={this.state.username}
                                onChangeText={text => {
                                    this.setState({ ...this.state, username: text });
                                }}
                                onBlur={() => this.setState({
                                    usernameError: validate('required', this.state.username)
                                })}
                            />
                            {this.state.usernameError ? <Text style={{ color: COLOR.red400 }}>{this.state.usernameError}</Text> : null}
                        </Item>
                        <Item>
                            <Icon active name="mail" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter email"
                                value={this.state.email}
                                onChangeText={text =>
                                    this.setState({ ...this.state, email: text })}
                                onBlur={() => this.setState({
                                    emailError: validate('email', this.state.email)
                                })}
                            />
                            {this.state.emailError ? <Text style={{ color: COLOR.red400 }}>{this.state.emailError}</Text> : null}
                        </Item>
                        <Item>
                            <Icon active name="call" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter phone number"
                                value={this.state.phoneNumber}
                                onChangeText={text => {
                                    this.setState({ ...this.state, phoneNumber: text })
                                }}
                                onBlur={() => this.setState({
                                    phoneNumberError: validate('phoneNumber', this.state.phoneNumber)
                                })}
                            />
                            {this.state.phoneNumberError ? <Text style={{ color: COLOR.red400 }}>{this.state.phoneNumberError}</Text> : null}
                        </Item>
                        <Item>
                            <Icon active name="home" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter address"
                                value={this.state.address}
                                onChangeText={text =>
                                    this.setState({ ...this.state, address: text })}
                            />
                        </Item>
                    </Form>


                    <Text style={{ color: 'red', paddingTop: 10 }}>
                        {this.state.error}
                    </Text>
                </Content>

                <Footer style={{ backgroundColor: COLOR.blue400 }}>
                    <FooterTab>
                        <Button
                            rounded
                            onPress={this.onCreate}
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#fff' }}>submit</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default CreateAccount;
