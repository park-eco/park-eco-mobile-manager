import React, { Component } from 'react';
import { View } from 'react-native';
import { Toolbar } from 'react-native-material-ui';

const SORT_INCREASE = "trending-up";
const SORT_DECREASE = "trending-down";

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            textAlign: "center",
            sortby: SORT_DECREASE,
        }
    }

    onLeftElementPress = () => {
        this.props.navigation.openDrawer();
    }

    onRightElementPress = () => {
        setTimeout(() => {
            if (this.state.sortby == SORT_DECREASE) {
                this.props.sortByStatusIncrease();
                this.setState({ sortby: SORT_INCREASE });
            } else {
                this.props.sortByStatusDecrease();
                this.setState({ sortby: SORT_DECREASE });
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
            <View style={{ marginTop: 20 }}>
                <Toolbar
                    leftElement="menu"
                    centerElement="Live Tracking"
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
                        titleText: { textAlign: this.state.textAlign },
                    }}
                />
            </View>
        );
    }
}

export default Searchbar;