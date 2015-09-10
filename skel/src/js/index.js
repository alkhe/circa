import React from 'react';
import { history } from 'react-router/lib/BrowserHistory';
import Root from './root';
import flux from './flux';

React.render(<Root flux={ flux } history={ history } />, document.getElementById('__name__'));
