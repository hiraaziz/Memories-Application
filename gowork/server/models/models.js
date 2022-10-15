import mongoose from 'mongoose'

const infoSchema = mongoose.Schema({
    name:String,
    city:String,
    tags:[String],
    createdAt:{
        type:Date,
        default: new Date()
    }
})
const Profile = mongoose.model('Profile',infoSchema)
export default Profile