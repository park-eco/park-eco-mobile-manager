import React, { Component } from 'react';
import { View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

// withNavigation is a function to provide the navigation prop automatically (through React context, if you're curious)
import { withNavigation } from 'react-navigation'; 

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textAlign: "center",
            sortby: this.props.iconDecrease,
            currentState: "increase"
        }
    }

    onLeftElementPress = () => {
        this.props.navigation.openDrawer();
    }

    onRightElementPress = () => {
        setTimeout(() => {
            if (this.state.currentState == "decrease") {
                this.props.sortIncrease();
                this.setState({ sortby: this.props.iconIncrease, currentState: "increase" });
            } else {
                this.props.sortDecrease();
                this.setState({ sortby: this.props.iconDecrease, currentState: "decrease" });
            }
        }, 200);
    }

    onChangeText = (value) => {
        console.log(value);
    }

    onSearchPressed = () => {
        this.setState({ textAlign: "left" });
    }

    onSearchCloseRequested = () => {
        this.setState({ textAlign: "center" });
    }

    render() {
        return (
            <View style={{ marginTop: 0 }}>
                <Toolbar
                    leftElement="menu"
                    centerElement={this.props.title}
                    rightElement={this.state.sortby}

                    onLeftElementPress={this.onLeftElementPress}
                    onRightElementPress={this.onRightElementPress}

                    searchable={{
                        autoFocus: true,
                        placeholder: 'Search',
                        onChangeText: this.onChangeText,
                        onSearchPressed: this.onSearchPressed,
                        onSearchCloseRequested: this.onSearchCloseRequested,

                    }}

                    style={{
                        titleText: { textAlign: this.state.textAlign }
                    }}
                />
            </View>
        );
    }
}

export default withNavigation(Searchbar);