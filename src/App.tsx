import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { KeplerContainer, Landing } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/visualize">
          <KeplerContainer />
        </Route>
        <Route path="/">
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
