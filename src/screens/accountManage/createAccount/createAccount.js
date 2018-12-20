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
import styles from './styles';

class CreateAccount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtName: '',
            nameValidate: true,
            txtUseName: '',
            useNameValidate: true,
            txtEmail: '',
            emailValidate: true,
            txtPhone: '',
            phoneValidate: true,
            txtAddress: '',
            addressValidate: true,
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
                                placeholder="Enter name"
                                value={this.state.txtName}
                                onChangeText={text => {
                                    this.setState({ ...this.state, txtName: text });
                                }}
                            />
                        </Item>
                        <Item>
                            <Icon active name="eye" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter usename"
                                value={this.state.txtUseName}
                                onChangeText={text => {
                                    this.setState({ ...this.state, txtUseName: text });
                                }}
                            />
                        </Item>
                        <Item>
                            <Icon active name="mail" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter email"
                                value={this.state.txtEmail}
                                onChangeText={text =>
                                    this.setState({ ...this.state, txtEmail: text })}
                            />
                        </Item>
                        <Item>
                            <Icon active name="call" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter phone number"
                                value={this.state.txtPhone}
                                onChangeText={text => {
                                    this.setState({ ...this.state, txtPhone: text })
                                }}
                            />
                        </Item>
                        <Item>
                            <Icon active name="home" style={{ fontSize: 30, color: '#387ef5' }} />
                            <Input
                                placeholder="Enter address"
                                value={this.state.txtAddress}
                                onChangeText={text =>
                                    this.setState({ ...this.state, txtAddress: text })}
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
