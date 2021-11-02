import React from 'react'
import { Container, Navbar, Nav, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

function Navibar({ handleLogOut, currentUser }) {
    return (
        <div>
            <Container>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand href="/" className="nav-brand">
                        <FontAwesomeIcon icon={faDog} className="dog-icon" />Dog Walker Manager
                    </Navbar.Brand>
                    <Nav className="me-auto nav-buttons">
                        {currentUser ?
                            <>
                                <Nav.Link href="/add-dog">Add a Dog</Nav.Link>
                                <Nav.Link href="/dogs">Dogs</Nav.Link>
                                <Button className="logout-button" variant="outline-danger" onClick={handleLogOut} size="sm">Logout</Button>
                                <span style={{ color: 'white' }} >Hello {currentUser.username}!</span>
                            </>
                            :
                            <>
                                <Button variant="info" href="/">Login</Button>
                                <span style={{ color: 'white' }}>Hello Guest!</span>
                            </>
                        }
                    </Nav>
                </Navbar>
            </Container>
        </div>
    )
}

export default Navibar
