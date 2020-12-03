import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom"
import AddContact from './components/AddContact/AddContact';
import ContactsList from './components/ContactsList/ContactsList';
import Details from './components/Details/Details';
import EditContact from './components/EditContact/EditContact';
import Home from './components/Home/Home';
import {history} from './History';

const Routes = () => {
    return (
        <BrowserRouter history={history}>
            <Switch>

                <Route exact path="/" component={Home} />
                <Route exact path="/add" component={AddContact} />
                <Route exact path="/list" component={ContactsList} />
                <Route exact path="/edit" component={EditContact} />
                <Route exact path="/details" component={Details} />

            </Switch>
        </BrowserRouter>
    );
};

export default Routes;