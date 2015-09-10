import React from 'react';
import { Actions, Stores } from '../hub';
import Symbiosis from '../mixins/symbiosis-mixin';

export default React.createClass({
	mixins: [Symbiosis(Stores.Text)],
	update() {
		Actions.Text.update(React.findDOMNode(this.refs.text).value);
	},
	render() {
		return (
			<div>
				<input onChange={this.update} ref='text' />
				<div>{this.state.data}</div>
			</div>
		);
	}
});
