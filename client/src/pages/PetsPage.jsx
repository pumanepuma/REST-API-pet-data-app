import { observer } from "mobx-react-lite"
import { useContext, useEffect } from "react"
import { Container, Row, Col, ListGroup } from "react-bootstrap"
import { Context } from ".."
import Pet from "../components/Pet"
import { getPets } from "../http/petsApi"
import { Image } from 'react-bootstrap'
import { SideBar } from "../components/SideBar"

const PetsList = observer(() => {
    const {pets} = useContext(Context)
    useEffect(() => {
        getPets().then(data => pets.setPets(data))
    },[])
    
    return (
        <Container style={{height:window.innerHeight - 160}}>
            <Row className='mt-2'>
                <Col md={3}>
                    <SideBar />
                </Col>
                <Col md={9}>
                    <Row className="d-flex">
                        {pets._pets.map(pet => <Pet key={pet.id} pet={pet}/>)}
                    </Row>
                </Col>
            </Row>
        </Container>
    )
})

export default PetsList