import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Container, Row } from "react-bootstrap"
import { Context } from ".."
import Pet from "../components/Pet"
import { getPets } from "../http/petsApi"
import { Image } from 'react-bootstrap'

const PetsList = observer(() => {
    const {pets} = useContext(Context)
    useEffect(() => {
        getPets().then(data => pets.setPets(data)).then(() => console.log(pets._pets))
    },[])
    return (
        <Container style={{height:window.innerHeight - 160}}>
            <h2>pets list</h2>
            <PetsList />
        </Container>
    )
})

export default PetsList