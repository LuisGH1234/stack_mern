import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Task from './Task';
import App from './App';

const AppRoutes = () => {
    return(
        <App>
            <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/task" component={Task}/>
                <Route path="/about" component={() => <h5>About MERN Stack</h5>}/>
                <Route component={() => <h5>No page found</h5>} />
            </Switch>
        </App>
    );  
};

export default AppRoutes;