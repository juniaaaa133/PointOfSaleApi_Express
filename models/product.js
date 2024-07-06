const {Schema,model} = require('mongoose')

let productSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    code : {
        type : String,
        required : true,
    },
    price : {
        type : Number ,
        required : true,
    },
    category : [{
        type : Schema.Types.ObjectId,
        ref : "Category"
    }]
})

module.exports = model("Product",productSchema)