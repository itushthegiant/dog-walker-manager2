import React from 'react'
import { Card, Button, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDog } from '@fortawesome/free-solid-svg-icons'

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
                        <Card.Title className="dog-name"><FontAwesomeIcon icon={faDog} /> {props.dog.name}</Card.Title>
                        <Card.Text className="dog-info">Breed: {props.dog.breed ? props.dog.breed : "Unknown"}</Card.Text>
                        <Card.Text className="dog-info">Age: {props.dog.age} yo</Card.Text>
                        <Card.Text className="dog-info">Owner Name: {props.dog.owner_name}</Card.Text>
                        <Card.Text className="dog-info">Walk date: {props.dog.walk_date}</Card.Text>
                        <Card.Text className="dog-info">Walk time: {props.dog.walk_time}</Card.Text>
                        <Card.Text className="dog-info">Phone number: {props.dog.phone_number}</Card.Text>
                        <Card.Text className="dog-info">Comments: {props.dog.comments ? props.dog.comments : "No comments"}</Card.Text>
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
