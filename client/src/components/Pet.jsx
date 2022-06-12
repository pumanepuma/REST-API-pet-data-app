import { useEffect } from "react"
import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { PETS_ROUTE } from '../utils/constants'

const Pet = ({pet}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='mt-3'>
            <Card style={{width:150, cursor:'pointer'}} border='light' onClick={() => navigate(`${PETS_ROUTE}/${pet.id}`)}>
                <p>{pet.name}</p>
            </Card>
        </Col>
    )
}

export default Pet