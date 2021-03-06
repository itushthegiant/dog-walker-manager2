import React, { useState } from 'react'
import { Form, Row, Button, Col, Container, Card, Alert } from 'react-bootstrap'
import { useHistory, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons'



function EditDog() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [ownerName, setOwnerName] = useState('')
    const [breed, setBreed] = useState('')
    const [imgUrl, setImgUrl] = useState('')
    const [walkTime, setWalkTime] = useState('')
    const [walkDate, setWalkDate] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [comments, setComments] = useState('')
    const [errors, setErrors] = useState('')
    const { id } = useParams()
    const history = useHistory()


    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`/dogs/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name,
                breed,
                age,
                comments,
                owner_name: ownerName,
                img_url: imgUrl,
                walk_time: walkTime,
                walk: walkDate,
                phone_number: phoneNumber,
            }),
        }).then((r) => {
            if (r.ok) {
                history.push('/dogs')
            } else {
                r.json().then((err) => setErrors(err.errors))
            }
        })
    }


    const renderErrors = () => {
        return errors.map((err) => { return <Alert className="add-dog-alert mt-2 w-50 text-center fs-6 fw-lighter p-1" variant="danger"><FontAwesomeIcon icon={faExclamationCircle} /> {err}</Alert> })
    }




    return (
        <div>
            <Container>
                <div className="headers">
                    <h1 className="text-center"><i className="far">Edit walk</i></h1>
                </div>
                <Card className="mt-4 add-dog-form" style={{ width: '80rem' }}>
                   
                    <Form className="text-center" onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control className="form-input mt-3 shadow rounded-pill w-75" value={name} type="text" placeholder="Enter dog name" onChange={(e) => setName(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control className="form-input mt-3 shadow rounded-pill w-75" value={breed} type="text" placeholder="Enter breed" onChange={(e) => setBreed(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control className="form-input shadow rounded-pill w-75" value={ownerName} type="text" placeholder="Enter human name" onChange={(e) => setOwnerName(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control className="form-input shadow rounded-pill w-75" value={age} type="text" placeholder="Enter age" onChange={(e) => setAge(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control className="form-input shadow rounded-pill w-75" value={walkDate} type="date" placeholder="Select date" onChange={(e) => setWalkDate(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control className="form-input shadow rounded-pill w-75" value={walkTime} type="time" placeholder="Select time" onChange={(e) => setWalkTime(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Control className="form-input shadow rounded-pill w-75" value={phoneNumber} type="text" placeholder="Contact number" onChange={(e) => setPhoneNumber(e.target.value)} />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Control className="form-input shadow rounded-pill w-75" value={comments} type="text" placeholder="Comments..." onChange={(e) => setComments(e.target.value)} />
                            </Form.Group>
                        </Row>

                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Control className="img-form-input shadow rounded-pill w-75" value={imgUrl} type="text" placeholder="Dogs picture" onChange={(e) => setImgUrl(e.target.value)} />
                        </Form.Group>
                        {errors.length > 0 ? renderErrors() : null}

                        <Button className="shadow mb-3" variant="primary" type="submit">
                            Edit
                        </Button>
                    </Form>

                </Card>
            </Container>
        </div>
    )
}

export default EditDog
