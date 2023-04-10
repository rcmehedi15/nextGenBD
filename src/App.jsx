
import './App.css'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import Home from './components/Home'

function App() {
 
  return (
   <>
    <Header></Header>
    <Home></Home>
    <Outlet></Outlet>

   </>
  )
}

export default App
