import React from 'react';
import Router, { Route } from 'react-router';
import { Context } from 'fluxette-react';
import App from './app';
import Text from './views/text';

export default class Root extends React.Component {
	render() {
		let { flux, history } = this.props;
		return (
			<Context flux={ flux } history={ history }>
				{ () =>
					<Router history={ history }>
						<Route component={ App } path='/' indexRoute={{
							component: Text
						}} />
					</Router>
				}
			</Context>
		)
	}
}
