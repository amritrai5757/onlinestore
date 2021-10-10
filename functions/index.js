const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JhuWXSIaq7Fk4lADRUw58recMB7NwoLNuevTi5TdgR13fofEuHY4qyOHGnEysfneOx0wWn6GCmtRNwzsA0nFIoS00KA8KWnCy");

// APi


// App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// exple endpoint
// http://localhost:5001/online-store-6cd13/us-central1/api
// http://localhost:5001/online-store-6cd13/us-central1/api
