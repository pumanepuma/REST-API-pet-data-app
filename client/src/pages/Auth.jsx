import { useContext, useState } from "react"
import { Container, Form, Button, Card } from "react-bootstrap"
import { Context } from ".."
import {observer} from 'mobx-react-lite'
import { LOGIN_ROUTE, PETS_ROUTE, REGISTER_ROUTE } from "../utils/constants"
import { useLocation, useNavigate } from "react-router-dom"
import { login, register } from '../http/userApi'

const Auth = observer(() => {
    const location = useLocation()
    const signed = location.pathname === LOGIN_ROUTE
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {user} = useContext(Context)
    const navigate = useNavigate()

    const click = async() => {
        try {
            let data
            if(!signed){
                data = await register(email, password)
            }
            else{
                data = await login(email, password)
            }
            user.setUser(data)
            user.setIsAuth(true)
            navigate(PETS_ROUTE)
        }
        catch(e){
            alert(e.response.data.message)
        }
    }
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'
        style={{height: window.innerHeight - 160}}>
            <Card style={{width:600}} className='p-5 m-auto'>
                <h2 className='text-center'>{signed ? 'Login' : 'Registration'}</h2>
                <Form className='d-flex flex-column' style={{textAlign:'left'}}>
                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                        placeholder='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}/>
                    </Form.Group>
                    
                    <Form.Group className='mb-3'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        className='mt-2'
                        placeholder='password'
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
                    </Form.Group>
                    
                    <div className='form-bottom'>
                        {signed ? <span className='mt-2'>No account yet? <a href={REGISTER_ROUTE}>Signup</a></span> 
                        : <span className='mt-2'>Have an account? <a href={LOGIN_ROUTE}>Login</a></span>}
                        <Button className='mt-2' variant="dark" onClick={click}>
                            {signed ? 'Login' : 'Signup'}
                        </Button>
                    </div>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth