import React,{useState,useEffect} from 'react'
import styles from './App.module.css'
import Navbar from './component/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/Home/Home'
import Auth from './component/Auth/Auth'
import Profiles from './component/Profiles/Profiles'
import { getpost } from './actions/actions'
import { useDispatch } from 'react-redux'

const App = () => {
  const [currentId, setCurrentId] = useState(null)
  const dispatch=useDispatch()
  
  useEffect(()=>{
    dispatch(getpost())
  },[dispatch,currentId])
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
        <Route path="/" element={ <Home currentId={currentId} setCurrentId={setCurrentId}/> } />
        <Route path="auth" element={ <Auth/> } />
        <Route path="show" element={ <Profiles currentId={currentId} setCurrentId={setCurrentId}/> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App