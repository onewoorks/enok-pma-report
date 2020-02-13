import React from "react"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

import Home from "./pages/home"
import FindingEntry from "./pages/finding_entry"
import Report from "./pages/reports"

function App() {
    return (
        <div>
        <Router>
            <div>
                <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5">
                  <span className="navbar-brand" >KONE PMA</span>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/report" className="nav-link">Report</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/entry" className="nav-link">Finding Entry</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <div className="container">
                
                    <Switch>
                        <Route path="/entry">
                            <FindingEntry />
                        </Route>
                        <Route path="/report">
                            <Report />
                        </Route>
                        <Route path="/">
                            <Home />
                        </Route>
                    </Switch>
                
            </div>
            </Router>
        </div>
    )
}

export default App
