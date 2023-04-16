import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import Dashboard from '../pages/dashboard'

const Rotas = () => (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
    </Routes>
)

export default Rotas