import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class HumanResource extends Component {
	render() {
		return (
			<Container style={styles.container}>
				<Header>
					<Left>
						<Button
							transparent
							onPress={() => this.props.navigation.openDrawer()}
						>
							<Icon name="ios-menu" />
						</Button>
					</Left>
					<Body>
						<Title>Human Resource</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Text>Content goes here</Text>
				</Content>
			</Container>
		);
	}
}

export default HumanResource;