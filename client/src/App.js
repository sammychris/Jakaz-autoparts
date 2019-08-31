import React from 'react';
import './App.scss';
import { HomePage } from './HomePage';

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
