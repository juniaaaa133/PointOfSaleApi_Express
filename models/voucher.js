const {Schema,model} = require('mongoose')

let voucherSchema = new Schema({
    code : {
        type : String,
        required :true
    },
    productCode : {
        type : String,
        required :true
    },
    productQty : {
        type : Number,
        required :true
    },
    productPrice : {
        type :Number,
        required :true
    },
    amount : {
        type :Number,
        required :true
    }
})

module.exports = model('Voucher',voucherSchema)
