import { useEffect } from "react"
import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { PETS_ROUTE } from '../utils/constants'

const Pet = ({pet}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='mb-3'>
            <Card style={{width:150, cursor:'pointer',borderRadius:'5px'}} 
             onClick={() => navigate(`${PETS_ROUTE}/${pet.id}`)}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + pet.cover}/>
                <p>{pet.name}</p>
                <p>{pet.age} years old</p>
                <p>{pet.type}</p>
            </Card>
        </Col>
    )
}

export default Pet