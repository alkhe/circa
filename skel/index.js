import express from 'express';
import compression from 'compression';
import webpack from 'webpack';
import wdev from 'webpack-dev-middleware';
import whot from 'webpack-hot-middleware';
import wconf from './webpack.config.babel';

let app = express();
let wcompiler = webpack(wconf);

app.use(wdev(wcompiler, {
		noInfo: true,
		publicPath: wconf.output.publicPath
	}))
	.use(whot(wcompiler))
	.use(compression())
	.use(express.static('./public'));

const port = process.env.PORT || 80;
app.listen(port, 'localhost', err => {
	if (err) {
		console.log(err);
		return;
	}
	console.log('listening on http://localhost:3000');
});
