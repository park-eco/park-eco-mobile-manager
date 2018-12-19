import React, { Component } from "react";
import { View, Text } from "native-base";
import Btn from 'react-native-micro-animated-button';
import Dialog from "react-native-dialog";
import { AsyncStorage } from 'react-native';
import styles from "./styles";

class ServerInput extends Component {
    constructor() {
        super();
        this.state = {
            width: 60,
            clicked: false,
            server: "",
            dialogVisible: false,
            status: "No server are running!",
        };
    }

    onPress = () => {
        this.setState({ clicked: true, dialogVisible: true });
    }

    onSecondaryPress = () => {
        this.setState({
            width: 60,
            clicked: false,
            server: "",
            status: "No server are running!"
        }, () => this.btn.reset());
    }

    handleCancel = () => {
        this.setState({ clicked: false, dialogVisible: false }, () => this.btn.reset());
    }

    handleRunServer = () => {
        this.setState({
            width: 40,
            dialogVisible: false,
            status: `Runing on ${this.state.server}`
        }, () => {
            this.btn.success();
            this._storeData();
        });
    }

    onChangeText = (value) => {
        this.state.server = value;
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem('SERVER', this.state.server);
            // BACKEND_ROOT_URL = this.state.server;
        } catch (error) {
            // Error saving data
            console.log(error);
        }
    }

    _retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('SERVER');
            if (value !== null) {
                // We have data!!
                console.log(value);
                this.state.server = value;
                this.handleRunServer();
            }
        } catch (error) {
            // Error retrieving data
            console.log(error);
        }
    }

    componentDidMount() {
        this._retrieveData();
    }


    render() {
        return (
            <View style={this.props.style}>
                <Text style={styles.statusServer}>{this.state.status}</Text>

                <Btn
                    style={{ width: this.state.width }}
                    foregroundColor="orange"
                    icon="cloud-download"
                    onPress={this.onPress}
                    onSecondaryPress={this.onSecondaryPress}
                    ref={ref => (this.btn = ref)}
                    successBackgroundColor="#4cd964"
                    successIcon="retweet"
                />

                <Dialog.Container visible={this.state.dialogVisible}>
                    <Dialog.Title>Setting server</Dialog.Title>
                    <Dialog.Description>
                        Please enter your domain server!
                    </Dialog.Description>
                    <Dialog.Input placeholder="Your domain server"
                        onChangeText={this.onChangeText} />
                    <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                    <Dialog.Button label="Run" onPress={this.handleRunServer} />
                </Dialog.Container>
            </View>
        );
    }
}

export default ServerInput;
