import React, { useState } from 'react'
import { Card, Button, Form, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SignUp({ setCurrentUser }) {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/signup', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
                passwordConfirmation: passwordConfirmation,
            }),
        })
            .then((r) => {
                const user = {
                    username,
                    password,
                }
                setCurrentUser(user)
                history.push('/dogs')
            })
    }


    return (
        <div>
            <Container>
                <Card className="col-md-6 col-md-offset-3 signup-form" style={{ width: '18rem' }}>
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
                            <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                                <Form.Label>Confirm Password</Form.Label>
                                <Form.Control className="shadow rounded-pill" value={passwordConfirmation} type="password" placeholder="Password" onChange={(e) => setPasswordConfirmation(e.target.value)} required />
                            </Form.Group>
                            <Button className="shadow rounded-pill" variant="primary" type="submit">
                                Signup
                            </Button>
                        </Form>
                    </Card.Body>
                    <p> - Or -</p>
                    <Button className="shadow rounded-pill mb-2 m-lg-2" variant="success" size="sm" href="/">
                        Login
                    </Button>
                </Card>
            </Container>
        </div>
    )
}

export default SignUp
