import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialstate, reducer } from './state/reducer';
import { StateProvier } from './state/StateProvier';


ReactDOM.render(
  <StateProvier reducer={reducer} initialstate={initialstate}>
      <App />
  </StateProvier>,
  document.getElementById('root')
);

