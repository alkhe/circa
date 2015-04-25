import alt from '../alt';

class Actions {
	action(data) {
		this.dispatch(data);
	}
}

export default alt.createActions(Actions);
