import React from 'react';
import Action from '../actions/actions';
import Store from '../stores/store';
import Symbiosis from '../mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(Store)],
	action() {
		Action.action(this.refs.text.getDOMNode().value);
	},
	render() {
		return (
			<div>
				<input onChange={this.action} ref='text' />
				<div>{this.state.data}</div>
			</div>
		);
	}
});
