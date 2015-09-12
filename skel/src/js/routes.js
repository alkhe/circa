import React from 'react';
import { IndexRoute, Route } from 'react-router';
import App from './app';
import Text from './views/text';

export default () => (
	<Route component={ App } path='/'>
		<IndexRoute component={ Text } />
	</Route>
)
