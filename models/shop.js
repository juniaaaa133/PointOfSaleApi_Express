const {Schema,model} = require('mongoose')

let shopSchema = new Schema({
    name : {
        type :String,
        required : true,
    },
    code : {
        type : String,
        required : true,
    },
    address : {
        type :String,
        requried : true,
    },
    phoneNumber : {
        type : String,
        required : true,
    }
})

module.exports = model("Shop",shopSchema)