Firebase is used as realtime database
wxpress is also deployed on firebase cloud 

Used firebase authentication (auth) for creating new ac using email and password/sign in and stored all the info of email and password in firestore to sign in whenever user comes again.

Used "firestore" database which is a nosql & schemaless database. All the data is stored in collection & document form, in which each document stores data in mapped form(key value form).

We have build an express backend and hosted it on cloud function

In ecommerce site we have used google cloud fucntions

Used Context api(hook) is used to avoid prop drilling(passing data from one part to another by going through several other parts that dont require that data).

Used usestate & usereducer inside functional component for managing and updating state like product(id,img,title) added/removed from cart,incresing/decresing cart value by items added rather than using class component. 

Used useeffect for managing lifecycle methods/side effect(updating/rendering external variable due to local changes) like, if item added/removed from cart request a new key for the total amount for payment from stripe. 

Used React Router for making single page web app(doesnt require reloading for going to different page).  Used 'links' for linking different buttons to redirect to desired page. 
