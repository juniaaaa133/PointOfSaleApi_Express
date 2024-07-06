const {Schema,model} = require('mongoose')

let categorySchema = new Schema({
    code : {
        type : String,
        required : true,
    },
    name : {
        type : String,
        required : true,
    }
})

module.exports = model("Category",categorySchema)