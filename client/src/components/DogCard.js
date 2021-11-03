import React from 'react'
import { Card, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap'

function DogCard(props) {



    const deleteDogs = () => {
        fetch(`/dogs/${props.dog.id}`, {
            method: 'DELETE',
        })
            .then(() => props.filterDogs(props.dog.id))
    }
    

    return (
        <div>
            <Container>
                    <Card className="text-center dog-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.dog.img_url} />
                        <Card.Body>
                            <Card.Title>{props.dog.name}</Card.Title>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="dog-card">Breed: {props.dog.breed}</ListGroupItem>
                            <ListGroupItem className="dog-card">Age: {props.dog.age} yo</ListGroupItem>
                            <ListGroupItem className="dog-card">Owner Name: {props.dog.owner_name}</ListGroupItem>
                            <ListGroupItem className="dog-card">Walk date: {props.dog.walk}</ListGroupItem>
                            <ListGroupItem className="dog-card mb-3">Walk time: {props.dog.walk_time}</ListGroupItem>
                        </ListGroup>
                        <Card.Body >
                            <Button variant="outline-danger" onClick={deleteDogs}>Delete</Button>
                        </Card.Body>
                    </Card>
            </Container>
        </div>
    )
}

export default DogCard
