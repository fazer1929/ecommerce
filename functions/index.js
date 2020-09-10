const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HPvTlAjOMRbAmPkRgPrgy0yl4woU57NFQHwbavgICfYtcG4ywXn3MMOTsiHydCgt3hohu9mqLbdMlThmZjpZlce003fIYuHeW');

//App Config
const app = express();


//Middlewares
app.use(cors({origin:true}));
app.use(express.json());


// API route
app.get('/',(req,res) => res.status(200).send("Hello World"))

app.post('/payments/create',async (req,res) =>{
    const total = req.query.total;
    console.log('Payment Request Recieved MANNNN', total)
    const paymentIntent = await stripe.paymentIntent.create({
        amount:total,
        currency: "usd",
    })
    //OKAY - Created Something
    res.status(201).send({
        clientSecret: paymentIntent.client_secret
    })
})
//Listen Command
exports.api = functions.https.onRequest(app)
//http://localhost:5001/e-commerce-39de8/us-central1/api
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
