const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const product = require('./routes/productRoute');
const category = require('./routes/categoryRoute');
const gender = require('./routes/genderRoute');
const role = require('./routes/roleRoute');
const staff = require('./routes/staffRoute');
const invoice = require('./routes/invoiceRoute');
const voucher = require('./routes/voucherRoute');
const shop = require('./routes/shopRoute');
const dotenv = require('dotenv').config();

const app = express();

app.use(bodyParser.urlencoded({extended :false}))
app.use(bodyParser.json())

app.use('/api',product)
app.use('/api',category)
app.use('/api',gender)
app.use('/api',role)
app.use('/api',staff)
app.use('/api',invoice)
app.use('/api',voucher)
app.use('/api',shop)

mongoose
.connect(process.env.MONGO_DB)
.then(() => {
    app.listen(8080,()=>{
        console.log('Connected Successfully!')
    })
})
.catch((err) => console.log(err))