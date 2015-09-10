import fs from 'fs-extra';

// replace all instances of `find` in `dir` with `replace`
let replaceIn = (dir, find, replace) => {
	fs.readdirSync(dir).forEach(c => {
		let oldName = path.join(dir, c);
		if (c !== 'node_modules') {
			let name = oldName.replace(find, replace);
			fs.renameSync(oldName, name);
			if (fs.statSync(name).isDirectory()) {
				replaceIn(name, find, replace);
			}
			else {
				fs.writeFileSync(name, fs.readFileSync(name, 'utf8').replace(find, replace));
			}
		}
	});
};

export default replaceIn;
