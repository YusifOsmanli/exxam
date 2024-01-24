const mongoose=require('mongoose')

const user=mongoose.model('product', new mongoose.Schema({
    name:String,
    price:Number,
    image:String
}))

module.exports= {user}