import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'

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
                    <Card.Img className="dog-img" variant="top" src={props.dog.img_url ? props.dog.img_url : "https://thegraphicsfairy.com/wp-content/uploads/2012/09/Draw-Dogs-Printable-GraphicsFairy21.jpg"} />
                    <Card.Body>
                        <Card.Title className="dog-name">{props.dog.name}</Card.Title>
                        <Card.Text>Breed: {props.dog.breed}</Card.Text>
                        <Card.Text>Age: {props.dog.age} yo</Card.Text>
                        <Card.Text>Owner Name: {props.dog.owner_name}</Card.Text>
                        <Card.Text>Walk date: {props.dog.walk}</Card.Text>
                        <Card.Text>Walk time: {props.dog.walk_time}</Card.Text>
                    </Card.Body>
                    <Card.Body >
                        <Button className="shadow rounded-pill" variant="danger" onClick={deleteDogs}>Delete</Button>
                        <Button className="shadow rounded-pill ms-2" href={`/dogs/${props.dog.id}/edit`} varient="info">Edit</Button>
                    </Card.Body>
                </Card>
            </Container>
        </div>

    )
}

export default DogCard
