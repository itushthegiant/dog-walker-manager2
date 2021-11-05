import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

function Navibar({ handleLogOut, currentUser }) {
    return (
        <div>
            <Container>
                <Navbar className="mt-2 nav-bar" bg="dark" variant="dark">
                    <Navbar.Brand href={currentUser ? "/dogs" : "/"} className="nav-brand">
                        <FontAwesomeIcon icon={faDog} className="dog-icon" />Dog Walker Manager
                    </Navbar.Brand>
                    <Nav className="me-auto nav-buttons">
                        {currentUser ?
                            <>
                                <Button href="/add-dog" className="add-button" size="sm" variant="info" >Add a Dog</Button>
                                <Button href="/dogs" className="dogs-button" size="sm" variant="info" >Dogs</Button>
                                <Button className="logout-button" variant="outline-danger" onClick={handleLogOut} size="sm">Logout</Button>
                                <span className="user-greeting" style={{ color: 'white' }} >Hello {currentUser.username}!</span>
                            </>
                            :
                            <>
                                <Button className="login-button" variant="info" href="/">Login</Button>
                                <span className="guest-greeting" style={{ color: 'white' }}>Hello Guest!</span>
                            </>
                        }
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navibar
