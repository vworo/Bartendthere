import { Outlet } from 'react-router-dom'

import './App.css'
import Logo from './assets/Logo2.png'
import Main from './assets/Main1.jpeg'
import NavigationBar from './components/NavigationBar'

export default function App() {
    return (
        <>
            <img className='img-logo' src={Logo} alt="Main Logo" />
            <h1>Bartendthere</h1>
            <NavigationBar />
            <Outlet />
            <img className='img-feature' src={Main} alt="Main image" />
        </>
    )
}