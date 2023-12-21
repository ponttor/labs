import React, { useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Lesson0 from './components/Lesson0';
import Lesson1 from './components/Lesson1';

function App() {
  useEffect(() => {
    const path = window.location.pathname;
    if (path.startsWith('/labs/') && !window.location.hash) {
      window.location.replace(`${window.location.href}#`);
    }
  }, []);
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Lesson0} />
        <Route exact path="/lesson-1" component={Lesson1} />
      </Switch>
    </Router>
  );
}

export default App;

