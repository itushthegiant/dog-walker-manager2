import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, useHistory } from 'react-router-dom'
import AuthenticatedApp from './AuthenticatedApp'
import UnauthenticatedApp from './UnauthenticatedApp'


function App() {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then((data) => {
            setCurrentUser(data)
          })
        }
      })
  }, []);



  return (
      <Router>
        {currentUser ?
          (<AuthenticatedApp
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          />)
          :
          (<UnauthenticatedApp
            setCurrentUser={setCurrentUser}
          />)
        }
      </Router>

  );
}

export default App;
