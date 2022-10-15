import React from 'react'
import moment from 'moment'
import styles from './styles.module.css'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {deletepost}  from '../../../actions/actions'

const Profile = ({info,setcurrentId,currentId}) => {
  const dispatch=useDispatch();
  
  return (
    <div >
      
      <label className={styles.labeltag}>Name</label>
      <h3>{info.name}</h3>
      <label className={styles.labeltag}>City</label>
      <h3>{info.city}</h3>
      <label className={styles.labeltag}>Tags</label>
      <h3>{info.tags}</h3>
      <p>Created At {moment(info.createdAt).fromNow()}</p>
      <button className={styles.delete_button} onClick={()=>dispatch(deletepost(info._id))}>Delete</button>
      <Link to='/'><button className={styles.edit_button} onClick={()=>setcurrentId(info._id)}>Edit</button></Link>
    </div>
  )
}

export default Profile