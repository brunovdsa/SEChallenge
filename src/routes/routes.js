import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Graphs from '../pages/Graphs/index'
import Main from '../pages/Main/index'
import Details from '../pages/Details'

function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Main}></Route>
                <Route path="/graphs" exact component={Graphs}></Route>
                <Route path="/details" exact component={Details}></Route>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;