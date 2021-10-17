

Functional component is stateless component.Manages only static things like-: product info/disclamer/ui of app .But we use hooks like usestate.useeffect,usereducer to make it stateful component.


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
Used Context api(hook) is used to avoid prop drilling(passing data from one part to another by going through several other parts that dont require that data

Whichever component is changing/rerendring in frontend by user's action like clicking,post requesting(changing data in database) is a stateful component.
 eg-: no of items in cart,user name showcase when signed in,recent orders.
 Class component is stateful component manages dynamic things.(nowadays everybody use hooks rather than class component)
Functional component is stateless component.Manages only static things like-: product info/disclamer/ui of app .But we use hooks like usestate.useeffect,usereducer to make it stateful component.
There are 2 ways to make stateful component -:using class component, using hooks in the functional component

eg1-: useeffect(add info to the cart of the item clicked,[whenver addtocart gets clicked])
eg2-: useeffect(If(user just logged in/already logged in){update the whole app.js(whole website) with his previos orders and his name on home page}
               else{update the home page with hello guest}     ,                            [])(do this when this page loads (nothing in array means whenever this page loads)



