import alt from '../alt';

class TextActions {
	update(data) {
		this.dispatch(data);
	}
}

export default alt.createActions(TextActions);
