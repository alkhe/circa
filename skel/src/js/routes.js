import React from 'react';
import Router, { Route } from 'react-router';
import App from './app';
import Text from './views/text';

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ this.props.history }>
				<Route component={ App } path='/' indexRoute={{
					component: Text
				}} />
			</Router>
		);
	}
}
