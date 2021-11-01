import React, { useState, useEffect } from 'react'
import DogCard from './DogCard'
import { useHistory } from 'react-router-dom'
import { Col, Row } from 'react-bootstrap'




function Dogs() {

    const [dogs, setDogs] = useState([])
    const history = useHistory()


    useEffect(() => {
        fetch('/dogs')
            .then(res => res.json())
            .then(data => setDogs(data))
    }, [])




    const showDogs = () => {
        return dogs.map(dog => {
            return <Col key={dog.id}><DogCard dog={dog} /></Col>
        })
    }


    return (
        <div>
            <Row>
                {showDogs()}
            </Row>
        </div>
    )
}

export default Dogs
