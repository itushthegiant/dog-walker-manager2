import React, { useState } from 'react'
import { Form, Row, Button, Col, Container, Card } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'


function AddADog() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [breed, setBreed] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [walkTime, setWalkTime] = useState('')
    const [walkDate, setWalkDate] = useState('')
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch('/dogs', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                breed,
                age,
                owner_name: ownerName,
                img_url: imgUrl,
                walk_time: walkTime,
                walk: walkDate,
            }),
        })
            .then((r) => {
                history.push('/dogs')
            })
    }






    return (
        <div>
            <Container>
                <Card className="mt-3"style={{ width: '80rem' }}>
                    <Form className="text-center" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Dog Name</Form.Label>
                                <Form.Control value={name} type="text" placeholder="Enter dog name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Breed</Form.Label>
                                <Form.Control value={breed} type="text" placeholder="Enter breed" onChange={(e) => setBreed(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Owner Name</Form.Label>
                                <Form.Control value={ownerName} type="text" placeholder="Enter human name" onChange={(e) => setOwnerName(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Age</Form.Label>
                                <Form.Control value={age} type="text" placeholder="Enter age" onChange={(e) => setAge(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Walk Date</Form.Label>
                                <Form.Control value={walkDate} type="date" placeholder="Select date" onChange={(e) => setWalkDate(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Walk Time</Form.Label>
                                <Form.Control value={walkTime} type="time" placeholder="Select time" onChange={(e) => setWalkTime(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Img Url</Form.Label>
                            <Form.Control value={imgUrl} type="text" placeholder="Dogs picture" onChange={(e) => setImgUrl(e.target.value)} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Fetch!
                        </Button>
                    </Form>

                </Card>
            </Container>
        </div>
    )
}

export default AddADog
