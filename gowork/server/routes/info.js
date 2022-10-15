import express from 'express';
import {showinfo,createprofile,updateprofile,deleteprofile} from '../controller/info.js';
const router = express.Router();

router.get('/',showinfo);
router.post('/',createprofile)
router.put('/:id',updateprofile)
router.delete('/:id',deleteprofile)

export default router