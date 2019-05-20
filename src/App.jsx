import React from 'react';
import './App.css';
import { Button, Nav, Navbar, FormControl, Form } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';

function App() {
	return (
		<Router>
			<div className="App" />;
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="./news" component={News} />
		</Router>
	);
}

export default App;
