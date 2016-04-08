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
                          <MenuItem eventKey={3.1} onSelect={ this.onMenuItemClicked.bind(this) }>Users</MenuItem>
                          <MenuItem eventKey={3.2} onSelect={ this.onMenuItemClicked.bind(this) }>AS Number</MenuItem>
                          <MenuItem eventKey={3.3}>Countries</MenuItem>
                          <MenuItem eventKey={3.4}>Origin</MenuItem>
                          <MenuItem eventKey={3.5}>Cities</MenuItem>
                          <MenuItem eventKey={3.6}>Countries and Origin</MenuItem>
                          <MenuItem eventKey={3.7}>Assets</MenuItem>
                          <MenuItem divider />
                          <MenuItem eventKey={3.3}>All</MenuItem>
                      </NavDropdown>
                  </Nav>
              </Navbar.Collapse>
          </Navbar>
      );
  }
}

export default NavbarComponent;