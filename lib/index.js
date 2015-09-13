'use strict';

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsExtra = require('fs-extra');

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _prompt = require('prompt');

var _prompt2 = _interopRequireDefault(_prompt);

require('colors');

var _replaceIn = require('./replaceIn');

var _replaceIn2 = _interopRequireDefault(_replaceIn);

var log = console.log.bind(console);

var _process$argv = _slicedToArray(process.argv, 3);

var arg = _process$argv[2];

if (arg === '-v' || arg === '--version') {
	console.log(require('./package.json').version);
	process.exit(0);
}

var skel = _path2['default'].resolve(__dirname, '../skel');

_prompt2['default'].message = '';
_prompt2['default'].delimiter = '';
_prompt2['default'].start();

_prompt2['default'].get({ name: 'name', description: 'Application Name'.blue, required: true }, function (err, res) {
	var name = res.name;

	_prompt2['default'].get({ name: 'dir', description: 'Directory'.blue, 'default': name, required: true }, function (err, res) {
		var dir = _path2['default'].resolve(res.dir);
		try {
			log('Copying...'.green);
			(0, _fsExtra.copySync)(skel, dir);
			(0, _fsExtra.remove)(_path2['default'].join(dir, 'node_modules'));
			log('Populating...'.green);
			(0, _replaceIn2['default'])(dir, /__name__/g, name);
			log('Done.'.magenta);
		} catch (err) {
			log('Error: '.red + err);
		}
	});
});