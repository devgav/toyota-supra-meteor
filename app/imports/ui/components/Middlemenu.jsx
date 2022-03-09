import React, { Component } from 'react';
import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  List,
} from 'semantic-ui-react';

export default class Middlemenu extends Component {
  render() {
    return (
      <Container className={'ui container'}>
        <br/>
        <Image className="ui fluid image"
          src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dwc50a6fd8/images/model/GRSupra/hero/20_Supra_Hero_1498x331.jpg"
          alt="Toyota Supra"/>
        <br/>
        <Grid fluid columns="equal">
          <Grid.Row>
            <Grid.Column className="front-supra-size">
              <Container className="front-supra">
                <Header as='h2' className={'text white'}>Find Your Supra</Header>
                <Header as='h3' className='text white'>Pick your model, customize colors, options, and add accessories</Header>
                <Button size="big" className="ui white button">Shop 2022 GR Supra</Button>
              </Container>
            </Grid.Column>
            <Grid.Column>
              <Image className="ui image" size="huge"
                src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-Servco_master/default/dw426c9fe5/images/model/GRSupra/360/absolute-zero/20_GRSupra_3.0_AbsoluteZero_1.png"
                alt="Grey Supra"/>
              <div>
                <Header as='h4' textAlign='center'>CLICK & DRAG TO SEE 360° VIEW</Header>
                <Grid centered columns='equal'>
                  <List horizontal className="car-colors">
                    <List.Item className="square-white"/>
                    <List.Item className="square-grey"/>
                    <List.Item className="square-dark-grey"/>
                    <List.Item className="square-red"/>
                    <List.Item className="square-yellow"/>
                    <List.Item className="square-off-grey"/>
                    <List.Item className="square-black"/>
                  </List>
                </Grid>
                <Header as="h2" textAlign="center">ABSOLUTE ZERO</Header>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br/>
        <br/>
        <br/>
        <Grid className="super-supra">
          <Grid>
            <Grid.Row>
              <Grid.Column className="text white column based" verticalAlign="bottom"
                style={{ marginBottom: '-1%' }}>
                <Header as={'h1'} className='text white'>Designed To Move</Header>
                <Header as={'h3'} className='text white'>Equally impressive on the track or on the streets, the 2022 GR Supra is driven by a
                                    single-minded focus on the feeling you experience behind the wheel. With its
                                    signature,
                                    turbocharged 3.0-liter 6-cylinder engine producing 382 horsepower3 and an impressive
                                    368 lb.-ft.
                                    of torque, GR Supra is ready to unleash pure driving pleasure at every turn.</Header>
                <Button verticalAlign="middle" color="red" size="large">Search Inventory</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Grid>
        <br/>
        <br/>
        <br/>
        <div className="ui grid inside-supra">
          <Grid>
            <Grid.Row>
              <Grid.Column className="text white column based" verticalAlign="bottom"
                style={{ marginBottom: '-1%' }}>
                <Header as='h1' style={{ color: 'white' }}>
                                    Where sport meets comfort
                </Header>
                <Header as='h3' style={{ color: 'white' }}>
                                    Designed with the driver in mind, the 2021 GR Supra’s interior is the ideal blend of
                                    form, function and beauty incorporating traditional GT elements with ultra-modern
                                    functionality. And, with standard leather trim and deeply bolstered sport seats
                                    you’ll be comfortable and refreshed on every drive.
                </Header>
                <Button verticalAlign="middle" color="red" size="large">View Specs</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </div>
        <br/>
        <br/>
        <Grid container verticalAlign={'middle'} centered columns={'equal'}>
          <Grid.Row>
            <Image
              src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-ToyotaHawaii-Library/default/dwd4087563/v2/model/GRSupra/feature/22_Supra_Technology_700x418.jpg"
              alt="infotainment"/>
            <Grid.Column width={5}>
              <Header as='h1'>
                                Technology
              </Header>
              <Header as='h3'>
                                Stay connected with advanced technology including wireless Apple CarPlay®<span
                  className={'disc'}>4</span>
                                compatibility, a
                                full-color Head-Up Display (HUD) and Qi-compatible wireless smartphone charging<span
                  className={'disc'}>5</span>.
              </Header>
              <Button size="large" color="red">Shop</Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Grid container centered columns={'equal'}>
          <Grid.Row>
            <Grid.Column width={5}>
              <Header as='h1'>
                                Smart Safety
              </Header>
              <Header as='h3'>
                                2021 GR Supra comes equipped with a number of intelligent safety features including Lane
                                Departure Warning with Steering Assist<span className={'disc'}>5</span>, a Pre-Collision
                                System<span className={'disc'}>6</span> with Pedestrian
                                Detection<span className={'disc'}>7</span>, Automatic High Beams<span className={'disc'}>8</span> and Speed Limit
                                Information<span className={'disc'}>9</span>.
              </Header>
              <Button size="large" color="red">Search Inventory</Button>
            </Grid.Column>
            <Image
              src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-ToyotaHawaii-Library/default/dw85003694/v2/model/GRSupra/feature/22_Supra_SmartSafety_700x418.jpg"
              alt="infotainment"/>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
