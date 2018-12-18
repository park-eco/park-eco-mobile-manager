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
    Thumbnail,
    Container
} from "native-base";

class ViewDetail extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Content>
                    {/* <Text>{this.props.Id}</Text>
                    <Text>{this.props.Name}</Text>
                    <Text>{this.props.Phone}</Text> */}
                    <Text>ViewDetail</Text>
                </Content>
            </Container>
        );
    }
}

export default ViewDetail;