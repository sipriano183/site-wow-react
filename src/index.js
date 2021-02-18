import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './views/home/home'

class App extends React.Component {
  render() {
    return (
      <Home />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))