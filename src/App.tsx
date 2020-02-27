import React, { useCallback } from 'react';
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Spin } from 'antd';
import { useMappedState, IState } from './store';
import TestHooks from './test/TestHooks';
import { SpringTest } from './serverTest';

function App() {
    const { show } = useMappedState(
        useCallback(
            (state: IState) => ({
                show: state.show,
            }),
            [],
        ),
    );

    return (
        <Router>
            <Spin size="large" spinning={show}>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/test">Test</Link>
                        </li>
                        <li>
                            <Link to="/user">User</Link>
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
                        <Route path="/user">
                            <SpringTest></SpringTest>
                        </Route>
                    </Switch>
                </div>
            </Spin>
        </Router>
    );
}

export default App;
