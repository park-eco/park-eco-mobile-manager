import React, { Component } from "react";
import { View, Text } from "native-base";
import { TouchableOpacity } from "react-native";
import Btn from 'react-native-micro-animated-button';
import Dialog from "react-native-dialog";


class ServerInput extends Component {
    constructor() {
        super();
        this.state = {
            width: 60,
            clicked: false,
            server: "",
            dialogVisible: false,
            status: "No server to running!",
        };
    }

    onPress = () => {
        this.setState({ clicked: true,
                        dialogVisible: true });
    }

    onSecondaryPress = () => {
        this.setState({ width: 60, 
                        clicked: false,
                        server: "",
                        status: "No server to running!" }, () => this.btn.reset());
    }

    showDialog = () => {
        this.setState({ dialogVisible: true });
    }

    handleCancel = () => {
        this.setState({ dialogVisible: false });
    }

    handleRunServer = () => {
        this.setState({ width: 40, 
                        dialogVisible: false,
                        status: `Runing on ${this.state.server}` }, () => this.btn.success());
    }

    onChangeText = (value) => {
        this.state.server = value;
    }


    render() {
        return (
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: "white", marginLeft: 10, fontStyle: "italic" }}>{this.state.status}</Text>

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

                {this.state.dialogVisible && (
                    <View>
                        <TouchableOpacity onPress={this.showDialog}>
                            <Text>Show Dialog</Text>
                        </TouchableOpacity>
                        <Dialog.Container visible={true}>
                            <Dialog.Title>Setting server</Dialog.Title>
                            <Dialog.Description>
                                Please enter your domain server!
                            </Dialog.Description>
                            <Dialog.Input   placeholder="Your domain server"
                                            onChangeText={this.onChangeText}/>
                            <Dialog.Button label="Cancel" onPress={this.handleCancel} />
                            <Dialog.Button label="Run" onPress={this.handleRunServer} />
                        </Dialog.Container>
                    </View>
                )}
            </View>
        );
    }
}

export default ServerInput;
