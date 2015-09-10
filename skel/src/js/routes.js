import React from 'react';
import Router, { Route } from 'react-router';
import { history } from 'react-router/lib/BrowserHistory';
import App from './app';
import Text from './views/text';

export default (
	<Router history={ history }>
		<Route component={ App } path='/' indexRoute={{
			component: Text
		}} />
	</Router>
);
