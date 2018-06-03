import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/home/Home';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route } from 'react-router-dom';

ReactDOM.render(
	<BrowserRouter>
		<div>
			<Route path='/' component={Home} />
		</div>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
