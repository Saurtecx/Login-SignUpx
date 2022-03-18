import React from 'react'
import Home from './components/Home'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <div className="topnav">
                <a href='/'>
                    <Link to="/">Home</Link>
                </a>
                <a href='/login'>
                    <Link to="/login">Login</Link>
                </a>
                <a href='/signup'>
                    <Link to="/signup">Signup</Link>
                </a>
            </div>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    );
}


export default App
