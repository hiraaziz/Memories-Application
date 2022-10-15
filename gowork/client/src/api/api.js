import axios from 'axios'

const url="http://localhost:4000/info"

export const getpost=()=>axios.get(url)
export const createpost=(newpost)=>axios.post(url,newpost)
export const updatepost=(id,updatepost)=>axios.put(`${url}/${id}`,updatepost)
export const deletepost=(id)=>axios.delete(`${url}/${id}`)