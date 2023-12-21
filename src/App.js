import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Lesson0 from './components/Lesson0';

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Lesson0} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
