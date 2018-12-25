import React, { Component } from "react";
import {
    Card,
    CardItem,
    Body,
    Right,
    Text,
    Button,
    Thumbnail,
    View
} from "native-base";
import { COLOR } from 'react-native-material-ui';

class ItemListPark extends Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.navigate('ViewDetail', { parking: this.props.parking });
    }

    render() {
        return (
            <Card>
                <CardItem style={{}}>
                    <Body style={{ justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Thumbnail square source={require('./../../../../assets/parkingLot.png')}
                                style={{ width: 60, height: 60, marginRight: 10 }} />

                            <View style={{ justifyContent: 'flex-end' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Text style={{ color: COLOR.grey600 }}>Name</Text>
                                    <Text> {this.props.name}</Text>
                                </View>
                                <View style={{ flexDirection: 'row', marginTop: 12 }}>
                                    <Text style={{ color: COLOR.grey600 }}>Location</Text>
                                    <Text> {this.props.location}</Text>
                                </View>
                            </View>

                        </View>

                    </Body>
                    <Right>
                        <Button light
                            style={{ flex: 1 }}
                            onPress={this.onPress}
                        >
                            <Text>></Text>
                        </Button>
                    </Right>
                </CardItem>
            </Card>
        );
    }
}

export default ItemListPark;