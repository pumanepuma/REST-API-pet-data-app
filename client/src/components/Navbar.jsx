import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import {Navbar,Container,NavLink,Button,Nav} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '..'
import {PETS_ROUTE,LOGIN_ROUTE} from '../utils/constants'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logout = () => {
        user.setIsAuth(false)
        user.setUser({})
    }
    return (
        <Navbar bg="primary" variant="dark">
            <Container>
            <NavLink to={PETS_ROUTE} className='navbar' onClick={() => navigate(PETS_ROUTE)}>Pets List</NavLink>
            {
                user._isAuth ?
                <Nav className="ml-auto">
                    <Button variant={'outline-light'} className="mx-2" onClick={logout}>Logout</Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                </Nav>
            }
            </Container>
        </Navbar>
    )
})

export default NavBar