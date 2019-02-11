import React from 'react'
import Main from '../components/layouts/Main';
import Login from '../components/layouts/Login'
import Register from '../components/layouts/Register'
import NotFound from '../components/layouts/NotFound'

import TodoView from '../components/AllTodos';

import { Route,Switch} from 'react-router-dom';

const withAppLayout = Component => props => <Main><Component {...props} /></Main>

export default (
    <Switch>
        <Route exact path="/" component={Main}/>
        <Route path="/todos" component={withAppLayout(TodoView)}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path='*' component={NotFound} />
    </Switch>
);