import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Shared/Header/Header'
import Footer from './Components/Shared/Footer/Footer'
import { Outlet, useNavigation } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigation = useNavigation();

  return (
    <>
      <Header></Header>
      <div
      className='container mx-auto text-center'
      >{navigation.state === 'loading' ? 'loading...' : ''}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
