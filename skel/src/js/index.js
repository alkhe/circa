import React from 'react';
import RDOM from 'react-dom';

import { createHistory } from 'history';
import Routes from './routes';

import Flux from 'fluxette';
import reducer from './flux/reducer';
import { Context } from 'fluxette-react';

RDOM.render(
	<Context flux={ Flux(reducer) }>
		{ () => <Routes history={ createHistory() } /> }
	</Context>,
	document.getElementById('__name__')
);
