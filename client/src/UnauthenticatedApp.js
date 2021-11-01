import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Route, Switch, Button } from 'react-router-dom'
import Navibar from './components/Navibar'


function UnauthenticatedApp({ setCurrentUser }) {
    return (
        <div>
            <Navibar />
            <Switch>
                <Route exact path="/">
                    <Login setCurrentUser={setCurrentUser} />
                </Route>
                <Route exact path="/sign-up" >
                    <SignUp setCurrentUser={setCurrentUser} />
                </Route>
            </Switch>
        </div>
    )
}

export default UnauthenticatedApp
