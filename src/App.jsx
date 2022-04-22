import React from 'react';
import Phase1 from './components/Phase1';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import Phase4 from './components/Phase4';
import './index.css';
import './body.css';

function App() {

  return (
    <div className="App flex justify-center">
      <Phase1 />
      <Phase2 />
      <Phase3 />
      <Phase4 />
    </div>
  )
}

export default App
