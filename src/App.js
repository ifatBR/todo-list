import React from 'react';
import { HomePage } from './pages/HomePage';
import {TodoDetail} from './pages/TodoDetail';
import {TodoEdit} from './pages/TodoEdit'
import { AppHeader } from './cmps/AppHeader';
import './scss/main.scss';
import { HashRouter as Router, Route } from 'react-router-dom';

function App() {
    return (
        <Router>
            <div className="App">
                <AppHeader />
                <Route component={TodoEdit} path="/edit/:id?"></Route>
                <Route component={TodoDetail} path="/detail/:id"></Route>
                <Route component={HomePage} path="/" exact></Route>
            </div>
        </Router>
    );
}

export default App;
