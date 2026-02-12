import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css'
import LandingPage from './components/Landingpage'
import Login from './components/Login'
import SignUp from './components/SignUp'

function App() {


  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<LandingPage></LandingPage>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
       </Routes>
       </BrowserRouter>
    </>
  )
}

export default App
