import React from 'react'
import AddADog from './components/AddADog'
import Navibar from './components/Navibar'
import Dogs from './components/Dogs'
import { useHistory, Switch, Route } from 'react-router-dom'

function AuthenticatedApp({ setCurrentUser, currentUser }) {

    const history = useHistory()

    const handleLogOut = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => {
            console.log("logged out");
            history.push("/");
        });
    }
    

    return (
        <div>
            <Navibar handleLogOut={handleLogOut} currentUser={currentUser} />
            <Switch>
                <Route exact path="/dogs">
                    <Dogs />
                </Route>
                <Route exact path="/add-dog">
                    <AddADog />
                </Route>
            </Switch>
        </div>
    )
}

export default AuthenticatedApp
