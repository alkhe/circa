import express from 'express';
import webpack from 'webpack';

let production = process.env.NODE_ENV === 'production';

let app = express();
let router = express.Router();

if (production) {
	console.log('[pro]');
	app.use(require('compression')());
}
else {
	console.log('[dev]');
	let config = require('./dev.babel'),
		compiler = webpack(config),
		dev = require('webpack-dev-middleware'),
		hot = require('webpack-hot-middleware');

	app.use(dev(compiler, {
		noInfo: true,
		publicPath: config.output.publicPath
	})).use(hot(compiler));
}

import jade from 'jade';
import React from 'react';
import ReDOM from 'react-dom/server';
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import Flux from 'fluxette';
import { Context } from 'fluxette-react';
import reducer from './src/js/flux/reducer';
import Routes from './src/js/routes';

let template = jade.compileFile('./src/html/index.jade');
let iso = root => template({ ssr: ReDOM.renderToString(root) });

router.get('/', (req, res) => {
	let flux = Flux(reducer);
	let location = createLocation(req.url);
	match({ routes: Routes(), location }, (err, redir, initial) => {
		res.send(iso(
			<Context flux={ flux }>
				{ () => <RoutingContext { ...initial } /> }
			</Context>
		));
	})
});

app
	.use(router)
	.use(express.static('./public'));

const port = process.env.PORT || 80;

app.listen(port, 'localhost', err => {
	if (err) {
		return console.err(err);
	}
	console.log(`listening on http://localhost:${ port }`);
});
