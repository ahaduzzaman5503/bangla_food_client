import { useState } from 'react'
import './App.css'
import Header from './Components/Shared/Header/Header'
import Footer from './Components/Shared/Footer/Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import { ColorRing } from 'react-loader-spinner'

function App() {
  const [count, setCount] = useState(0)
  const navigation = useNavigation();

  return (
    <>
      <Header></Header>
      <div
      className='container mx-auto'
      >{navigation.state === 'loading' ? <div className='flex items-center justify-center'> <ColorRing></ColorRing> </div> : ''}</div>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
