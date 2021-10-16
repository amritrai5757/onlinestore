Firebase is used as realtime database
Context api and props is used to share data.
we are deploying express api on firebase cloud 
we have used firebase authentication (auth) for creating new ac using email and password/sign in and stored all the info of email and password in firestore to sign in whenever user comes again

we have build checkout/payment page with stripe frontend

We have build a cloud function(serverless function)( backend) to process the stripe payment

when we enter card details and then hit buy now then what happens is-:
Our website will push all the cart information to stripe.
Stripe will create payment for it
Stripe will push all information to the database attached to that particular user

we used "firestore" database which is a nosql database
We have build an express backend and host it on cloud function
src folder is used for making frontend and in functions folder we have made backend (cloud function)
function is backend and src is frontend

In ecommerce site we have used google cloud fucntions for making api endpoint.
