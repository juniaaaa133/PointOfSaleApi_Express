const {Schema,model} = require('mongoose')

let genderSchema = new Schema({
    genderName : {
        type :String,
        required :true
    },
    code : {
        type:String,
        required :true
    }
})

module.exports =  model("Gender",genderSchema)

