import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Landing from '../components/Landing'
import Register from '../components/Register'
import Login from '../components/Login'
import Dash from '../components/Dash'



export default (
    <Switch>

        <Route path='/' exact component={Landing} />
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login} />
        <Route path='/dash' component={Dash} />


    </Switch>
)