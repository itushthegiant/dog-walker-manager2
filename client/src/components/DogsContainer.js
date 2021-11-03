import React, { useState, useEffect } from 'react'
import DogCard from './DogCard'
import { Col, Row, Container } from 'react-bootstrap'




function Dogs() {

    const [dogs, setDogs] = useState([])


    useEffect(() => {
        fetch('/dogs')
            .then(res => res.json())
            .then(data => setDogs(data))
    }, [])

    const filterDogs = (id) => {
        const newDogs = dogs.filter(dog => dog.id !== id)
        setDogs(newDogs)
    }


    const showDogs = () => {
        return dogs.map(dog => {
            return <Col key={dog.id}><DogCard filterDogs={filterDogs} setDogs={setDogs} dog={dog} /></Col>
        })
    }


    return (
        <div>
            <Container>
                <Row>
                    {showDogs()}
                </Row>
            </Container>
        </div>
    )
}

export default Dogs
