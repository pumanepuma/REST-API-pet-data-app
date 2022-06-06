import { useContext, useEffect, useState } from "react"
import { Button, Card, Container, Image, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import {Context} from '..'
import {observer} from 'mobx-react-lite'

const PetPage = observer(() => {
    const pet = {
        name:'Skoobie Doo',type:'dog',age:'7',id:2,
        photos:['https://i.pinimg.com/474x/53/fa/b6/53fab6660292f20cdaa67c5babae92ba--scooby-doo-cartoon-picture.jpg',
    'https://i.pinimg.com/550x/4e/44/ca/4e44cacc57d046d1603f228a811c0eae.jpg']
    }
    const {user} = useContext(Context)
    console.log(user._isAuth)
    return (
        <Container className='d-flex flex-col justify-content-center align-items-center text-center'>
            <Card style={{width:600}} className='d-flex flex-col justify-content-center align-items-center text-center'>
                <div>
                    {pet.photos.map(photo => <Image src={photo} height={350} width={350}/>)}
                </div>
                <div>
                    <h4>{pet.name}</h4>
                    <p>{pet.age} years old</p>
                </div>
                {user._isAuth && <Row className='d-flex flex-row justify-content-between'>
                    <Button variant='primary'>Add photos</Button>
                    <Button variant='danger'>Delete</Button>
                </Row>}
            </Card>
        </Container>
    )
})

export default PetPage