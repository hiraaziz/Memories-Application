import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import infoRoutes from './routes/info.js'

const app =express();
app.use(express.json({limit:'500mb'}))
app.use(express.urlencoded({limit:'500mb',extended:true,parameterLimit:50000}));
app.use(cors({origin:true, credentials:true}));
app.use('/info',infoRoutes);

const PORT=process.env.PORT || 4000;
const CONNECTION_URL = 'mongodb+srv://hiraaziz:hiraaziz@mernapp.v6eaebe.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>app.listen(PORT,()=>console.log(`server is listening on PORT ${PORT}`)))
.catch((error)=>console.log(error.message))