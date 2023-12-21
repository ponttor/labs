// import React from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Lesson0 from './components/Lesson0';

// function App() {
//   return (
//     <>
//       <Router>
//         <Switch>
//           <Route exact path="/" component={Lesson0} />
//         </Switch>
//       </Router>
//     </>
//   );
// }

// export default App;
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Lesson0 from './components/Lesson0';
import Lesson1 from './components/Lesson1';

function App() {
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

