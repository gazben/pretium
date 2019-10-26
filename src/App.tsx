import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { KeplerContainer } from './components';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <KeplerContainer />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
