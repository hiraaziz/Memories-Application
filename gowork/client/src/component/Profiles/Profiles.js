import React from 'react'
import { useSelector } from 'react-redux'
import {CircularProgress} from '@mui/material'
import Profile from './Profile/Profile'
import styles from './styles.module.css'

const Profiles = ({currentId,setCurrentId}) => {
  const info = useSelector((state)=>state.info)
  
  return (
    !info.length?<CircularProgress/>:(
      <div className={styles.container_grid}>
        {info.map((profile)=>(
          <div className={styles.item} key={profile.id}>
            <Profile info={profile} setcurrentId={setCurrentId} currentId={currentId}/>
          </div>
        ))}
      </div>
    )
  )
}

export default Profiles