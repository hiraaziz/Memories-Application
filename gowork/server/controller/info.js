import mongoose from 'mongoose'
import Profile from '../models/models.js'

export const showinfo=async(req,res)=>{
    try{
        const data = await Profile.find()
        
        res.status(200).json(data)
    }
    catch(error){
        res.status(404).json({message:error.message})
    }
}

export const createprofile=async(req,res)=>{
    const data=req.body;
    const newdata = new Profile(data);
    try{
        await newdata.save();
        res.status(200).json(newdata);
    }catch(error){
        res.status(409).json({message:error.message})
    }
}
export const updateprofile=async(req,res)=>{
    const {id:_id} = req.params
    const post=req.body;
    try{
        if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No such post with this id')
        const updatedPost = await Profile.findByIdAndUpdate(_id,{...post, _id}, {new:true});
        res.json(updatedPost)
    }catch(error){
        res.status(409).json({message:error.message})
    }
}
export const deleteprofile=async(req,res)=>{
    const {id} = req.params
    try{
        console.log(id)
        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('No such post with this id')
        const deletePost = await Profile.findByIdAndRemove(id)
        res.json({message:'profile deleted successfully'})
    }catch(error){
        res.status(409).json({message:error.message})
    }
}