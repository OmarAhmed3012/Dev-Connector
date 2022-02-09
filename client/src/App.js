import './App.css'
import { Navbar } from './components/layout/Navbar'
import { Landing } from './components/layout/Landing'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './components/auth/Login'
import { Register } from './components/auth/Register'

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Landing />} />
      <Route exact path='register' element={<Register />} />
      <Route exact path='login' element={<Login />} />
    </Routes>
  </Router>
)

export default App