import * as api from '../api/api'

export const getpost=()=>async(dispatch)=>{
    try{
        const {data} = await api.getpost()
        console.log(data)
        dispatch({type:'FETCH_ALL', payload:data})
    }catch(error){
        console.log(error.message)
    }
}
export const createpost=(newpost)=>async(dispatch)=>{
    try{
        const {data} = await api.createpost(newpost)
        dispatch({type:'CREATE', payload:data})
    }catch(error){
        console.log(error.message)
    }
}
export const updatepost=(id,updatepost)=>async(dispatch)=>{
    try{
        const {data} = await api.updatepost(id,updatepost)
        console.log(data)
        dispatch({type:'UPDATE', payload:data})
    }catch(error){
        console.log(error.message)
    }
}
export const deletepost=(id)=>async(dispatch)=>{
    try{
        console.log(id)
        const {data} = await api.deletepost(id)
        console.log(data)
        dispatch({type:'DELETE', payload:id})
    }catch(error){
        console.log(error.message)
    }
}