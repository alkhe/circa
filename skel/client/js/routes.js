import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import App from './app';
import Text from './views/text';

export default (
	<Route handler={App} path='/'>
		<DefaultRoute name='text' handler={Text} />
	</Route>
);
