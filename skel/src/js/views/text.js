import React from 'react';
import { connect } from 'fluxette-react';
import { update } from '../flux/actions';

@connect(text => ({ text }))
export default class extends React.Component {
	update() {
		this.dispatch(update.text(React.findDOMNode(this.refs.text).value));
	}
	render() {
		return (
			<div>
				<input onChange={ ::this.update } ref='text' />
				<div>{ this.state.text }</div>
			</div>
		);
	}
}
