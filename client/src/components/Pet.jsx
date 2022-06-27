import { useEffect } from "react"
import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { PETS_ROUTE } from '../utils/constants'

const Pet = ({pet}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='mb-3'>
            <Card style={{width:200, cursor:'pointer',borderRadius:'5px',background:'transparent'}} 
             onClick={() => navigate(`${PETS_ROUTE}/${pet.id}`)}>
                <Image 
                width={200} height={200} 
                src={process.env.REACT_APP_API_URL + pet.cover}
                className='rounded petsList'
                />
                <span className='mt-1'>{pet.name}</span>
            </Card>
        </Col>
    )
}

export default Pet