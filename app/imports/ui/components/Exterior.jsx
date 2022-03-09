import React, { Component } from 'react';
import {
  Header,
  Container,
} from 'semantic-ui-react';

export default class Exterior extends Component {
  render() {
    return (
      <Container className={'exterior background'}>
        <Header as={'h1'} className={'text white'}>Exterior</Header>
      </Container>
    );
  }
}
