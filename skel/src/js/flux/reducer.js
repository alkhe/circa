import Leaf from 'reducer/leaf';
import { UPDATE } from './types';

export default Leaf('', {
	[UPDATE.TEXT]: (text, action) => action.text
});
