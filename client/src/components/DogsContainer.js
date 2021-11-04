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
            return <Col key={dog.id}><DogCard key={dog.id} filterDogs={filterDogs} setDogs={setDogs} dog={dog} /></Col>
        })
    }


    return (
        <div>
            <Container>


                {dogs.length === 0 ?
                    <div className="headers">
                        <h1 className="text-center"><i className="far">No scheduled walks</i></h1>
                    </div>
                    :
                    <div >
                        <div className="headers">
                            <h1 className="text-center"><i className="far">Your Walks</i></h1>
                        </div>
                        <Row>
                            {showDogs()}
                        </Row>
                    </div>
                }
            </Container>
        </div>
    )
}

export default Dogs
