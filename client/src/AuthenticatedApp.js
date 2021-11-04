import React from 'react'
import EditDog from './components/EditDog'
import AddADog from './components/AddADog'
import Navibar from './components/Navibar'
import DogsContainer from './components/DogsContainer'
import { useHistory, Switch, Route } from 'react-router-dom'

function AuthenticatedApp({ setCurrentUser, currentUser }) {

    const history = useHistory()

    const handleLogOut = () => {
        fetch("/logout", {
            method: "DELETE"
        })
        .then(() => {
            setCurrentUser(null)
            history.push("/");
            
        });
    }


    return (
        <div>
            <Navibar handleLogOut={handleLogOut} currentUser={currentUser} />
            <Switch>
                <Route exact path="/dogs">
                    <DogsContainer currentUser={currentUser} />
                </Route>
                <Route exact path="/add-dog">
                    <AddADog />
                </Route>
                <Route exact path="/edit-dog">
                    <EditDog />
                </Route>
            </Switch>
        </div>
    )
}

export default AuthenticatedApp
