import logo from './logo.svg';
import './App.scss';
import { useDispatch, useSelector } from 'react-redux';
import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
import MyComponent from './components/MyComponents';
import React from 'react';

class App extends React.Component {

  render() {
    return (
      <div style={{ color: 'blueviolet' }} className='app-container'>
        {/* Hello World with Xuan Cuong &amp; React */}
        <MyComponent />
      </div>
    );
  }
}

export default App;
