import React, { useState } from 'react'
import { Card, Form, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'



function Login({ setCurrentUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/login', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => setCurrentUser(user));
                history.push('/dogs')
            } else {
                r.json().then((err) => err.error);
            }
        })
    }


    return (
        <div>
            <Container>
                <Card className="col-md-6 col-md-offset-3 login-card" style={{ width: '18rem' }}>
                    <Card.Body>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicUsername">
                                <Form.Label>Username</Form.Label>
                                <Form.Control className="shadow rounded-pill" value={username} type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} required />

                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className="shadow rounded-pill" value={password} type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                            </Form.Group>
                            <Button className="shadow rounded-pill" variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                    </Card.Body>
                    <p>- Or -</p>
                    <Button className="shadow rounded-pill mb-2 m-lg-2" href="/sign-up" size="sm" variant="success">
                        SignUp
                    </Button>
                </Card>
            </Container>
        </div>
    )
}

export default Login
