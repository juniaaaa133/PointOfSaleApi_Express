const {Schema,model} = require('mongoose')

let staffSchema = new Schema({
    code : {
        type : String,
        required :true
    },
    name : {
        type : String,
        required: true,
    },
    email : {
        type : String,
        required : true,
        unique : true,
    },
    password : {
        type :String,
        required : true,
        unique : true,
        minLength : 7
    },
    address : {
        type :String,
        required :true
    },
    dateOfBirth : {
        type : String,
        required :true,
    },
    role : [{
       type : Schema.Types.ObjectId,
       ref : "Role",
    }],
    gender : [{
        type : Schema.Types.ObjectId,
       ref : "Gender",
    }]
})

module.exports = model('Staff',staffSchema)
