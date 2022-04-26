import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Phase1 from './pages/Phase1';
import Phase2 from './pages/Phase2';
import Phase3 from './pages/Phase3';
import Phase4 from './pages/Phase4';
import Mindset from './pages/Mindset';
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
          <Route path="*" component={ NotFound } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
