System.config({
	baseURL: './js/'
});

Promise.all(
	['react', 'alt', 'app/'].map(x => System.import(x))
).then(([React, Flux, App]) => {
	React.render(<App />, document.getElementById('__name__'));
});
