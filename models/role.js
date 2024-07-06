const {Schema,model} = require('mongoose')

let roleSchema = new Schema({
    type : {
        type : String,
        required :true
    },
    code : {
        type: String,
        required : true
    }
})

module.exports = model("Role",roleSchema)

