import { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Auth from './pages/Auth';
import {authRoutes,publicRoutes} from './routes'
import {Context} from '.'

function App() {
  const {user} = useContext(Context)
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        {user.isAuth && authRoutes.map(({path,element}) => <Route key={path} path={path} element={element}/>)}
        {publicRoutes.map(({path,element}) => <Route key={path} path={path} element={element}/>)}
        <Route path='*' element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
