import { observer } from "mobx-react-lite"
import { useContext } from "react"
import { Container, Row } from "react-bootstrap"
import { Context } from ".."
import Pet from "../components/Pet"

const PetsList = observer(() => {
    const {pets} = useContext(Context)
    return (
        <Container>
            <Row>
                {pets._pets.map(pet => <Pet key={pet.id}
                name={pet.name} 
                age={pet.age} 
                photos={pet.photos} 
                type={pet.type}
                id={pet.id}/>)}
            </Row>
        </Container>
    )
})

export default PetsList