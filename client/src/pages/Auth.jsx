import { useContext, useState } from "react"
import { Container, Form, Button, Row, Card } from "react-bootstrap"
import { Context } from ".."
import {observer} from 'mobx-react-lite'
import { LOGIN_ROUTE, PETS_ROUTE, REGISTER_ROUTE } from "../utils/constants"
import { useLocation, useNavigate } from "react-router-dom"

const Auth = observer(() => {
    const location = useLocation()
    const signed = location.pathname === LOGIN_ROUTE
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const click = () => {
        user.setIsAuth(prev => !prev)
        navigate(PETS_ROUTE)
    }
    console.log(user._isAuth)
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}>
            <Card style={{width:600}} className='p-5 m-auto'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"
                        value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" 
                        value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={click}>
                        {signed ? 'Login' : 'Register'}
                    </Button>
                </Form>
                <Row>
                    {signed ? <p>Don't have an account yet? <a href={REGISTER_ROUTE}>Register</a></p>
                    : <p>Already have an account? <a href={LOGIN_ROUTE}>Login</a></p>}
                </Row>
            </Card>
        </Container>
    )
})

export default Auth