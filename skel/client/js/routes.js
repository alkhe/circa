import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import App from './app';
import Component from './views/component';

export default (
	<Route handler={App} path='/'>
		<DefaultRoute name='component' handler={Component} />
	</Route>
);
