/**
 * Created by admin on 02/04/2016.
 */
import React from 'react'
import Navbar from 'react-bootstrap/lib/Navbar'
import Nav from 'react-bootstrap/lib/Nav'
import NavDropdown from 'react-bootstrap/lib/NavDropdown'
import MenuItem from 'react-bootstrap/lib/MenuItem'
import Image from 'react-bootstrap/lib/Image'
import { browserHistory } from 'react-router'

class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    onMenuItemClicked(event, eventKey) {
        switch(eventKey) {
            case 3.1:
                browserHistory.push('/');
                break;
            case 3.2:
                browserHistory.push('/asnumberstats');
                break;
            case 3.3:
                browserHistory.push('/countriesstats');
                break;
            case 3.4:
                browserHistory.push('/originsstats');
                break;
            case 3.5:
                browserHistory.push('/citiesstats');
                break;
            case 3.6:
                browserHistory.push('/countriesandoriginsstats')
                break;
            case 3.7:
                browserHistory.push('/assetsstats');
                break;
            case 3.8:
                browserHistory.push('/allstats');
                break;
        }
    }

    render() {
      return(
          <Navbar inverse>
              <Navbar.Header>
                  <Navbar.Brand>
                      <a href="#"><Image src="static/images/logo.png" responsive /></a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
              </Navbar.Header>
              <Navbar.Collapse>
                  <Nav>
                      <NavDropdown eventKey={3} title="Stats" id="basic-nav-dropdown">
                          <MenuItem eventKey={3.1} onSelect={this.onMenuItemClicked.bind(this)}>Users</MenuItem>
                          <MenuItem eventKey={3.2} onSelect={this.onMenuItemClicked.bind(this)}>AS Number</MenuItem>
                          <MenuItem eventKey={3.3} onSelect={this.onMenuItemClicked.bind(this)}>Countries</MenuItem>
                          <MenuItem eventKey={3.4} onSelect={this.onMenuItemClicked.bind(this)}>Origin</MenuItem>
                          <MenuItem eventKey={3.5} onSelect={this.onMenuItemClicked.bind(this)}>Cities</MenuItem>
                          <MenuItem eventKey={3.6} onSelect={this.onMenuItemClicked.bind(this)}>Countries and Origin</MenuItem>
                          <MenuItem eventKey={3.7} onSelect={this.onMenuItemClicked.bind(this)}>Assets</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={3.8} onSelect={this.onMenuItemClicked.bind(this)}>All</MenuItem>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      );
  }
}

export default NavbarComponent;