import React, { Component } from "react";
import {
    Card,
    CardItem,
    Content,
    Left,
    Body,
    Right,
    Text,
    Button,
    Icon,
    Image,
    Thumbnail
} from "native-base";
import { navigatingAcc } from '../navigatingAcc';

class ItemListAcc extends Component {
    constructor(props) {
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    onPress() {
        this.props.Navigate('ViewDetail');
    }

    render() {
        return (
            <Card style={this.props.style}>
                <CardItem style={this.props.style}>
                    <Left >
                        <Thumbnail square source={require('./avatar.png')}
                            style={{ width: 100, height: 100 }} />
                    </Left>
                    <Body >
                        <Text>{this.props.Id}</Text>
                        <Text>{this.props.Name}</Text>
                        <Text>{this.props.Phone}</Text>
                    </Body>
                    <Right >
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

export default ItemListAcc;