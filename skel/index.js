import express from 'express';
import webpack from 'webpack';

let production = process.env.NODE_ENV === 'production';
let app = express();

if (production) {
	console.log('[pro]');
	app.use(require('compression')());

	// let React = require('react'),
	// 	RDOM = require('react-dom'),
	// 	{ RoutingContext, match } = require('react-router'),
	// 	createLocation = require('history/lib/createLocation'),
	// 	Flux = require('fluxette'),
	// 	reducer = require('./src/js/flux/reducer'),
	// 	Routes = require('./src/js/routes'),
	// 	{ Context } = require('fluxette-react');
	//
	// app.use('/', (req, res) => {
	// 	let flux = Flux(reducer);
	// 	let location = createLocation(req.url);
	// 	match({ routes: Routes, location }, (err, redir, initial) => {
	// 		res.send(
	// 			RDOM.renderToString(
	// 				<Context flux={ flux }>
	// 					<RoutingContext { ...initial } />
	// 				</Context>
	// 			)
	// 		);
	// 	})
	// });
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

app.use(express.static('./public'));

const port = process.env.PORT || 80;

app.listen(port, 'localhost', err => {
	if (err) {
		return console.err(err);
	}
	console.log(`listening on http://localhost:${ port }`);
});
