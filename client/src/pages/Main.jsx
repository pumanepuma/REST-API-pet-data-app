import { observer } from "mobx-react-lite"
import { Container, Image, Button } from "react-bootstrap"
import { useNavigate } from "react-router-dom"
import main from '../assets/main-pets-photo.png'
import { PETS_ROUTE } from "../utils/constants"

const Main = observer(() => {
    const navigate = useNavigate()
    return (
        <div className='main-page'>
            <Container className='main' style={{height:window.innerHeight - 160}}>
                <div className='offer'>
                    <h2>Твой новый друг с доставкой на дом </h2>
                    <p>Онлайн магазин домашних животных - удобное решение, когда лень выходить из дома</p>
                    <Button className='offer-button' onClick={() => navigate(PETS_ROUTE)}>посмотреть друзей </Button>
                </div>
                <Image src={main} height={500}/>
            </Container>
        </div>
    )
})

export default Main