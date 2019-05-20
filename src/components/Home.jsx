import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css';

export class Home extends Component {
	render() {
		return (
			<div>
				<Jumbotron>
					<h2>Welcome to CodeLife.io</h2>
					<p>
						This ishow to build a website with React-router &
						React-Bootstrap
					</p>
				</Jumbotron>
				<Link to="/about">
					<Button bsStyle="primary">About</Button>
				</Link>
			</div>
		);
	}
}

export default Home;
