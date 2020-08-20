import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Graphs from '../pages/Graphs/index'
import Main from '../pages/Main/index'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/graphs" exact component={Graphs}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;