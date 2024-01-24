const express = require('express')
const app = express()
const cors=require('cors')
const mongoose=require('mongoose')

const router=require('./routes/user.routes')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://tu6xkjyle:Rassel73@cluster0.d2pfwsr.mongodb.net/').then(res=>{
    console.log('db connected')
})

app.use('/products',router)
app.listen(3030,()=>{
    console.log('port connected')
})