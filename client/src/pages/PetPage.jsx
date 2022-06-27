import { useContext, useEffect, useState } from "react"
import { Button, Card, Container, Image, Row, Col } from "react-bootstrap"
import { useNavigate, useParams } from "react-router-dom"
import {Context} from '..'
import {observer} from 'mobx-react-lite'
import { deletePet, getOnePet } from "../http/petsApi"
import { PETS_ROUTE } from "../utils/constants"
import UpdatePet from "../components/UpdatePet"

const PetPage = observer(() => {
    const [pet,setPet] = useState({})
    const [photos,setPhotos] = useState([])
    const [showUpdate,setShowUpdate] = useState(false)
    let {id} = useParams()
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const [chosenPhoto,setChosenPhoto] = useState('')

    useEffect(() => {
        getOnePet(id).then(data => {
            console.log(data.photos)
            setPet(data.pet[0])
            setPhotos(data.photos)
        }).then(setChosenPhoto(pet.cover))
    },[])

    const onDelete = () => {
        deletePet(id)
        navigate(PETS_ROUTE)
    }

    const choosePhoto = (val) => {
        console.log(val)
        setChosenPhoto(val.img)
    }
    return (
        <Container className='d-flex flex-row justify-content-center' 
        style={{height:window.innerHeight -160}}>
            <Col md={4}>
                <Card className='d-flex flex-column'
                style={{width:440, background:'transparent'}}>
                    <Image className='rounded mx-1 mt-1' 
                    src={chosenPhoto ? process.env.REACT_APP_API_URL + chosenPhoto 
                    : process.env.REACT_APP_API_URL + pet.cover} width={430} height={430} />
                    <div className='mt-1 mx-1 scrollable-container'>
                        <ul className="list">
                            {photos.map(photo => <li className='item'>
                                <Image src={process.env.REACT_APP_API_URL + photo.img} 
                                height={100} width={100}
                                onClick={() => choosePhoto(photo)}
                                style={{cursor:'pointer'}}
                                className='mx-1 mb-1'/>
                            </li>)}
                        </ul>
                    </div>
                </Card>
            </Col>
            <Col md={{ span: 4, offset: 1 }}
             style={{textAlign:'left'}}
             className='pet-description'
             >
                <p>{pet.name}</p>
                <p>{pet.age} years old</p>
                {user._isAuth && <div 
                className='d-flex flex-row justify-content-start'>
                    <Button variant='dark' onClick={() => {setShowUpdate(true)}}>Add photos</Button>
                    <Button variant='dark' onClick={onDelete} className='mx-1'>Delete</Button>
                    <UpdatePet show={showUpdate} onHide={() => setShowUpdate(false)} />
                </div>}
            </Col>
        </Container>
    )
})

export default PetPage