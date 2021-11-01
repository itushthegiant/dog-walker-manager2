import React from 'react'
import { Card, ListGroup, ListGroupItem, Button, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function DogCard(props) {

    const history = useHistory()


    const deleteDogs = () => {
        fetch(`/delete-dog/${props.dog.id}`, {
            method: 'DELETE',
        })
            .then((res) => {
                console.log("deleted")
                history.push('/dogs')
            })
    }

    return (
        <div>
            <Container>
                    <Card className="text-center dog-card" style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={props.dog.img_url} />
                        <Card.Body>
                            <Card.Title>{props.dog.name}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem className="dog-card">Breed: {props.dog.breed}</ListGroupItem>
                            <ListGroupItem className="dog-card">Age: {props.dog.age} yo</ListGroupItem>
                            <ListGroupItem className="dog-card">Owner Name: {props.dog.owner_name}</ListGroupItem>
                            <ListGroupItem className="dog-card">Walk date: {props.dog.walk_date}</ListGroupItem>
                            <ListGroupItem className="dog-card">Walk time: {props.dog.walk_time}</ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                            <Card.Link href="#">Edit</Card.Link>
                            <Button onClick={deleteDogs}>Delete</Button>
                        </Card.Body>
                    </Card>
            </Container>
        </div>
    )
}

export default DogCard
