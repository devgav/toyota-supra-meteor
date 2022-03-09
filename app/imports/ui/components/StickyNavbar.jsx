import React, { Component, createRef } from 'react';
import {
  Breadcrumb,
  Button,
  Container,
    Header,
  Grid,
} from 'semantic-ui-react';

export default class Stickynavbar extends Component {
    contextRef = createRef();

    render() {
      return (
        <div ref={this.contextRef}>
            <Container>
              <Breadcrumb className="text red">
                <Breadcrumb.Section>Vehicles</Breadcrumb.Section>
                <Breadcrumb.Divider/>
                <Breadcrumb.Section active>Cars + Vans</Breadcrumb.Section>
              </Breadcrumb>
            </Container>
            <br/>
            <Grid container centered columns="equal">
              <Grid.Row>
                <Grid.Column><Header as={'h1'}>2022 GR Supra</Header></Grid.Column>
                <Grid.Column width={7}><Header as={'h1'} className="text red">$51,360.00 Starting MSRP<span
                  className={'disc'}>1</span></Header></Grid.Column>
                <Grid.Column><Button color="red" size="big">Shop GR Supra</Button></Grid.Column>
              </Grid.Row>
            </Grid>
        </div>
      );
    }
}