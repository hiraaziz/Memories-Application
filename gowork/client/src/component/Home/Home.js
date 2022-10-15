import React,{useState, useReducer} from 'react'
import Form from '../Form/Form'

const Home = ({currentId,setCurrentId}) => {
  return (
    <>
    <div>
      <Form currentId={currentId} setCurrentId={setCurrentId}/>
    </div>
    </>
  )
}

export default Home