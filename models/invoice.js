const {Schema,model} = require('mongoose')

let invoiceSchema = new Schema({
    dateTime : {
        type : Date,
       required :true
    },
    voucherNo : {
        type : String,
        required :true,
    },
    totalAmount : {
        type : Number,
        required :true
    },
    discount : {
        type : Number,
    },
    staffCode : {
        type :String,
        required :true,
    },
    tax : {
        type : Number,
        required :true
    },
    paymentMethod : {
        type : String,
        required :true
    },
    paymentAmount :{
        type : Number,
        required :true
    },
    receivedAmount : {
        type : Number,
        required :true
    },
    changeAmount : {
        type : Number
    }, 
    customerAccountNo : {
        type :String,
        required :true
    }
})

module.exports = model('Invoice',invoiceSchema)
