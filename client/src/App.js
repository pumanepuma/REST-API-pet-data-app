import { Routes, Route } from 'react-router-dom';
import './App.css';
import NavBar from './components/Navbar'
import {authRoutes,publicRoutes} from './routes'

function App() {
  let isAuth = true
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        {isAuth && authRoutes.map(({path,element}) => <Route key={path} path={path} element={element}/>)}
        {publicRoutes.map(({path,element}) => <Route key={path} path={path} element={element}/>)}
      </Routes>
    </div>
  );
}

export default App;
