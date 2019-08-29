import React from 'react';
import { HomePage } from './HomePage';
import './App.scss';

class App extends React.Component {
  constructor (props) {
    super(props);
  }
  render() {
    return (
      <div>
        <HomePage />
      </div>
    )
  }

} 
export default App;
