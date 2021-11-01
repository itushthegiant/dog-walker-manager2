import React, { useState, useEffect } from 'react'
import DogCard from './DogCard'
import { useHistory } from 'react-router-dom'




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
            return <DogCard  key={dog.id} dog={dog} />
        })
    }


    return (
        <div>
            {showDogs()}
        </div>
    )
}

export default Dogs
