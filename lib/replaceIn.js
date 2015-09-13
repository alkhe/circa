'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _fsExtra = require('fs-extra');

var _fsExtra2 = _interopRequireDefault(_fsExtra);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

// replace all instances of `find` in `dir` with `replace`
var replaceIn = function replaceIn(dir, find, replace) {
	_fsExtra2['default'].readdirSync(dir).forEach(function (c) {
		var oldName = _path2['default'].join(dir, c);
		if (c !== 'node_modules') {
			var _name = oldName.replace(find, replace);
			_fsExtra2['default'].renameSync(oldName, _name);
			if (_fsExtra2['default'].statSync(_name).isDirectory()) {
				replaceIn(_name, find, replace);
			} else {
				_fsExtra2['default'].writeFileSync(_name, _fsExtra2['default'].readFileSync(_name, 'utf8').replace(find, replace));
			}
		}
	});
};

exports['default'] = replaceIn;
module.exports = exports['default'];