import React from 'react'
import { Container, Navbar, Nav, Button, Alert } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

function Navibar({ handleLogOut, currentUser }) {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/">
                        <FontAwesomeIcon icon={faDog} className="dog-icon" />Dog Walker Manager
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/add-dog">Add a Dog</Nav.Link>
                        <Nav.Link href="/dogs">Dogs</Nav.Link>
                        <Button variant="info" onClick={handleLogOut}>Logout</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default Navibar
