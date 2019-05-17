import React from 'react';
import { Switch, Route } from 'react-router-dom';

//routes
import App from './App';
import Pricing from './pricing';

export default (
	<Switch>
		<Route exact path="/" component={App} />
		<Route path="/pricing" component={Pricing} />
		<Route
			path="*"
			render={() =>
				<div>
					<h1>404</h1>
				</div>}
		/>
	</Switch>
);
