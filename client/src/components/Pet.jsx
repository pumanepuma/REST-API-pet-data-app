import { Card, Col, Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { PETS_ROUTE } from '../utils/constants'

const Pet = ({name,age,type,photos,id}) => {
    const navigate = useNavigate()
    return (
        <Col md={3} className='mt-3'>
            <Card style={{width:150, cursor:'pointer'}} border='light'>
                <Image src={photos[0]} height={150} width={150}/>
                <div className='mt-1 d-flex flex-row justify-content-between align-items-center'>
                    <p>{name}</p>
                    <p>{age} years old</p>
                </div>
            </Card>
        </Col>
    )
}

export default Pet