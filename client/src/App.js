import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './views/Home';
import Editor from './views/editor/Editor';


const App = ()=>{
    return <Router>
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/editor" component={Editor} exact/>
        </Switch>
    </Router>
}

export default App;
