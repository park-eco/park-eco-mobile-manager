import React, { Component } from "react";
import {
    Content,
    Card,
    CardItem,
    Text,
    Left,
    Body,
    Right,
    ListItem,
    Icon,
    Button,
} from "native-base";

class ItemListView extends Component {
    render() {
        return (
            <Card>
                <CardItem>
                    <Content>
                        <ListItem icon>
                            <Left>
                                <Text>Status</Text>
                            </Left>
                            <Body>
                                <Text>50%</Text>
                            </Body>
                            <Right>
                                <Icon active name="circle" type="FontAwesome" style={{ color: "green" }}/>
                            </Right>
                        </ListItem>
                        <ListItem icon>
                            <Left>
                                <Text>Working employee</Text>
                            </Left>
                            <Body>
                                <Text>Lê Khải</Text>
                            </Body>
                            <Right>
                                <Button style={{ backgroundColor: "#007AFF", width: 30, height: 30 }}>
                                    <Icon active name="call" style={{ width: 30, height: 30, marginLeft: 7 }} />
                                </Button>
                            </Right>
                        </ListItem>
                    </Content>
                </CardItem>
                <CardItem footer>
                    <Text>{this.props.name}</Text>
                </CardItem>
            </Card>
        );
    }
}

export default ItemListView;
