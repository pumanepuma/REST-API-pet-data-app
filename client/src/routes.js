import Auth from './pages/Auth'
import PetsList from './pages/PetsList'
import PetPage from './pages/PetPage'
import {PETS_ROUTE,LOGIN_ROUTE,REGISTER_ROUTE} from './utils/constants'

export const authRoutes = [ 
    {
        path: PETS_ROUTE,
        element: <PetsList />
    },
    {
        path: PETS_ROUTE + '/:id',
        element: <PetPage />
    }
]

export const publicRoutes = [ 
    {
        path: LOGIN_ROUTE,
        element: <Auth />
    },
    {
        path: REGISTER_ROUTE,
        element: <Auth />
    }
]