import React from 'react';
import Flux from './alt';
import Component from './views/component';
import { RouteHandler } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div>
				<RouteHandler />
			</div>
		);
	}
});
