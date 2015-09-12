import RDOM from 'react-dom';
import React from 'react';
import Router from 'react-router';

import { createHistory } from 'history';
import Routes from './routes';

import Flux from 'fluxette';
import reducer from './flux/reducer';
import { Context } from 'fluxette-react';

RDOM.render(
	<Context flux={ Flux(reducer) }>
		{ () => <Router history={ createHistory() } routes={ Routes() } /> }
	</Context>,
	document.getElementById('__name__')
);
