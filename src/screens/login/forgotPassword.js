import React, { Component } from "react";
import { Text, View } from "native-base";
import { TouchableOpacity } from "react-native";
import Dialog from "react-native-dialog";
import RNRestart from 'react-native-restart';

import styles from "./styles";

class ForgotPasswor extends Component {
    constructor() {
        super();
        this.state = {
            dialogVisible: false,
            username: "",
            isDone: false,
        };
    }

    forgotPassword = () => {
        this.setState({ dialogVisible: true });
    }

    handleCancel = () => {
        this.state.username = "";
        this.setState({ dialogVisible: false });
    }

    done = () => {
        var promise = new Promise((resolve) => {
            this.setState({ isDone: false }, () => {
                resolve();
            });
        });

        promise.then( (onfulfilled) => {
            this.setState({ dialogVisible: false });
        }, (onrejected) => {
            RNRestart.Restart();
        });
    }

    handleSendRequestGetPassword = () => {
        this.setState({ isDone: true }, () => {
            this.state.username = "";
        });
    }

    onChangeText = (value) => {
        this.state.username = value;
    }


    render() {
        return (
            <View style={this.props.style}>
                <TouchableOpacity onPress={this.forgotPassword}
                    activeOpacity={0.4}
                    style={{ alignItems: 'center' }}>
                    <Text style={styles.forgotPassword}>Forgot your password?</Text>
                </TouchableOpacity>

                <Dialog.Container ref={ (ref) => this.resetPasswordDialog = ref } visible={this.state.dialogVisible}>
                    <Dialog.Title>Reset password</Dialog.Title>
                    <Dialog.Description>
                        Please enter your username!
                    </Dialog.Description>
                    <Dialog.Input   placeholder="Your username"
                                    onChangeText={this.onChangeText} />
                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="Submit" onPress={this.handleSendRequestGetPassword} />

                     <Dialog.Container ref={ (ref) => this.doneDialog = ref } visible={this.state.isDone}>
                        <Dialog.Title>Reset password successfully</Dialog.Title>
                        <Dialog.Description>
                            Let check your email to get new password
                        </Dialog.Description>
                        <Dialog.Button label="Done" onPress={this.done} />
                    </Dialog.Container>
                </Dialog.Container>
            </View>
        );
    }
}

export default ForgotPasswor;