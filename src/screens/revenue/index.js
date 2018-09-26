import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Footer,
  FooterTab,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class Revenue extends Component {
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
						<Title>Revenue</Title>
					</Body>
					<Right />
				</Header>

				<Content padder>
					<Text>Content goes here</Text>
				</Content>

				<Footer>
					<FooterTab>
						<Button active full>
							<Text>Footer</Text>
						</Button>
					</FooterTab>
				</Footer>
			</Container>
		);
	}
}

export default Revenue;