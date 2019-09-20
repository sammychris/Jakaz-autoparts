import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.scss';
import { HomePage } from './HomePage';
import { ListProductPage } from './ListProductPage';
import { ProductPage } from './ProductPage';
import { Notfound } from './Notfound';
import { AdminPage } from './AdminPage';
import { MapDirection } from './MapDirection';

import { Header, Navigation, Footer } from './components';

class App extends React.Component {
  constructor (props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header />
          <Navigation />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/parts" component={ListProductPage} />
            <Route exact path="/parts/:pname" component={ListProductPage} />
            <Route path="/parts/:pname/:partid" component={ProductPage} />
            <Route path="/productmanager" component={AdminPage} />
            <Route path="/Map&direction" component={MapDirection} />
            <Route component={Notfound} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }

}

export default App;
