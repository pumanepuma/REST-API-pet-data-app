import { useContext, useEffect, useState } from "react"
import { Button, Card, Container, Image, Row } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import {Context} from '..'
import {observer} from 'mobx-react-lite'
import { deletePet, getOnePet } from "../http/petsApi"
import { PETS_ROUTE } from "../utils/constants"
import UpdatePet from "../components/UpdatePet"

const PetPage = observer(() => {
    const [pet,setPet] = useState({})
    const [showUpdate,setShowUpdate] = useState(false)
    let {id} = useParams()
    const {user} = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        getOnePet(id).then(data => setPet(data.pet[0]))
    },[])
    const onDelete = () => {
        deletePet(id)
        navigate(PETS_ROUTE)
    }
    return (
        <Container className='d-flex flex-col justify-content-center align-items-center text-center' 
        style={{height:window.innerHeight -160}}>
            <Card style={{width:600}} className='d-flex flex-col justify-content-center align-items-center text-center'>
                <Image src={process.env.REACT_APP_API_URL + pet.cover} width={300} height={300} />
                <div>
                    <h4>{pet.name}</h4>
                    <p>{pet.age} years old</p>
                </div>
                {user._isAuth && <Row className='d-flex flex-row justify-content-between'>
                    <Button variant='primary' onClick={() => {setShowUpdate(true)}}>Add photos</Button>
                    <Button variant='danger' onClick={onDelete}>Delete</Button>
                    <UpdatePet show={showUpdate} onHide={() => setShowUpdate(false)} />
                </Row>}
            </Card>
        </Container>
    )
})

export default PetPage