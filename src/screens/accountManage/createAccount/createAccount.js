import React, { Component } from 'react';
import {
    Container,
    Header,
    Content,
    Item,
    Input,
    Icon,
    Form,
    Button,
    Text,
    Footer,
    FooterTab
} from 'native-base';

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

    async onCreatePressed() {
        this.props.navigation('ViewDetail');
    }

    validate(text, type) {
        alph = /^[a-zA-Z]+$/
        num = /^[0-9]+$/
        if (type == 'name') {
            if (alph.test(text)) {
                this.setState({
                    nameValidate: true,
                })
            }
            else {
                this.setState({
                    nameValidate: false,
                })
            }
        }
        else if (type == 'phone') {
            if (num.test(text)) {
                this.setState({
                    phoneValidate: true,
                })
            }
            else {
                this.setState({
                    phoneValidate: false,
                })
            }
        }
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header />
                <Content padder>
                    <Form>
                        <Item >
                            <Icon active name="person" style={{ color: '#387ef5' }} />
                            <Input
                                placeholder="Enter name"
                                value={this.state.txtName}
                                onChangeText={text => {
                                    this.validate(text, 'name');
                                    this.setState({ ...this.state, txtName: text });
                                }}
                            />                            
                        </Item>
                        <Item>
                            <Icon active name="eye" style={{ color: '#387ef5' }} />
                            <Input
                                style={[!this.state.nameValidate ? styles.error : null]}
                                placeholder="Enter usename"
                                value={this.state.txtUseName}
                                onChangeText={text => {
                                    this.validate(text, 'usename');
                                    this.setState({ ...this.state, txtUseName: text });
                                }}
                            />
                        </Item>
                        <Item>
                            <Icon active name="mail" style={{ color: '#387ef5' }} />
                            <Input
                                placeholder="Enter email"
                                value={this.state.txtEmail}
                                onChangeText={text =>
                                    this.setState({ ...this.state, txtEmail: text })}
                            />
                        </Item>
                        <Item>
                            <Icon active name="call" style={{ color: '#387ef5' }} />
                            <Input
                                style={[!this.state.phoneValidate ? styles.error : null]}
                                placeholder="Enter phone number"
                                value={this.state.txtPhone}
                                onChangeText={text => {
                                    this.validate(text, 'phone');
                                    this.setState({ ...this.state, txtPhone: text })
                                }}
                            />
                        </Item>
                        <Item>
                            <Icon active name="home" style={{ color: '#387ef5' }} />
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

                <Footer>
                    <FooterTab>
                        <Button
                            rounded
                            // onPress={this.onCreatePressed.bind(this)}
                            onPress={ () => this.props.navigation.navigate('ViewDetail')}
                        >
                            <Text style={{color: '#fff' }}>Create</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default CreateAccount;
