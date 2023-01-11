import React from 'react';
import './App.css';
import { CounterType } from './counter/CounterType';
import Api from './callAPI/Api';

function App() {
  return (
    <div className="App">
      {/* <CounterType /> */}
      <Api />
    </div>
  );
}

export default App;
