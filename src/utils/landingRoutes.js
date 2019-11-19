import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Login from '../components/Login'
import Dash from '../components/Dash'



export default (
    <Switch>

      

        <Route path='/login' component={Login} />
        <Route path='/dash' component={Dash} />


    </Switch>
    )

