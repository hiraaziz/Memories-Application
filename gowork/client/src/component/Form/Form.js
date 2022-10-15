import React,{useState,useEffect} from 'react'
import { createpost } from '../../actions/actions'
import styles from './styles.module.css'
import {useDispatch,useSelector} from 'react-redux'
import { updatepost } from '../../actions/actions'


const Form = ({currentId,setCurrentId}) => {
  const [post,setpost]=useState({name:'',city:'',tags:''})
  const info=useSelector((state)=>currentId?state.info.find((p)=>p._id===currentId):null)
  const dispatch=useDispatch();
  
  useEffect(()=>{
    if(info)setpost(info)
  },[info])

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(currentId){
      dispatch(updatepost(currentId,post))
      setCurrentId(null)
      setpost({name:'',city:'',tags:''})
      console.log(post)
    }
    else{
      dispatch(createpost(post))
      setpost({name:'',city:'',tags:''})
      console.log(post)
    }
  }

  return (
    <>
    <div className={styles.container}>
        <h1>Form</h1>
        <form className={styles.forms} autoComplete='off' noValidate onSubmit={handleSubmit}>
            <div className={styles.smallform}>
            <label className={styles.labelname}>Name</label>
            <input value={post.name} onChange={(e)=>setpost({...post,name:e.target.value})}/>
            <label className={styles.labelname}>City</label>
            <input value={post.city} onChange={(e)=>setpost({...post,city:e.target.value})}/>
            <label className={styles.labelname}>Tags</label>
            <input value={post.tags} onChange={(e)=>setpost({...post,tags:e.target.value})}/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            </div>

        </form>
    </div>
    </>
  )
}

export default Form