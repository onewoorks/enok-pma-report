import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import Home from './pages/home'
import FindingEntry from './pages/finding_entry'
import Report from './pages/report';

function App() {
  return (
    <div className="container">
    <Router>
      <div>
        <nav>
        <ul>
          <li>
          <Link to='/report'>Report</Link></li>
          <li>
            <Link to='/entry'>Finding Entry</Link>
          </li>
        </ul>
        </nav>
      </div>
      <Switch>
        <Route path="/entry">
          <FindingEntry />
        </Route>
        <Route path="/report">
          <Report />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
    </div>
    
  );
}

export default App;