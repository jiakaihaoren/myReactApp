import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TestHooks from './test/TestHooks';

function App() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/test">Test</Link>
                    </li>
                    <li>
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                </ul>

                <hr />
                <Switch>
                    <Route exact path="/">
                        <div>/</div>
                    </Route>
                    <Route path="/test">
                        <TestHooks></TestHooks>
                    </Route>
                    <Route path="/dashboard">
                        <div>/dashboard</div>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
