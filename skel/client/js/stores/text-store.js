import alt from '../alt';
import TextActions from '../actions/text-actions';

class TextStore {
	constructor() {
		this.bindActions(TextActions);

		this.data = '';
	}
	update(data) {
		this.data = data;
	}
}

export default alt.createStore(TextStore, 'TextStore');
