System.config({	baseURL: './js/' });

Promise.all(
	['react', 'react-router', 'app/routes'].map(x => System.import(x))
).then(([React, Router, Routes]) => {
	Router.run(Routes, (Handler) => {
		React.render(<Handler />, document.getElementById('__name__'));
	});
});

System.import('app/socket');
