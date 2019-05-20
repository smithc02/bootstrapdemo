import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class CustomNav extends Component {
	render() {
		return (
			<div>
				<Navbar default collapseOnSelect>
					<Navbar.Header>
						<Navbar.Brand>
							<Link to="/">CodeLife</Link>
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse>
							<Nav pullRight>
								<NavItem
									eventKey={1}
									componentClass={Link}
									href="/"
									to="/">
									Home
								</NavItem>
							</Nav>
						</Navbar.Collapse>
					</Navbar.Header>
				</Navbar>
			</div>
		);
	}
}
