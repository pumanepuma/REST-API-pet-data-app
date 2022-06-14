import { observer } from 'mobx-react-lite'
import { useContext } from 'react'
import { Navbar, Container, NavLink, Button, Nav, Image } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { Context } from '..'
import { PETS_ROUTE, LOGIN_ROUTE, CREATE_ROUTE, CATS_ROUTE, DOGS_ROUTE } from '../utils/constants'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logout = () => {
        user.setIsAuth(false)
        user.setUser({})
        navigate(PETS_ROUTE)
    }
    return (
        <Navbar >
            <Container className='navbar'>
            <div className='navs'>
            <NavLink href='/' className='navbar-logo'>
                <div className='logo'>HP</div>
                <span id='logo-text'>Happy Pet</span>
            </NavLink>
                <NavLink  id='pets-list' style={{color:'black'}} onClick={() => navigate(PETS_ROUTE)}>Pets List</NavLink>
            </div>
            {
                user._isAuth ?
                <Nav className="ml-auto">
                    <Button variant='outline-dark' className="mx-2" onClick={logout}>Logout</Button>
                    <Button variant='outline-dark' onClick={() => navigate(CREATE_ROUTE)}>Add new Pet</Button>
                </Nav>
                :
                <Nav className="ml-auto">
                    <Button variant='outline-dark' onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
                </Nav>
            }
            </Container>
        </Navbar>
    )
})

export default NavBar