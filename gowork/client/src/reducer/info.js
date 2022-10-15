export default(info=[],action)=>{
    switch(action.type){
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE':
            return [...info,action.payload];
        case 'UPDATE':
            return info.map((infos)=>infos._id === action.payload._id?action.payload:infos)
        case 'DELETE':
            return info.filter((infos)=> infos._id!==action.payload)
        default:
            return info
    }
}