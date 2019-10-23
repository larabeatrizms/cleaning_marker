import React from 'react';

//importando componentes em React
import { BrowserRouter, Switch, Route } from 'react-router-dom'; 

import UserLogin from './pages/UserLogin';
import Home from './pages/Home';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={UserLogin}/>
                <Route path="/Home" component={Home} />
            </Switch>
        </BrowserRouter>
    );
}


