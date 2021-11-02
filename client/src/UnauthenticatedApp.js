import React from 'react'
import Login from './components/Login'
import SignUp from './components/SignUp'
import { Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Navibar from './components/Navibar'


function UnauthenticatedApp({ setCurrentUser }) {
    return (
        <div>
            <Container>
                <Navibar />
                <Switch>
                    <Route exact path="/">
                        <Login setCurrentUser={setCurrentUser} />
                    </Route>
                    <Route exact path="/sign-up" >
                        <SignUp setCurrentUser={setCurrentUser} />
                    </Route>
                </Switch>

            </Container>
        </div>
    )
}

export default UnauthenticatedApp
