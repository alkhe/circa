let log = ::console.log;

let [,,arg] = process.argv;
if (arg === '-v' || arg === '--version') {
	console.log(require('./package.json').version);
	process.exit(0);
}

import { copySync as copy, remove } from 'fs-extra';
import path from 'path';
import { execSync as exec } from 'child_process';
import prompt from 'prompt';
import 'colors';
import replaceIn from './replaceIn';

const skel = path.join(__dirname, 'skel');

prompt.message = '';
prompt.delimiter = '';
prompt.start();

prompt.get({ name: 'name', description: 'Application Name'.blue, required: true }, (err, res) => {
	let { name } = res;
	prompt.get({ name: 'dir', description: 'Directory'.blue, default: name, required: true }, (err, res) => {
		let { dir } = res;
		try {
			log('Copying...'.green);
			copy(skel, dir);
			remove(path.join(dir, 'node_modules'));
			log('Populating...'.green);
			replaceIn(dir, /__name__/g, name);
			log('Installing...'.green);
			exec(`cd ${ dir } && npm install`, { stdio: 'ignore' });
			log('Done.'.magenta);
		} catch (err) {
			log('Error: '.red + err);
		}
	});
});
