import { UPDATE } from './types';

export default {
	update: {
		text: text => ({ type: UPDATE.TEXT, text })
	}
}
