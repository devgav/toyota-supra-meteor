import React, { Component } from 'react';
import {
  Container,
  Dropdown,
  Image,
  Menu,
} from 'semantic-ui-react';

export default class Navbar extends Component {
    navbar = {
      boxShadow: 'none',
      border: 'none',
    };

    render() {
      return (
        <Menu borderless style={this.navbar}>
          <Container>
            <Image size="medium" item
              src="https://www.toyotahawaii.com/on/demandware.static/Sites-ToyotaHawaii-Site/-/default/dw65ae3f47/images/logo.svg"/>
            <Dropdown item text="Vehicles">
              <Dropdown.Menu>
                <Dropdown.Item>
                  <Dropdown text="Cars + Vans">
                    <Dropdown.Menu>
                      <Dropdown.Item>2022 Camry</Dropdown.Item>
                      <Dropdown.Item>2022 Corolla</Dropdown.Item>
                      <Dropdown.Item>2022 Corolla Hatchback</Dropdown.Item>
                      <Dropdown.Item>2022 Avalon</Dropdown.Item>
                      <Dropdown.Item>2022 GR 86</Dropdown.Item>
                      <Dropdown.Item>2022 GR Supra</Dropdown.Item>
                      <Dropdown.Item>2022 Sienna</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Crossovers + SUVS">
                    <Dropdown.Menu>
                      <Dropdown.Item>2022 CHR</Dropdown.Item>
                      <Dropdown.Item>2022 Rav4</Dropdown.Item>
                      <Dropdown.Item>2022 4Runner</Dropdown.Item>
                      <Dropdown.Item>2022 Highlander</Dropdown.Item>
                      <Dropdown.Item>2022 Sequoia</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Trucks">
                    <Dropdown.Menu>
                      <Dropdown.Item>2022 Tacoma</Dropdown.Item>
                      <Dropdown.Item>2022 Tundra</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Electrified">
                    <Dropdown.Menu>
                      <Dropdown.Item className="item">2022 Prius</Dropdown.Item>
                      <Dropdown.Item className="item">2022 Prius Prime</Dropdown.Item>
                      <Dropdown.Item className="item">2022 Camry Hybrid</Dropdown.Item>
                      <Dropdown.Item className="item">2022 Corolla Hybrid</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Dropdown text="Upcoming Vehicles">
                    <Dropdown.Menu>
                      <Dropdown.Item>2022 Tundra Hybrid</Dropdown.Item>
                      <Dropdown.Item>2022 BZ4X</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
                        Find a Dealer
            </Menu.Item>
            <Dropdown item text="Shopping Tools">
              <Dropdown.Menu>
                <Dropdown.Item>Toyota Hawaii Care</Dropdown.Item>
                <Dropdown.Item>Finance</Dropdown.Item>
                <Dropdown.Item>Extended Hybrid Warranty</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>
                        Offers
            </Menu.Item>
            <Dropdown item text="Community">
              <Dropdown.Menu>
                <Dropdown.Item>Holoholo with Mark Noguchi</Dropdown.Item>
                <Dropdown.Item>UH Athletics</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Container>
        </Menu>
      );
    }
}