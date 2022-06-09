import { observer } from "mobx-react-lite"
import { useContext, useEffect, useState } from "react"
import { Container, Row } from "react-bootstrap"
import { useLocation } from "react-router-dom"
import { Context } from ".."
import Pet from "../components/Pet"
import { DOGS_ROUTE, CATS_ROUTE } from "../utils/constants"

const PetsList = observer(() => {
    const {pets} = useContext(Context)
    return (
        <Container>
            <Row>
                {
                pets._pets.map(pet => <Pet key={pet.id}
                name={pet.name} 
                age={pet.age} 
                photos={pet.photos} 
                type={pet.type}
                id={pet.id}/>)
                }
            </Row>
        </Container>
    )
})

export default PetsList