import React, { Component } from 'react';
import {
  Container,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

export default class SupraSpec extends Component {
  render() {
    return (
      <Container className='modified-container modified-grid-container modified-relaxed-grid-container modified-very-relaxed-grid-container'>
        <Header as={'h1'} size={'huge'}>Models</Header>
        <Grid columns={'equal'}>
          <Grid.Row columns={2}>
            <Grid.Column width={3}>
              <Segment.Group>
                <Segment>
                  <Image size="large" alt="red-supra"
                    src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dwa3d2edf5/images/model/GRSupra/models/20_GRSupra_3.0.png"/>
                </Segment>
                <Segment>
                  <Header as={'h3'} className="sub header">3.0</Header>
                </Segment>
                <Segment>
                  <Header size='large' color='red'>$51,360 MSRP<span className="disc">1</span></Header>
                </Segment>
                <Segment>
                  <List bulleted>
                    <List.Item>3.0-Liter Inline 6-Cylinder Engine</List.Item>
                    <List.Item>19-In. Forged-Aluminum Twin-Spoke Wheels</List.Item>
                    <List.Item>8.8-In. Touch-Screen Display</List.Item>
                    <List.Item>Smart Key System11 with Smart Entry and Start</List.Item>
                    <List.Item>Leather-Wrapped Steering Wheel</List.Item>
                  </List>
                </Segment>
                <Segment>
                  <List>
                    <List.Item className={'text red'}>Compare</List.Item>
                    <List.Item className={'text red'}>Shop</List.Item>
                  </List>
                </Segment>
              </Segment.Group>
            </Grid.Column>
            <Grid.Column width={3}>
              <Segment.Group>
                <Segment>
                  <Image size="large" alt="red-supra"
                    src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dw9b012987/images/model/GRSupra/models/20_GRSupra_3.0Premium.png"/>
                </Segment>
                <Segment>
                  <Header as={'h3'} className="sub header">3.0 Premium</Header>
                </Segment>
                <Segment>
                  <Header size='large' color='red'>$54,510 MSRP<span className="disc">1</span></Header>
                </Segment>
                <Segment>
                  <List bulleted>
                    <List.Item>3.0-Liter Inline 6-Cylinder Engine</List.Item>
                    <List.Item>14-Way Power-Adjustable Leather-Trimmed Sport Seats</List.Item>
                    <List.Item>Wireless Apple CarPlay®4</List.Item>
                    <List.Item>Full-Color Head-Up Display (HUD)</List.Item>
                    <List.Item>Qi-Compatible Wireless Charging</List.Item>
                  </List>
                </Segment>
                <Segment>
                  <List>
                    <List.Item className={'text red'}>Compare</List.Item>
                    <List.Item className={'text red'}>Shop</List.Item>
                  </List>
                </Segment>
              </Segment.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
