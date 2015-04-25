import alt from '../alt';
import Actions from '../actions/actions';

class Store {
	constructor() {
		this.bindListeners({
			onAction: Actions.action
		});

		this.data = '';
	}
	onAction(data) {
		this.data = data;
	}
}

export default alt.createStore(Store, 'Store');
