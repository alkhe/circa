System.config({	baseURL: '../js/' });

Promise.all(
	['react', 'app/app'].map(x => System.import(x))
).then(([React, App]) => {
	React.render(<App />, document.getElementById('__name__'));
});
