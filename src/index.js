import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import Scoreboard from './containers/Scoreboard';
import PlayerReducer from './reducers/player';
import './index.css';

const store = createStore(
  PlayerReducer,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <Scoreboard />
  </Provider>,
  document.getElementById('root')
);



// console.log("state2", store.getState());

// store.subscribe(()=>{
//   console.log('subscribe3', store.getState());
// })

// store.dispatch({type: 'ADD_TRACK', playload: 'Smels like shit'});

// store.dispatch({type: 'ADD_TRACK', playload: 'ooooomg!'})