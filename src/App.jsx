import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Phase1 from './pages/en/Phase1';
import Phase2 from './pages/en/Phase2';
import Phase3 from './pages/en/Phase3';
import Phase4 from './pages/en/Phase4';
import Mindset from './pages/en/Mindset';
import Phase1pt from './pages/pt/Phase1pt';
import Phase2pt from './pages/pt/Phase2pt';
import Phase3pt from './pages/pt/Phase3pt';
import Phase4pt from './pages/pt/Phase4pt';
import MindsetPt from './pages/pt/MindsetPt';
import NotFound from './pages/NotFound';
import './index.css';
import './body.css';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={ Phase1 } />
					<Route path="/phase2" component={ Phase2 } />
					<Route path="/phase3" component={ Phase3 } />
					<Route path="/phase4" component={ Phase4 } />
					<Route path="/mindset" component={ Mindset } />
					<Route path="/pt/phase1" component={ Phase1pt } />
					<Route path="/pt/phase2" component={ Phase2pt } />
					<Route path="/pt/phase3" component={ Phase3pt } />
					<Route path="/pt/phase4" component={ Phase4pt } />
					<Route path="/pt/mindset" component={ MindsetPt } />
					<Route path="*" component={ NotFound } />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
