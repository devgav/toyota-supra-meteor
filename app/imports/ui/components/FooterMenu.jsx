import React, { Component } from 'react';
import {
  Button,
  Grid,
  Icon,
  Image,
  List,
} from 'semantic-ui-react';

export default class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: 'black' }}>
        <Grid container columns="equal" style={{ backgroundColor: 'black' }}>
          <Grid.Row>
            <Grid.Column>
              <Image size="small" src="https://www.toyotahawaii.com/on/demandware.static/-/Sites-ToyotaHawaii-Library/default/dw6fdba732/images/footer/2021_TH_Horizontal_2C_CMYK_White.svg"/>
              <hr/>
              <List>
                <List.Item className={'text white'}>
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    We're here for you.
                  {/* eslint-disable-next-line react/no-unescaped-entities */}
                                    You've come to expect quality from our products; communication with us is no different.
                                    Please contact us or send us an email with your questions, comments or requests
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <List horizontal style={{ marginTop: '8px' }}>
                <List.Item>
                  <Icon name="facebook f" circular inverted/>
                </List.Item>
                <List.Item>
                  <Icon name="instagram" circular inverted/>
                </List.Item>
                <List.Item>
                  <Icon name="youtube" circular inverted/>
                </List.Item>
              </List>
              <hr/>
              <List className={'text white'}>
                <List.Item><Button basic inverted>Recall Information</Button></List.Item>
                <br/>
                <List.Item>Customer Care</List.Item>
                <List.Item>PH: 1-888-272-5515</List.Item>
                <br/>
                <List.Item>© 2022 SERVCO PACIFIC INC.</List.Item>
                <List.Item>All Rights Reserved.</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <br/>
              <br/>
              <hr/>
              <List className={'text white'}>
                <List.Item>
                                    Find a Dealer
                </List.Item>
                <List.Item>
                                    Offers
                </List.Item>
                <List.Item>
                                    New Vehicle Warranty
                </List.Item>
                <List.Item>
                                    Toyota Hawaii Care
                </List.Item>
                <List.Item>
                                    Email Sign-Up
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <br/>
              <br/>
              <hr/>
              <List className={'text white'}>
                <List.Item>
                                    Accessibility
                </List.Item>
                <List.Item>
                                    Privacy Policy
                </List.Item>
                <List.Item>
                                    Terms of Use
                </List.Item>
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}