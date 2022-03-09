import React, { Component } from 'react';
import {
  Container,
  Icon,
  Menu,
} from 'semantic-ui-react';

export default class Utilitybar extends Component {
    utility = {
      boxShadow: 'none',
      border: 'none',
      backgroundColor: 'black',
    };

    render() {
      return (
        <Menu borderless style={this.utility}>
          <Container item>
            <Menu.Item fitted position="right">
              <Icon className="white background" name="facebook f" circular inverted/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon className="white background" name="instagram" circular inverted/>
            </Menu.Item>
            <Menu.Item fitted>
              <Icon className="white background" name="youtube" circular inverted/>
            </Menu.Item>
          </Container>
        </Menu>
      );
    }
}