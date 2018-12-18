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

class ItemListAcc extends Component {
    constructor(props){
        super(props);

        this.onPress = this.onPress.bind(this);
    }

    onPress(){
        //this.props.navigation('ViewDetail');
    }
    render(){
        return (
            <Card style={this.props.style}>
				<CardItem style={this.props.style}>
					<Content>
						{/* <Left>
                            <Thumbnail square source={{uri: './avatar.png'}} 
                                    style={{width: 30, height: 30}}/>
                        </Left> */}
                        <Body>
                            <Text>{this.props.Id}</Text>
                            <Text>{this.props.Name}</Text>
                            <Text>{this.props.Phone}</Text>
                            <Button light onPress={ () => this.onPress()} >
                                <Icon active name="arrow-forward" />
                            </Button>                        
                        </Body>
                        {/* <Right>
                            <Button info onPress={ () => this.onPress()} >
                                <Icon active name="call" />
                            </Button>
                        </Right> */}
					</Content>
				</CardItem>
			</Card>
        );
    }
}

export default ItemListAcc;