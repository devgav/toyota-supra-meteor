import React, { Component } from 'react';
import {
  Header,
  Container,
} from 'semantic-ui-react';

export default class Interior extends Component {
  render() {
    return (
      <Container className={'interior background'}>
        <Header as={'h1'} className={'text white'}>Interior</Header>
      </Container>
    );
  }
}
